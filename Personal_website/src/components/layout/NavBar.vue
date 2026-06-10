<template>
  <header class="navbar">
    <div class="navbar-inner">
      <button class="monogram" @click="navigate('hero')" aria-label="Home">
        JC
      </button>

      <div class="navbar-end">
        <nav class="desktop-nav" aria-label="Main navigation">
          <button
            v-for="link in navLinks"
            :key="link.id"
            class="nav-link"
            :class="{ active: activeSection === link.id }"
            @click="navigate(link.id)"
          >
            {{ link.label }}
          </button>
        </nav>

        <div class="navbar-actions">
          <CursorSettings v-model="effectId" inline />

          <button
            class="mobile-toggle"
            @click="isMenuOpen = !isMenuOpen"
            :aria-expanded="isMenuOpen"
            aria-label="Toggle menu"
          >
            <svg v-if="!isMenuOpen" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <Transition name="overlay">
      <div v-if="isMenuOpen" class="mobile-overlay">
        <nav class="mobile-nav" aria-label="Mobile navigation">
          <button
            v-for="link in navLinks"
            :key="link.id"
            class="mobile-link"
            :class="{ active: activeSection === link.id }"
            @click="mobileNavigate(link.id)"
          >
            {{ link.label }}
          </button>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import CursorSettings from '@/components/ui/CursorSettings.vue'

defineProps({
  activeSection: { type: String, default: '' },
})

const effectId = defineModel('effectId', { type: String, required: true })

const emit = defineEmits(['navigate'])

const isMenuOpen = ref(false)

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

function navigate(sectionId) {
  emit('navigate', sectionId)
}

function mobileNavigate(sectionId) {
  navigate(sectionId)
  isMenuOpen.value = false
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000;
  height: 56px;
  overflow: visible;
  background: rgba(242, 242, 240, 0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.navbar-inner {
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.navbar-end {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: auto;
}

@media (min-width: 768px) {
  .navbar-end {
    gap: 32px;
  }
}

.monogram {
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  color: var(--text-primary);
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: var(--border-glass);
  border-radius: 6px;
  background: transparent;
  cursor: pointer;
  transition: border var(--transition-fast), background var(--transition-fast);
}

.monogram:hover {
  border: var(--border-glass-hover);
  background: var(--bg-surface);
}

.desktop-nav {
  display: none;
  align-items: center;
  gap: 32px;
}

@media (min-width: 768px) {
  .desktop-nav {
    display: flex;
  }

  .navbar-actions {
    gap: 20px;
  }

  .mobile-toggle {
    display: none;
  }
}

.nav-link {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-secondary);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: color var(--transition-fast);
}

.nav-link:hover {
  color: var(--text-primary);
}

.nav-link.active {
  color: var(--accent-text);
}

.mobile-toggle {
  background: none;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
  padding: 4px;
}

.mobile-overlay {
  position: fixed;
  inset: 0;
  top: 56px;
  background: rgba(242, 242, 240, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.mobile-link {
  font-family: 'Inter', sans-serif;
  font-size: 2rem;
  color: var(--text-secondary);
  background: none;
  border: none;
  cursor: pointer;
  transition: color var(--transition-fast);
}

.mobile-link:hover,
.mobile-link.active {
  color: var(--accent-text);
}

.overlay-enter-active,
.overlay-leave-active {
  transition: opacity var(--transition-base);
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}
</style>
