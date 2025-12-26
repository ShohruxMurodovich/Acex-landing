<template>
  <section id="services" class="hero section">
    <div class="container">
      <div class="hero-content">
        <div class="badge fade-in-up">Marketing Agency 2025</div>
        <h1 class="hero-title fade-in-up delay-100">
          Профессиональный <br />
          <span class="text-gradient">SMM и Таргет</span>
        </h1>
        <p class="hero-subtitle fade-in-up delay-200">
          Комплексное продвижение вашего бизнеса в социальных сетях. 
          Стратегия, контент и реклама, которые приносят реальные продажи.
        </p>
        <div class="fade-in-up delay-300">
          <a href="#contact" class="btn btn-primary btn-lg">
            Получить консультацию
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 160px 0 100px; /* Airy spacing */
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

.badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 99px;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
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

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.75rem;
  }
  
  .hero-subtitle {
    font-size: 1.125rem;
  }
}
</style>
