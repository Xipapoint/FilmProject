<template>
    <h2 class="form-title">Login</h2>
    <form @submit.prevent="onSubmit">
        <FormField v-model="name" label="Имя" :error="errors.name" />
        <FormField v-model="email" label="Email" type="email" :error="errors.email" />
        <FormField v-model="password" label="Пароль" type="password" :error="errors.password" />
        <button type="submit" class="submit-button">Register</button>
        <router-link to="/login">Not registered yet?</router-link>
    </form>
</template>

<script lang="ts" setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { z } from 'zod';
import { useAuthStore } from '../../stores/auth';
import FormField from '../shared/InputForm/FormField.vue';

const router = useRouter();

const schema = z.object({
  name: z.string().min(1, 'Name length must be at least 1 character'),
  email: z.string().email('Incorrect email'),
  password: z.string().min(6, 'Password length must be at least 6 characters'),
});

const name = ref('');
const email = ref('');
const password = ref('');
const errors = ref<{ name?: string; email?: string; password?: string }>({});


const validateForm = () => {
  const result = schema.safeParse({ name: name.value, email: email.value, password: password.value });
  if (!result.success) {
    errors.value = Object.fromEntries(
      Object.entries(result.error.format()).map(([key, value]) => [key, value._errors?.[0] || ''])
    );
    return false;
  }
  errors.value = {};
  return true;
};

const authStore = useAuthStore()
const onSubmit = () => {
    if (!validateForm()) return;
    authStore.login(email.value, name.value, password.value)
    router.push('/');
};


</script>

<style lang="scss">
    
</style>