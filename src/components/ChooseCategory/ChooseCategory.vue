<template>
    <button 
        @click="handleClick" 
        :class="['btn', {toggled: isToggled}]"
    >
        {{ text }}
    </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
    text: string
    isToggled: boolean
}>();

const emit = defineEmits<{
    (event: 'click', text: string): void;
}>();

const handleClick = () => {
    emit('click', props.text);
};
</script>

<style scoped>
.btn {
    background-color: #1a1a1a;
    color: white;
    border: 1px solid white;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
}

.toggled{
    background-color:#434343 ;
}

.btn:hover {
    background-color: #333;
}
</style>
