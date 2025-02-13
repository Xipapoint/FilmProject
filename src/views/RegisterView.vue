<script setup lang="ts">
import RegisterForm from '../components/RegisterForm/RegisterForm.vue';


</script>

<template>
  <div class="form-container">
    <RegisterForm/>
  </div>
</template>

<style scoped>
.form-container {
  width: 100%;
  max-width: 400px;
  margin: 3rem auto;
  padding: 3rem;
  background-color: #222220;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(253, 253, 253, 0.1);
}
</style>
