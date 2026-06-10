<template>
  <div class="glass-card" :class="{ hoverable }">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  hoverable: { type: Boolean, default: false },
})
</script>

<style scoped>
.glass-card {
  background: var(--bg-surface);
  border: var(--border-glass);
  border-radius: var(--radius-md);
  backdrop-filter: var(--blur);
  -webkit-backdrop-filter: var(--blur);
  box-shadow: var(--shadow-card);
  padding: 1.5rem;
}

.glass-card.hoverable {
  transition:
    transform var(--transition-base),
    border var(--transition-base),
    background var(--transition-base);
  cursor: pointer;
}

.glass-card.hoverable:hover {
  transform: translateY(-4px);
  border: var(--border-glass-hover);
  background: var(--bg-surface-hover);
}
</style>
