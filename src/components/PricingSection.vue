<template>
  <section id="pricing" class="section">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="text-4xl font-bold mb-4">Тарифы</h2>
        <p class="text-secondary max-w-2xl mx-auto">
          Выберите оптимальный план для роста вашего бизнеса. <br/>
          Прозрачные условия и максимальная отдача.
        </p>
      </div>
      
      <div class="pricing-grid">
        <PricingCard
          tier="PREMIUM"
          :price="600"
          lead-cost="от $0.50 за лид"
          :features="premiumFeatures"
          link="https://t.me/acex_admin?text=Здравствуйте!%20Хочу%20оформить%20тариф%20PREMIUM"
        />
        
        <PricingCard
          tier="STANDARD"
          :price="900"
          lead-cost="от $0.50 за лид"
          :features="standardFeatures"
          :is-popular="true"
          link="https://t.me/acex_admin?text=Здравствуйте!%20Хочу%20оформить%20тариф%20STANDARD"
        />
        
        <PricingCard
          tier="VIP"
          :price="1200"
          lead-cost="от $0.50 за лид"
          :features="vipFeatures"
          link="https://t.me/acex_admin?text=Здравствуйте!%20Хочу%20оформить%20тариф%20VIP"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import PricingCard from './ui/PricingCard.vue'

const premiumFeatures = [
  '6 видеопостов',
  '6 SMD или карусель-постов',
  '20 сторис',
  'Instagram, Telegram, FB, YouTube',
  'Рекламная стратегия',
  'Анализ конкурентов',
  'Целевая аудитория',
  'Управление бюджетом',
  'Оптимизация таргета',
  'Отчёты'
]

const vipFeatures = [
  '15 видеопостов',
  '10 SMD или карусель-постов',
  '40 сторис',
  'Все площадки + YouTube',
  'Полная стратегия',
  'Глубокий анализ',
  'Портрет ЦА + Клиента',
  'Воронка продаж',
  'Лид-магнит',
  'Сценарии продаж',
  'Годовая стратегия'
]

const standardFeatures = [
  '12 видеопостов',
  '8 SMD или карусель-постов',
  '30 сторис',
  'Instagram, Telegram, FB',
  'Базовая стратегия',
  'Анализ конкурентов',
  'Целевая аудитория',
  'Управление бюджетом',
  'Оптимизация',
  'Отчёты'
]
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

@media (max-width: 1024px) {
  .pricing-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }
}
</style>
