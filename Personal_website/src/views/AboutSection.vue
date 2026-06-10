<template>
  <section ref="sectionRef" class="about-section">
    <div class="section-inner">
      <SectionLabel label="01 — About" />
      <h2 class="section-heading reveal">About Me</h2>

      <div class="about-grid">
        <GlassCard class="reveal">
          <p class="about-text">{{ profile.aboutBio }}</p>
        </GlassCard>

        <div class="stats-grid">
          <GlassCard
            v-for="stat in stats"
            :key="stat.label"
            class="stat-card reveal"
          >
            <span class="stat-value">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </GlassCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { profile, stats } from '@/data/profile.js'
import SectionLabel from '@/components/ui/SectionLabel.vue'
import GlassCard from '@/components/ui/GlassCard.vue'

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
.about-section {
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

.about-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

.about-text {
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: 0.9375rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.stat-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
}

.stat-value {
  font-family: 'JetBrains Mono', monospace;
  font-size: 2.5rem;
  color: var(--text-primary);
  font-weight: 500;
}

.stat-label {
  font-size: 12px;
  color: var(--text-secondary);
}
</style>
