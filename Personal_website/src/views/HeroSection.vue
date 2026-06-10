<template>
  <section class="hero-section">
    <div class="hero-inner">
      <div class="hero-left">
      <p class="eyebrow">
        &lt; {{ profile.name }} /&gt;<span class="cursor-blink">|</span>
      </p>
      <h1 class="hero-name">{{ profile.name }}</h1>
      <p class="hero-role">{{ profile.role }}</p>
      <p class="hero-bio">{{ profile.bio }}</p>

      <div class="hero-cta">
        <button class="btn-primary" @click="scrollToProjects">View Projects</button>
        <a :href="profile.cvUrl" class="btn-secondary">
          Download CV <span class="arrow">→</span>
        </a>
      </div>

      <div class="social-row">
        <a
          :href="profile.github"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
          aria-label="GitHub"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
        </a>
        <a
          :href="profile.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
          aria-label="LinkedIn"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        <a
          :href="`mailto:${profile.email}`"
          class="social-link"
          aria-label="Email"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </a>
      </div>
      </div>
    </div>

    <HeroScene />

    <div class="scroll-indicator-wrap" :class="{ hidden: scrolled }">
      <span class="scroll-indicator">↓</span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { profile } from '@/data/profile.js'
import HeroScene from '@/components/three/HeroScene.vue'

const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 100
}

function scrollToProjects() {
  const el = document.getElementById('projects')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 56px 0 3rem;
  max-width: 100vw;
  overflow-x: hidden;
  overflow-y: visible;
}

.hero-inner {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 2;
}

.hero-left {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (min-width: 768px) {
  .hero-left {
    max-width: 52%;
    padding-right: 2rem;
  }
}

.eyebrow {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.hero-name {
  font-family: 'Inter', sans-serif;
  font-size: clamp(3.5rem, 7vw, 6.5rem);
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.05;
  letter-spacing: -0.03em;
  margin-bottom: 0.75rem;
}

.hero-role {
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 1.25rem;
}

.hero-bio {
  color: var(--text-secondary);
  max-width: 440px;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}

.btn-primary {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  padding: 0.75rem 1.5rem;
  background: rgba(0, 0, 0, 0.05);
  border: var(--border-glass-hover);
  border-radius: var(--radius-sm);
  color: var(--text-primary);
  cursor: pointer;
  transition:
    background var(--transition-base),
    border var(--transition-base);
}

.btn-primary:hover {
  background: rgba(0, 0, 0, 0.1);
  border: var(--border-glass-hover);
}

.btn-secondary {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  padding: 0.75rem 1rem;
  color: var(--accent-text);
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  transition: opacity var(--transition-fast);
}

.btn-secondary:hover {
  opacity: 0.8;
}

.arrow {
  transition: transform var(--transition-fast);
}

.btn-secondary:hover .arrow {
  transform: translateX(4px);
}

.social-row {
  display: flex;
  gap: 16px;
}

.social-link {
  color: var(--text-tertiary);
  transition: color var(--transition-fast);
}

.social-link:hover {
  color: var(--text-primary);
}

.scroll-indicator-wrap {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  transition: opacity var(--transition-base);
  z-index: 2;
}

.scroll-indicator-wrap.hidden {
  opacity: 0;
  pointer-events: none;
}

.scroll-indicator {
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  color: var(--text-tertiary);
}
</style>
