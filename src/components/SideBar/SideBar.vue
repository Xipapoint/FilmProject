<template>
    <aside class="sidebar">
      <div class="logo">
        <i class="fas fa-tv"></i>
        <span>WATCH</span>
      </div>
      <nav class="menu">
        <CategorySection />
        <MediaSection />
      </nav>
    </aside>
  </template>
  
  <script setup>
    import CategorySection from './CategorySection/CategorySection.vue'
    import MediaSection from './MediaSection/MediaSection.vue';
  </script>
  
  <style lang="scss" scoped>
  .sidebar {
    position: absolute;
    width: 16rem;
    height: 100vh;
    background-color: #21201E;
    color: white;
    display: flex;
    flex-direction: column;
    box-shadow: 1px 0px 70px 0px #6100C2;
  
    .logo {
      font-size: 1.25rem;
      font-weight: bold;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }
  
    .menu {
      display: flex;
      flex-direction: column;
      gap: 10rem;
    }
  
    hr {
      border-color: #4a4a4a;
    }
  }
  </style>
  