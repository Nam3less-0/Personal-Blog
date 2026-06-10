<template>
  <section ref="sectionRef" class="experience-section">
    <div class="section-inner">
      <SectionLabel label="04 — Experience" />
      <h2 class="section-heading reveal">Experience</h2>
      <p class="section-desc reveal">
        Internships across data science and business intelligence, grounded in a Dean's List Business Analytics programme at NUS.
      </p>

      <div class="summary-strip reveal">
        <div v-for="item in summaryItems" :key="item.label" class="summary-item">
          <span class="summary-value">{{ item.value }}</span>
          <span class="summary-label">{{ item.label }}</span>
        </div>
      </div>

      <div class="timeline">
        <div class="timeline-spine" aria-hidden="true" />

        <article
          v-for="(entry, index) in experiences"
          :key="entry.company + entry.dateRange"
          class="timeline-entry reveal"
          :class="{ current: index === 0 }"
        >
          <div class="timeline-marker">
            <div class="timeline-node" :class="{ current: index === 0 }">
              <span class="node-core" />
            </div>
            <time class="entry-date-rail">{{ entry.dateRange }}</time>
          </div>

          <GlassCard hoverable class="entry-card" :class="{ current: index === 0 }">
            <div class="entry-header">
              <span class="type-pill" :class="entry.type">{{ typeLabel(entry.type) }}</span>
              <time class="entry-date-mobile">{{ entry.dateRange }}</time>
            </div>

            <h3 class="entry-role">{{ entry.role }}</h3>
            <p class="entry-company">{{ entry.company }}</p>

            <ul class="entry-bullets">
              <li v-for="(bullet, i) in entry.bullets" :key="i">{{ bullet }}</li>
            </ul>

            <div v-if="entry.tags?.length" class="tag-row">
              <TechTag
                v-for="tag in entry.tags"
                :key="tag"
                :label="tag"
                variant="neutral"
              />
            </div>
          </GlassCard>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { experiences } from '@/data/experience.js'
import SectionLabel from '@/components/ui/SectionLabel.vue'
import GlassCard from '@/components/ui/GlassCard.vue'
import TechTag from '@/components/ui/TechTag.vue'

const sectionRef = ref(null)
let observer = null

const summaryItems = computed(() => {
  const internships = experiences.filter((e) => e.type === 'internship').length
  return [
    { value: String(internships), label: 'Internships' },
    { value: '4.85', label: 'GPA' },
    { value: "Dean's List", label: 'AY24/25' },
    { value: '2027', label: 'Graduation' },
  ]
})

function typeLabel(type) {
  if (type === 'education') return 'Education'
  if (type === 'internship') return 'Internship'
  return type
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.from(entry.target.querySelectorAll('.reveal'), {
            y: 32,
            opacity: 0,
            duration: 0.65,
            stagger: 0.1,
            ease: 'power2.out',
          })
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12 }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
.experience-section {
  padding: 6rem 1.5rem;
}

.section-inner {
  max-width: 960px;
  margin: 0 auto;
}

.section-heading {
  font-family: 'Inter', sans-serif;
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.section-desc {
  color: var(--text-secondary);
  max-width: 560px;
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 0.9375rem;
}

.summary-strip {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-bottom: 2.5rem;
}

@media (min-width: 640px) {
  .summary-strip {
    grid-template-columns: repeat(4, 1fr);
  }
}

.summary-item {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 0.875rem 1rem;
  background: var(--bg-elevated);
  border: var(--border-glass);
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-card);
}

.summary-value {
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.2;
}

.summary-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-tertiary);
}

.timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  padding-left: 0;
}

.timeline-spine {
  position: absolute;
  left: 11px;
  top: 8px;
  bottom: 8px;
  width: 3px;
  border-radius: 3px;
  background: linear-gradient(
    180deg,
    var(--accent) 0%,
    rgba(163, 230, 53, 0.45) 35%,
    rgba(0, 0, 0, 0.12) 100%
  );
  box-shadow: 0 0 12px rgba(163, 230, 53, 0.25);
}

.timeline-entry {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  padding-left: 2.75rem;
}

@media (min-width: 768px) {
  .timeline {
    gap: 2rem;
    padding-left: 0;
  }

  .timeline-spine {
    left: 148px;
  }

  .timeline-entry {
    grid-template-columns: 132px 1fr;
    gap: 1.5rem;
    padding-left: 0;
    align-items: start;
  }
}

.timeline-marker {
  position: absolute;
  left: 0;
  top: 1.35rem;
  z-index: 2;
}

@media (min-width: 768px) {
  .timeline-marker {
    position: relative;
    top: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.625rem;
    padding-top: 1.35rem;
    text-align: right;
  }
}

.timeline-node {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-elevated);
  border: 2px solid rgba(0, 0, 0, 0.14);
  box-shadow: var(--shadow-card);
  flex-shrink: 0;
}

.timeline-node.current {
  border-color: var(--accent);
  box-shadow: 0 0 0 4px var(--accent-dim), var(--shadow-card);
}

.node-core {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.18);
}

.timeline-node.current .node-core {
  background: var(--accent);
}

.entry-date-rail {
  display: none;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  line-height: 1.45;
  color: var(--text-secondary);
  max-width: 120px;
}

@media (min-width: 768px) {
  .entry-date-rail {
    display: block;
  }
}

.timeline-entry.current .entry-date-rail {
  color: var(--accent-text);
  font-weight: 500;
}

.entry-card {
  position: relative;
  padding: 1.35rem 1.5rem;
  border-left: 3px solid transparent;
  transition:
    border-color var(--transition-base),
    transform var(--transition-base);
}

.entry-card.current {
  border-left-color: var(--accent);
  background: var(--bg-elevated);
}

.entry-card:hover {
  border-left-color: rgba(163, 230, 53, 0.55);
}

.entry-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.type-pill {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.3rem 0.6rem;
  border-radius: 999px;
}

.type-pill.internship {
  background: var(--accent-dim);
  color: var(--accent-text);
  border: 1px solid rgba(163, 230, 53, 0.3);
}

.type-pill.education {
  background: rgba(0, 0, 0, 0.06);
  color: var(--text-primary);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.entry-date-mobile {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: var(--text-tertiary);
}

@media (min-width: 768px) {
  .entry-date-mobile {
    display: none;
  }
}

.entry-role {
  font-family: 'Inter', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
  line-height: 1.3;
}

.entry-company {
  font-family: 'Inter', sans-serif;
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.entry-bullets {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.entry-bullets li {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.65;
  padding-left: 1.125rem;
  position: relative;
}

.entry-bullets li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--accent);
  opacity: 0.7;
}

.timeline-entry.current .entry-bullets li::before {
  opacity: 1;
}

.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  padding-top: 0.25rem;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}
</style>
