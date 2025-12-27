<template>
  <section id="contact" class="section">
    <div class="container">
      <div class="contact-grid">
        <!-- Text & Links Column -->
        <div class="contact-info fade-in-up">
          <h2 class="section-title">{{ t('contact.sectionTitle') }}</h2>
          <p class="section-desc">
            {{ t('contact.sectionSubtitle') }}
          </p>
          
          <div class="links-stack">
            <ContactCard
              :icon="SendIcon"
              :label="t('contact.telegram')"
              value="@acex_admin"
              link="https://t.me/acex_admin"
            />
            <ContactCard
              :icon="InstagramIcon"
              :label="t('contact.instagram')"
              value="@acex.smm"
              link="https://www.instagram.com/acex.smm/"
            />
            <ContactCard
              :icon="PhoneIcon"
              :label="t('contact.phone')"
              value="+998 91 192 75 00"
              link="tel:+998911927500"
            />
          </div>
        </div>
        
        <!-- Audit CTA Column -->
        <div class="audit-block glass-panel fade-in-up delay-100">
          <div class="audit-badge">{{ t('contact.free') }}</div>
          <h3>{{ t('contact.auditTitle') }}</h3>
          <p>
            {{ t('contact.auditDescription') }}
          </p>
          <a
            href="https://t.me/acex_admin?text=Здравствуйте!%20Хочу%20получить%20бесплатный%20аудит%20ACEX%20😊"
            target="_blank"
            class="btn btn-primary w-full"
          >
            {{ t('contact.getAnalysis') }}
            <ArrowRightIcon :size="18" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Send as SendIcon, Instagram as InstagramIcon, Phone as PhoneIcon, ArrowRight as ArrowRightIcon } from 'lucide-vue-next'
import ContactCard from './ui/ContactCard.vue'
import { useTranslation } from '../composables/useTranslation'

const { t } = useTranslation()
</script>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 0.8fr; /* Asymmetric grid */
  gap: 4rem;
  align-items: center;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.section-desc {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  margin-bottom: 3rem;
  max-width: 400px;
}

.links-stack {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 360px;
}

/* Audit Block - Compact & Focused */
.audit-block {
  padding: 3rem;
  border-radius: var(--radius-xl);
  background: radial-gradient(circle at top right, rgba(59, 130, 246, 0.08), transparent 60%), 
              rgba(255, 255, 255, 0.02);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.audit-badge {
  background: rgba(139, 92, 246, 0.1);
  color: #a78bfa;
  border: 1px solid rgba(139, 92, 246, 0.2);
  padding: 4px 12px;
  border-radius: 99px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  letter-spacing: 0.05em;
}

.audit-block h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.audit-block p {
  color: var(--color-text-secondary);
  font-size: 1rem;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.w-full {
  width: 100%;
}

/* Animation helpers */
.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 0.6s ease-out forwards;
}
.delay-100 { animation-delay: 0.2s; }

@keyframes fadeUp {
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .section-title {
    font-size: 2.25rem;
  }
  
  .audit-block {
    padding: 2rem;
  }
}
</style>
