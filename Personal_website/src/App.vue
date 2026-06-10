<template>
  <canvas ref="cursorCanvas" class="cursor-canvas" />
  <CursorSettings v-model="effectId" />
  <NavBar
    v-model:effect-id="effectId"
    :active-section="activeSection"
    @navigate="scrollToSection"
  />
  <main>
    <HeroSection id="hero" />
    <AboutSection id="about" />
    <ProjectsSection id="projects" />
    <SkillsSection id="skills" />
    <ExperienceSection id="experience" />
    <FooterSection id="contact" />
  </main>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useCursorEffect, EFFECTS } from '@/composables/useCursorEffect'
import CursorSettings from '@/components/ui/CursorSettings.vue'
import NavBar from '@/components/layout/NavBar.vue'
import FooterSection from '@/components/layout/FooterSection.vue'
import HeroSection from '@/views/HeroSection.vue'
import AboutSection from '@/views/AboutSection.vue'
import ProjectsSection from '@/views/ProjectsSection.vue'
import SkillsSection from '@/views/SkillsSection.vue'
import ExperienceSection from '@/views/ExperienceSection.vue'

const STORAGE_KEY = 'portfolio-cursor-effect'
const stored = localStorage.getItem(STORAGE_KEY)
const effectId = ref(EFFECTS.includes(stored) ? stored : 'nodes')

watch(effectId, (val) => localStorage.setItem(STORAGE_KEY, val))

const cursorCanvas = ref(null)
useCursorEffect(cursorCanvas, effectId)

const activeSection = ref('')
const sectionIds = ['hero', 'about', 'projects', 'skills', 'experience', 'contact']

const visibleSections = new Map()
let observer = null

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

function updateActiveSection() {
  if (visibleSections.size === 0) return

  let maxRatio = 0
  let active = activeSection.value

  visibleSections.forEach((ratio, id) => {
    if (ratio >= maxRatio) {
      maxRatio = ratio
      active = id
    }
  })

  activeSection.value = active
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSections.set(entry.target.id, entry.intersectionRatio)
        } else {
          visibleSections.delete(entry.target.id)
        }
      })
      updateActiveSection()
    },
    { threshold: 0.4 }
  )

  sectionIds.forEach((id) => {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
main {
  width: 100%;
  position: relative;
  z-index: 1;
}
</style>
