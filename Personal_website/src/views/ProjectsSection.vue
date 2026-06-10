<template>
  <section ref="sectionRef" class="projects-section">
    <div class="section-inner">
      <SectionLabel label="02 — Projects" />
      <h2 class="section-heading reveal">Selected Work</h2>
      <p class="section-desc reveal">
        A collection of projects spanning machine learning, data analysis, and web development.
      </p>

      <div class="filter-bar reveal">
        <button
          v-for="filter in projectFilters"
          :key="filter.id"
          class="filter-pill"
          :class="{ active: activeFilter === filter.id }"
          @click="setFilter(filter.id)"
        >
          {{ filter.label }}
        </button>
      </div>

      <div
        v-if="filteredProjects.length"
        class="carousel reveal"
        @mouseenter="isPaused = true"
        @mouseleave="onCarouselLeave"
      >
        <div
          ref="viewportRef"
          class="carousel-viewport"
          :class="{ dragging: isDragging }"
          @pointerdown.capture="onPointerDown"
          @pointermove="onPointerMove"
          @pointerup="onPointerUp"
          @pointercancel="onPointerUp"
          @lostpointercapture="onLostPointerCapture"
        >
          <div
            ref="trackRef"
            class="carousel-track"
            :style="{ transform: `translateX(-${scrollOffset}px)` }"
          >
            <a
              v-for="(project, index) in loopedProjects"
              :key="`${activeFilter}-${index}-${project.title}`"
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="carousel-slide"
              draggable="false"
              @click="onSlideClick"
              @dragstart.prevent
            >
              <GlassCard hoverable class="project-card">
                <div class="card-top">
                  <img
                    v-if="project.image"
                    :src="project.image"
                    :alt="project.title"
                    class="project-image"
                    draggable="false"
                  />
                  <div v-else class="project-placeholder">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" class="category-icon">
                      <template v-if="project.category === 'ml'">
                        <polygon points="12 2 2 7 12 12 22 7 12 2" />
                        <polyline points="2 17 12 22 22 17" />
                        <polyline points="2 12 12 17 22 12" />
                      </template>
                      <template v-else-if="project.category === 'web'">
                        <rect x="2" y="3" width="20" height="14" rx="2" />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                      </template>
                      <template v-else-if="project.category === 'data'">
                        <line x1="18" y1="20" x2="18" y2="10" />
                        <line x1="12" y1="20" x2="12" y2="4" />
                        <line x1="6" y1="20" x2="6" y2="14" />
                      </template>
                      <template v-else>
                        <circle cx="12" cy="12" r="10" />
                      </template>
                    </svg>
                  </div>
                  <div class="image-overlay" />
                  <svg class="external-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
                <div class="card-body">
                  <h3 class="project-title">{{ project.title }}</h3>
                  <p class="project-desc">{{ project.description }}</p>
                  <div class="tag-row">
                    <TechTag
                      v-for="tech in project.technologies"
                      :key="tech"
                      :label="tech"
                    />
                  </div>
                </div>
              </GlassCard>
            </a>
          </div>
        </div>
      </div>

      <p v-else class="carousel-empty reveal">No projects in this category yet.</p>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { projects, projectFilters } from '@/data/projects.js'
import SectionLabel from '@/components/ui/SectionLabel.vue'
import GlassCard from '@/components/ui/GlassCard.vue'
import TechTag from '@/components/ui/TechTag.vue'

const SCROLL_SPEED = 0.35
const CARD_GAP = 24

const sectionRef = ref(null)
const viewportRef = ref(null)
const trackRef = ref(null)
const activeFilter = ref('all')
const scrollOffset = ref(0)
const isPaused = ref(false)
const isDragging = ref(false)

let observer = null
let resizeObserver = null
let animFrameId = null
let loopWidth = 0
let dragStartX = 0
let dragStartOffset = 0
let didDrag = false
let activePointerId = null
let velocity = 0
let lastPointerX = 0
let lastPointerTime = 0

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return projects
  return projects.filter((p) => p.category === activeFilter.value)
})

const loopedProjects = computed(() => {
  const list = filteredProjects.value
  if (list.length === 0) return []
  return [...list, ...list]
})

function setFilter(id) {
  activeFilter.value = id
  scrollOffset.value = 0
  nextTick(measureLoop)
}

function measureLoop() {
  const track = trackRef.value
  const count = filteredProjects.value.length
  if (!track || count === 0) {
    loopWidth = 0
    return
  }

  const slides = track.querySelectorAll('.carousel-slide')
  if (slides.length < count) return

  let width = 0
  for (let i = 0; i < count; i++) {
    width += slides[i].offsetWidth
    if (i < count - 1) width += CARD_GAP
  }
  loopWidth = width
}

function normalizeOffset() {
  if (loopWidth <= 0) return
  while (scrollOffset.value >= loopWidth) scrollOffset.value -= loopWidth
  while (scrollOffset.value < 0) scrollOffset.value += loopWidth
}

function onPointerDown(event) {
  if (event.pointerType === 'mouse' && event.button !== 0) return

  event.preventDefault()

  isDragging.value = true
  didDrag = false
  velocity = 0
  activePointerId = event.pointerId
  dragStartX = event.clientX
  dragStartOffset = scrollOffset.value
  lastPointerX = event.clientX
  lastPointerTime = performance.now()

  viewportRef.value?.setPointerCapture(event.pointerId)
  window.addEventListener('pointermove', onWindowPointerMove)
  window.addEventListener('pointerup', onWindowPointerUp)
  window.addEventListener('pointercancel', onWindowPointerUp)
}

