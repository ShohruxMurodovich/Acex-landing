<template>
  <div class="logo-wrapper">
    <!-- Using the uploaded image. 
         Note: Since it is a JPG, it has a background. 
         Ideally, a transparent PNG or SVG is better for dark mode. -->
    <img src="/acex_logo.png" alt="ACEX Logo" class="logo-img" />
  </div>
</template>

<style scoped>
.logo-wrapper {
  display: flex;
  align-items: center;
  height: 40px;
  overflow: hidden; /* Ensure it stays within bounds */
  border-radius: 6px; /* Slight radius to make the box look intentional if visible */
}

.logo-img {
  height: 100%;
  width: auto;
  object-fit: contain;
}
</style>
