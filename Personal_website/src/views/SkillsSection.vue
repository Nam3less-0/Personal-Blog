<template>
  <section ref="sectionRef" class="skills-section">
    <div class="section-inner">
      <SectionLabel label="03 — Skills" />
      <h2 class="section-heading reveal">Technical Stack</h2>

      <div class="skills-grid">
        <GlassCard
          v-for="category in skillCategories"
          :key="category.name"
          class="skill-block reveal"
        >
          <h3 class="category-name">{{ category.name }}</h3>
          <div class="skills-list">
            <div
              v-for="skill in category.skills"
              :key="skill.label"
              class="skill-item"
            >
              <TechTag :label="skill.label" variant="accent" />
              <div class="proficiency-track">
                <div
                  class="proficiency-fill"
                  :data-proficiency="skill.proficiency"
                  :style="{ '--proficiency': skill.proficiency }"
                />
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { skillCategories } from '@/data/skills.js'
import SectionLabel from '@/components/ui/SectionLabel.vue'
import GlassCard from '@/components/ui/GlassCard.vue'
import TechTag from '@/components/ui/TechTag.vue'

const sectionRef = ref(null)
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.from(entry.target.querySelectorAll('.reveal'), {
            y: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power2.out',
          })

          entry.target.querySelectorAll('.proficiency-fill').forEach((bar) => {
            const proficiency = parseFloat(bar.dataset.proficiency || '0')
            gsap.fromTo(
              bar,
              { width: '0%' },
              {
                width: `${proficiency * 100}%`,
                duration: 0.8,
                ease: 'power2.out',
                delay: 0.2,
              }
            )
          })

          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 }
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
.skills-section {
  position: relative;
  padding: 6rem 1.5rem;
  overflow: clip;
}

.section-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.section-heading {
  font-family: 'Inter', sans-serif;
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 2.5rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.category-name {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  font-weight: 500;
  color: var(--accent-text);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1.25rem;
}

.skills-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1.25rem 1rem;
}

.skill-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.proficiency-track {
  height: 5px;
  width: 100%;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 3px;
  overflow: hidden;
}

.proficiency-fill {
  height: 100%;
  width: 0;
  border-radius: 3px;
  background: linear-gradient(90deg, var(--accent-text), var(--accent));
}
</style>
