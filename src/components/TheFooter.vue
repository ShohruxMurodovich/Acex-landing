<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <h3 class="text-gradient">ACEX Marketing</h3>
          <p class="footer-tagline">{{ t('footer.tagline') }}</p>
        </div>
        <div class="footer-info">
          <p>&copy; {{ currentYear }} ACEX Marketing. {{ t('footer.rights') }}.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTranslation } from '../composables/useTranslation'

const { t } = useTranslation()
const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  background: var(--color-bg-secondary);
  border-top: 1px solid var(--color-border);
  padding: var(--spacing-lg) 0;
  margin-top: var(--spacing-xl);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-xl);
}

.footer-brand h3 {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-sm);
}

.footer-tagline {
  color: var(--color-text-secondary);
  margin: 0;
}

.footer-info {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
}

.footer-info p {
  margin: 0;
}

/* Mobile Responsive Styles */
@media (max-width: 639px) {
  .footer {
    padding: 2rem 0 1.5rem;
    margin-top: 3rem;
  }

  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }

  .footer-brand h3 {
    font-size: 1.25rem;
  }

  .footer-tagline {
    font-size: 0.875rem;
  }

  .footer-info {
    font-size: 0.75rem;
  }
}

@media (min-width: 640px) and (max-width: 767px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
}

</style>
