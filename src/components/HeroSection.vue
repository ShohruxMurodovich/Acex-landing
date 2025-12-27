<template>
  <section id="services" class="hero section">
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title fade-in-up delay-100">
          {{ t('hero.title') }} <br />
          <span class="text-gradient">{{ t('hero.titleHighlight') }}</span>
        </h1>
        <p class="hero-subtitle fade-in-up delay-200">
          {{ t('hero.subtitle') }}
        </p>
        <div class="fade-in-up delay-300">
          <a href="#contact" class="btn btn-primary btn-lg">
            {{ t('hero.ctaButton') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useTranslation } from '../composables/useTranslation'

const { t } = useTranslation()
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* Top subtle glow using pseudo-element or multiple backgrounds */
  background: 
    radial-gradient(circle at 50% -20%, rgba(124, 58, 237, 0.15) 0%, transparent 60%),
    radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 40%);
}

.hero-content {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}


.hero-title {
  font-size: 4rem; /* Reduced slightly from 4.5 for cleaner look, but bolder */
  font-weight: 800; /* Extra contrast */
  margin-bottom: 2rem;
  line-height: 1.05;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 3.5rem;
  max-width: 640px;
  font-weight: 400;
}

.btn-lg {
  padding: 1rem 2.5rem;
  font-size: 1.125rem;
}

/* Animations using globals */
.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Mobile Responsive Styles */
@media (max-width: 639px) {
  .hero {
    min-height: 100svh; /* Use small viewport height for mobile browsers */
    padding-top: 80px; /* Account for fixed header */
  }

  .hero-title {
    font-size: 2.25rem; /* Significantly smaller for mobile */
    margin-bottom: 1.25rem;
    line-height: 1.1;
  }
  
  .hero-subtitle {
    font-size: 1rem;
    margin-bottom: 2rem;
    padding: 0 0.5rem; /* Extra padding on mobile */
  }

  .btn-lg {
    padding: 0.875rem 2rem;
    font-size: 1rem;
    width: 100%; /* Full width on mobile */
  }
}

@media (min-width: 640px) and (max-width: 767px) {
  .hero-title {
    font-size: 2.75rem;
    margin-bottom: 1.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.125rem;
    margin-bottom: 2.5rem;
  }

  .btn-lg {
    padding: 0.9375rem 2.25rem;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .hero-title {
    font-size: 3.25rem;
  }
  
  .hero-subtitle {
    font-size: 1.1875rem;
  }
}

</style>
