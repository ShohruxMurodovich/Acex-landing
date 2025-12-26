<template>
  <div class="logo-container">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 0L38 32H28L20 16L12 32H2L20 0Z" fill="#3B82F6"/>
      <path d="M20 14L29 32H11L20 14Z" fill="#1E40AF" fill-opacity="0.2"/>
    </svg>
    <div class="logo-text">
      <span class="text-white">ACEX</span>
    </div>
  </div>
</template>

<style scoped>
.logo-container {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-text {
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: 24px;
  letter-spacing: -0.02em;
  color: white;
}

.text-white {
  color: white;
}
</style>
