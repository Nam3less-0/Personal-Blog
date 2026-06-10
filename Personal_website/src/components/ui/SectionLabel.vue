<template>
  <p class="section-label">{{ label }}</p>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
})
</script>

<style scoped>
.section-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: var(--accent-text);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}
</style>
