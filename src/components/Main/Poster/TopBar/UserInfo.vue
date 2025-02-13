<template>
        <div v-if="isAuthenticated">
            <Icon width="30" height="30" icon="material-symbols:supervised-user-circle-outline"/>
            <p class="link" @click="logout">Logout</p>
        </div>
        <div class="linkSection" v-else>
            <router-link class="link" to="/register">Register</router-link>
            <router-link class="link" to="/login">Login</router-link>
        </div>

</template>

<script lang="ts" setup>
import { useAuthStore } from '../../../../stores/auth';
import Icon from '../../../shared/Icon.vue';

const { isAuthenticated, logout } = useAuthStore();
</script>

<style scoped lang="scss">
    .linkSection{
        display: flex;
        gap: 20px;
        font-size: 18px;
    }
    .link{
        cursor: pointer;
    }
</style>