function applyDrag(event) {
  const dx = event.clientX - dragStartX
  if (Math.abs(dx) > 4) didDrag = true

  scrollOffset.value = dragStartOffset - dx
  normalizeOffset()

  const now = performance.now()
  const dt = now - lastPointerTime
  if (dt > 0) {
    velocity = (event.clientX - lastPointerX) / dt
  }
  lastPointerX = event.clientX
  lastPointerTime = now
}

function onPointerMove(event) {
  if (!isDragging.value || event.pointerId !== activePointerId) return
  event.preventDefault()
  applyDrag(event)
}

function onWindowPointerMove(event) {
  if (!isDragging.value || event.pointerId !== activePointerId) return
  event.preventDefault()
  applyDrag(event)
}

function endDrag(event) {
  if (!isDragging.value || event.pointerId !== activePointerId) return

  isDragging.value = false
  activePointerId = null
  viewportRef.value?.releasePointerCapture(event.pointerId)
  normalizeOffset()
  removeWindowDragListeners()
}

function onPointerUp(event) {
  endDrag(event)
}

function onWindowPointerUp(event) {
  endDrag(event)
}

function onLostPointerCapture() {
  if (!isDragging.value) return
  isDragging.value = false
  activePointerId = null
  normalizeOffset()
  removeWindowDragListeners()
}

function removeWindowDragListeners() {
  window.removeEventListener('pointermove', onWindowPointerMove)
  window.removeEventListener('pointerup', onWindowPointerUp)
  window.removeEventListener('pointercancel', onWindowPointerUp)
}

function onSlideClick(event) {
  if (didDrag) {
    event.preventDefault()
  }
}

function onCarouselLeave() {
  isPaused.value = false
}

function tick() {
  if (!isDragging.value && Math.abs(velocity) > 0.01) {
    scrollOffset.value -= velocity * 14
    velocity *= 0.92
    normalizeOffset()
  } else if (!isPaused.value && !isDragging.value && loopWidth > 0) {
    scrollOffset.value += SCROLL_SPEED
    if (scrollOffset.value >= loopWidth) {
      scrollOffset.value -= loopWidth
    }
  }

  animFrameId = requestAnimationFrame(tick)
}

function startScroll() {
  stopScroll()
  animFrameId = requestAnimationFrame(tick)
}

function stopScroll() {
  if (animFrameId) {
    cancelAnimationFrame(animFrameId)
    animFrameId = null
  }
}

watch(filteredProjects, () => {
  scrollOffset.value = 0
  nextTick(measureLoop)
})

onMounted(() => {
  nextTick(measureLoop)
  startScroll()

  resizeObserver = new ResizeObserver(() => {
    measureLoop()
  })
  if (viewportRef.value) {
    resizeObserver.observe(viewportRef.value)
  }
  if (trackRef.value) {
    resizeObserver.observe(trackRef.value)
  }

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
  stopScroll()
  removeWindowDragListeners()
  if (resizeObserver) resizeObserver.disconnect()
  if (observer) observer.disconnect()
})
</script>

<style scoped>
.projects-section {
  padding: 6rem 1.5rem;
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
  margin-bottom: 0.75rem;
}

.section-desc {
  color: var(--text-secondary);
  max-width: 520px;
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 0.9375rem;
}

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.filter-pill {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  padding: 0.5rem 1rem;
  border-radius: var(--radius-sm);
  background: var(--bg-surface);
  border: var(--border-glass);
  color: var(--text-secondary);
  cursor: pointer;
  backdrop-filter: var(--blur);
  -webkit-backdrop-filter: var(--blur);
  transition:
    background var(--transition-fast),
    color var(--transition-fast),
    border var(--transition-fast);
}

.filter-pill:hover {
  border: var(--border-glass-hover);
  color: var(--text-primary);
}

.filter-pill.active {
  background: var(--accent-dim);
  color: var(--accent-text);
  border: 1px solid rgba(163, 230, 53, 0.25);
}

.carousel {
  position: relative;
  width: 100%;
}

.carousel-viewport {
  overflow: hidden;
  width: 100%;
  cursor: grab;
  touch-action: none;
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 6%,
    black 94%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 6%,
    black 94%,
    transparent 100%
  );
}

.carousel-viewport.dragging {
  cursor: grabbing;
  user-select: none;
}

.carousel-viewport.dragging .carousel-slide {
  pointer-events: none;
}

.carousel-track {
  display: flex;
  gap: 1.5rem;
  will-change: transform;
}

.carousel-slide {
  flex: 0 0 320px;
  display: block;
  -webkit-user-drag: none;
  user-select: none;
}

@media (min-width: 768px) {
  .carousel-slide {
    flex: 0 0 360px;
  }
}

.carousel-empty {
  color: var(--text-secondary);
  font-size: 0.9375rem;
  text-align: center;
  padding: 3rem 0;
}

.project-card {
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-top {
  position: relative;
  aspect-ratio: 16 / 9;
  background: var(--bg-surface);
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  -webkit-user-drag: none;
  user-drag: none;
}

.project-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-tertiary);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.35) 0%, transparent 50%);
  pointer-events: none;
}

.external-icon {
  position: absolute;
  top: 12px;
  right: 12px;
  color: var(--text-tertiary);
  transition: color var(--transition-fast);
}

.carousel-slide:hover .external-icon {
  color: var(--accent-text);
}

.card-body {
  padding: 1.25rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.project-title {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
}

.project-desc {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.5;
  flex: 1;
}

.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  margin-top: 0.5rem;
}
</style>
