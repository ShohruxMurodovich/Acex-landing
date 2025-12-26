<template>
  <a :href="link" target="_blank" class="contact-card glass-panel">
    <div class="icon-box">
      <component :is="icon" :size="20" />
    </div>
    <div class="info">
      <div class="label">{{ label }}</div>
      <div class="value-row">
        <span class="value">{{ value }}</span>
        <ArrowUpRightIcon class="arrow-icon" :size="16" />
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { ArrowUpRight as ArrowUpRightIcon } from 'lucide-vue-next'
import type { Component } from 'vue'

defineProps<{
  icon: Component
  label: string
  value: string
  link: string
}>()
</script>

<style scoped>
.contact-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem; /* Compact padding */
  border-radius: var(--radius-lg);
  text-decoration: none;
  transition: all var(--transition-smooth);
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.contact-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
  transform: translateX(4px);
}

.icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  color: var(--color-text-secondary);
  transition: all var(--transition-fast);
}

.contact-card:hover .icon-box {
  color: var(--color-accent-blue);
  background: rgba(59, 130, 246, 0.1);
}

.info {
  flex: 1;
}

.label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
  font-weight: 600;
  margin-bottom: 2px;
}

.value-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.value {
  color: var(--color-text-primary);
  font-weight: 500;
  font-size: 0.95rem;
}

.arrow-icon {
  opacity: 0;
  transform: translate(-4px, 4px);
  transition: all var(--transition-fast);
  color: var(--color-text-muted);
}

.contact-card:hover .arrow-icon {
  opacity: 1;
  transform: translate(0, 0);
}
</style>
