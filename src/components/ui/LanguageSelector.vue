<template>
  <div class="language-selector">
    <button 
      @click="toggleDropdown" 
      class="lang-button"
      :class="{ 'active': isOpen }"
    >
      <GlobeIcon :size="18" />
      <span class="lang-code">{{ currentLanguage.toUpperCase() }}</span>
      <ChevronDownIcon :size="16" class="chevron" :class="{ 'rotate': isOpen }" />
    </button>
    
    <div v-if="isOpen" class="lang-dropdown">
      <button 
        v-for="lang in languages" 
        :key="lang.code"
        @click="selectLanguage(lang.code)"
        class="lang-option"
        :class="{ 'selected': currentLanguage === lang.code }"
      >
        <span class="flag">{{ lang.flag }}</span>
        <span class="label">{{ lang.label }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Globe as GlobeIcon, ChevronDown as ChevronDownIcon } from 'lucide-vue-next'
import { useTranslation } from '../../composables/useTranslation'

const { currentLanguage, setLanguage } = useTranslation()
const isOpen = ref(false)

const languages = [
  { code: 'ru', flag: '🇷🇺', label: 'Русский' },
  { code: 'uz', flag: '🇺🇿', label: 'O\'zbekcha' },
  { code: 'en', flag: '🇬🇧', label: 'English' }
] as const

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectLanguage = (lang: 'ru' | 'uz' | 'en') => {
  setLanguage(lang)
  isOpen.value = false
}

// Close dropdown when clicking outside
const closeDropdown = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (!target.closest('.language-selector')) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeDropdown)
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown)
})
</script>

<style scoped>
.language-selector {
  position: relative;
}

.lang-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.875rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 999px;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all var(--transition-fast);
  font-size: 0.875rem;
  font-weight: 500;
}

.lang-button:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.15);
  color: white;
}

.lang-button.active {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(139, 92, 246, 0.3);
}

.lang-code {
  font-weight: 600;
  letter-spacing: 0.05em;
}

.chevron {
  transition: transform var(--transition-fast);
}

.chevron.rotate {
  transform: rotate(180deg);
}

.lang-dropdown {
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  min-width: 160px;
  background: rgba(15, 17, 21, 0.95);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  z-index: 100;
  animation: slideDown 0.2s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.lang-option {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.75rem 1rem;
  background: transparent;
  border: none;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all var(--transition-fast);
  font-size: 0.875rem;
  text-align: left;
}

.lang-option:hover {
  background: rgba(255, 255, 255, 0.05);
  color: white;
}

.lang-option.selected {
  background: rgba(139, 92, 246, 0.1);
  color: #a78bfa;
}

.flag {
  font-size: 1.25rem;
  line-height: 1;
}

.label {
  font-weight: 500;
}

@media (max-width: 768px) {
  .lang-button {
    padding: 0.4rem 0.75rem;
  }
  
  .lang-code {
    display: none;
  }
}
</style>
