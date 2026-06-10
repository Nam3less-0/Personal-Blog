<template>
  <div class="cs-wrap" :class="{ inline }">
    <button
      class="cs-pill"
      @click="open = !open"
      :aria-label="open ? 'Close cursor settings' : 'Cursor effect settings'"
    >
      <span class="cs-icon">{{ currentIcon }}</span>
      <span class="cs-label">cursor</span>
    </button>

    <Transition name="cs-panel">
      <div v-if="open" class="cs-panel" role="dialog" aria-label="Cursor effect selector">
        <p class="cs-heading">cursor effect</p>
        <div class="cs-options">
          <button
            v-for="opt in options"
            :key="opt.id"
            class="cs-opt"
            :class="{ active: modelValue === opt.id }"
            @click="select(opt.id)"
          >
            <span class="cs-opt-icon">{{ opt.icon }}</span>
            <span class="cs-opt-label">{{ opt.label }}</span>
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  modelValue: String,
  inline: { type: Boolean, default: false },
})
const emit = defineEmits(['update:modelValue'])

const open = ref(false)

const options = [
  { id: 'brackets', label: 'Brackets', icon: '⌥' },
  { id: 'nodes',    label: 'Neural',   icon: '◎' },
  { id: 'lens',     label: 'Lens',     icon: '○' },
  { id: 'none',     label: 'Off',      icon: '×' },
]

const currentIcon = computed(() => options.find(o => o.id === props.modelValue)?.icon ?? '◎')

function select(id) {
  emit('update:modelValue', id)
  open.value = false
}
</script>

<style scoped>
.cs-wrap {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
}

.cs-wrap.inline {
  position: relative;
  bottom: auto;
  right: auto;
  z-index: 10001;
  flex-shrink: 0;
}

.cs-pill {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 7px 14px 7px 12px;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 0, 0, 0.14);
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
  font-family: 'JetBrains Mono', monospace;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}
.cs-pill:hover {
  background: rgba(255, 255, 255, 0.92);
  border-color: rgba(0, 0, 0, 0.28);
}

.inline .cs-pill {
  background: var(--bg-surface);
  border: var(--border-glass);
  padding: 0 10px;
  height: 28px;
  box-shadow: none;
}

.inline .cs-pill:hover {
  background: var(--bg-surface-hover);
  border: var(--border-glass-hover);
}

.cs-icon  { font-size: 14px; color: #0a0a0a; line-height: 1; }
.cs-label { font-size: 11px; color: rgba(0, 0, 0, 0.5); letter-spacing: 0.05em; }

.cs-panel {
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(0, 0, 0, 0.14);
  border-radius: 14px;
  padding: 14px;
  min-width: 160px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.10), 0 1px 4px rgba(0, 0, 0, 0.06);
}

.inline .cs-panel {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  z-index: 10001;
  pointer-events: auto;
}

.cs-heading {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.1em;
  color: rgba(0, 0, 0, 0.45);
  text-transform: uppercase;
  margin: 0 0 10px 2px;
}

.cs-options { display: flex; flex-direction: column; gap: 4px; }

.cs-opt {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid transparent;
  background: transparent;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  width: 100%;
  text-align: left;
  font-family: 'Inter', sans-serif;
}
.cs-opt:hover  { background: rgba(0, 0, 0, 0.05); }
.cs-opt.active { background: rgba(0, 0, 0, 0.07); border-color: rgba(0, 0, 0, 0.14); }

.cs-opt-icon  { font-size: 14px; color: #0a0a0a; width: 18px; text-align: center; }
.cs-opt-label { font-size: 13px; color: #0a0a0a; font-weight: 500; }

.cs-panel-enter-active,
.cs-panel-leave-active  { transition: opacity 0.15s ease, transform 0.15s ease; }
.cs-panel-enter-from,
.cs-panel-leave-to      { opacity: 0; transform: translateY(6px) scale(0.97); }
</style>
