<template>
  <div class="pricing-card glass-panel" :class="{ 'popular': isPopular }">
    <div v-if="isPopular" class="popular-msg">
      <span class="pulse-dot"></span>
      Рекомендуемый выбор
    </div>
    
    <div class="card-body">
      <div class="tier-header">
        <h3 class="tier-name">{{ tier }}</h3>
        <p class="tier-desc">Для уверенного старта и роста продаж</p>
      </div>

      <div class="price-block">
        <span class="currency">$</span>
        <span class="amount">{{ price }}</span>
        <span class="period">/мес</span>
      </div>
      
      <div class="divider"></div>
      
      <ul class="features-list">
        <li v-for="(feature, index) in features" :key="index" class="feature-item">
          <CheckIcon class="check-icon" :size="18" />
          <span>{{ feature }}</span>
        </li>
      </ul>

      <div class="card-footer">
        <a 
          :href="link"
          target="_blank"
          class="btn w-full" 
          :class="isPopular ? 'btn-primary' : 'btn-outline'"
        >
          Оформить тариф
        </a>
        <p class="lead-cost">Target: {{ leadCost }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Check as CheckIcon } from 'lucide-vue-next'

defineProps<{
  tier: string
  price: number
  leadCost: string
  features: string[]
  isPopular?: boolean
  link: string
}>()
</script>

<style scoped>
.pricing-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: var(--radius-xl);
  position: relative;
  transition: all var(--transition-smooth);
  background: var(--color-glass-surface);
  border: 1px solid var(--color-glass-border);
}

.pricing-card.popular {
  border-color: rgba(139, 92, 246, 0.3);
  background: linear-gradient(180deg, rgba(30, 32, 40, 0.7) 0%, rgba(30, 32, 40, 0.4) 100%);
  box-shadow: var(--shadow-glow), var(--shadow-card);
  transform: scale(1.02);
  z-index: 10;
}

.popular-msg {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: #1e1b4b; /* Dark indigo */
  border: 1px solid rgba(139, 92, 246, 0.3);
  color: #a78bfa;
  padding: 4px 12px;
  border-radius: 99px;
  font-size: 0.75rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
}

.pulse-dot {
  width: 6px;
  height: 6px;
  background-color: #a78bfa;
  border-radius: 50%;
  box-shadow: 0 0 8px #a78bfa;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}

.card-body {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.tier-header {
  margin-bottom: 1.5rem;
}

.tier-name {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--color-text-primary);
}

.tier-desc {
  font-size: 0.875rem;
  color: var(--color-text-muted);
}

.price-block {
  display: flex;
  align-items: baseline;
  gap: 2px;
  margin-bottom: 1.5rem;
}

.currency {
  font-size: 1.5rem;
  color: var(--color-text-secondary);
  font-weight: 500;
}

.amount {
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--color-text-primary);
  line-height: 1;
  letter-spacing: -0.03em;
}

.period {
  color: var(--color-text-muted);
  font-size: 1rem;
}

.divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.05);
  margin-bottom: 2rem;
  width: 100%;
}

.features-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: auto; /* Pushes footer down */
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
}

.check-icon {
  color: var(--color-accent-blue);
  flex-shrink: 0;
  margin-top: 2px;
}

.card-footer {
  margin-top: 2.5rem;
}

.w-full { width: 100%; }

.btn-outline {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
}

.btn-outline:hover {
  border-color: white;
  background: rgba(255, 255, 255, 0.05);
}

.lead-cost {
  text-align: center;
  margin-top: 1rem;
  font-size: 0.8rem;
  color: var(--color-text-muted);
}
</style>
