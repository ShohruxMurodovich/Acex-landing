<template>
  <section id="pricing" class="section">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="text-4xl font-bold mb-4">{{ t('pricing.sectionTitle') }}</h2>
        <p class="text-secondary max-w-2xl mx-auto">
          {{ t('pricing.sectionSubtitle') }}
        </p>
      </div>
      
      <div class="pricing-grid">
        <PricingCard
          tier="Старт"
          :price="600"
          :lead-cost="`${t('pricing.leadCost')}: от $0.50 за лид`"
          :features="premiumFeatures"
          link="https://t.me/acex_admin?text=Здравствуйте!%20Хочу%20оформить%20тариф%20Старт"
        />
        
        <PricingCard
          tier="Премиум"
          :price="900"
          :lead-cost="`${t('pricing.leadCost')}: от $0.50 за лид`"
          :features="standardFeatures"
          :is-popular="true"
          link="https://t.me/acex_admin?text=Здравствуйте!%20Хочу%20оформить%20тариф%20Премиум"
        />
        
        <PricingCard
          tier="ВИП"
          :price="1200"
          :lead-cost="`${t('pricing.leadCost')}: от $0.50 за лид`"
          :features="vipFeatures"
          link="https://t.me/acex_admin?text=Здравствуйте!%20Хочу%20оформить%20тариф%20ВИП"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import PricingCard from './ui/PricingCard.vue'
import { useTranslation } from '../composables/useTranslation'

const { t, tArray } = useTranslation()

const premiumFeatures = computed(() => tArray('pricing.premium.features'))
const standardFeatures = computed(() => tArray('pricing.standard.features'))
const vipFeatures = computed(() => tArray('pricing.vip.features'))
</script>

<style scoped>
.text-center { text-align: center; }
.mb-4 { margin-bottom: 1rem; }
.mb-5 { margin-bottom: 3rem; }
.text-4xl { font-size: 2.5rem; }
.font-bold { font-weight: 700; }
.max-w-2xl { max-width: 600px; }
.mx-auto { margin-left: auto; margin-right: auto; }
.text-secondary { color: var(--color-text-secondary); }

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  align-items: start;
}

/* Mobile Responsive Styles */
@media (max-width: 639px) {
  .text-4xl { 
    font-size: 1.875rem; /* Smaller on mobile */
  }

  .mb-4 { margin-bottom: 0.75rem; }
  .mb-5 { margin-bottom: 2rem; }

  .pricing-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (min-width: 640px) and (max-width: 767px) {
  .text-4xl { 
    font-size: 2.125rem;
  }

  .pricing-grid {
    grid-template-columns: 1fr;
    gap: 1.75rem;
    max-width: 450px;
    margin: 0 auto;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .pricing-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }
}

@media (min-width: 1024px) {
  .pricing-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

</style>
