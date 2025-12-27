<template>
  <header class="header-wrapper">
    <div class="header-pill glass-panel">
      <nav class="nav">
        <div class="logo">
          <TheLogo />
        </div>
        
        <ul class="nav-links">
          <li><a href="#services">{{ t('header.services') }}</a></li>
          <li><a href="#pricing">{{ t('header.pricing') }}</a></li>
          <li><a href="#contact">{{ t('header.contact') }}</a></li>
        </ul>

        <div class="header-actions">
          <LanguageSelector />
          <a href="#contact" class="btn btn-sm btn-primary">
            {{ t('header.getAudit') }}
          </a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import TheLogo from './ui/TheLogo.vue'
import LanguageSelector from './ui/LanguageSelector.vue'
import { useTranslation } from '../composables/useTranslation'

const { t } = useTranslation()
</script>

<style scoped>
.header-wrapper {
  position: fixed;
  top: 1.5rem;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  padding: 0 1rem;
}

.header-pill {
  width: 100%;
  max-width: 1000px; /* Floating pill width */
  padding: 0.75rem 1.5rem;
  border-radius: 999px; /* Pill shape */
  background: rgba(15, 17, 21, 0.6); /* Deep semi-transparent */
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.nav-links a:hover {
  color: white;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.btn-sm {
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
  min-height: auto;
}

@media (max-width: 768px) {
  .header-wrapper {
    top: 1rem;
  }
  
  .nav-links {
    display: none;
  }
}
</style>
