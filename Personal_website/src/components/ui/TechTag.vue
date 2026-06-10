<template>
  <span class="tech-tag" :class="variant">
    <slot>{{ label }}</slot>
  </span>
</template>

<script setup>
defineProps({
  label: { type: String, default: '' },
  variant: {
    type: String,
    default: 'accent',
    validator: (v) => ['accent', 'neutral'].includes(v),
  },
})
</script>

<style scoped>
.tech-tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 4px;
  display: inline-block;
}

.tech-tag.accent {
  background: var(--accent-dim);
  color: var(--accent-text);
}

.tech-tag.neutral {
  background: rgba(0, 0, 0, 0.06);
  color: var(--text-primary);
}
</style>
