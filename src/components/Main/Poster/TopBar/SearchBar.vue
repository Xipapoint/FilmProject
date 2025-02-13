<script setup lang="ts">
import { ref } from 'vue';
import Icon from '../../../shared/Icon.vue';

const isExpanded = ref(false);
const inputValue = ref('');

const toggleExpand = () => {
    isExpanded.value = !isExpanded.value;
};

</script>

<template>
    <div class="search" @click="toggleExpand">
        <input 
            v-if="isExpanded" 
            v-model="inputValue"  
            type="text" 
            placeholder="Search..." 
            autofocus
        />
        <Icon width="30" height="30" icon="material-symbols:search-rounded" />
    </div>
</template>

<style scoped lang="scss">
.search {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
}

.search-placeholder {
    color: white;
}

input {
    width: 200px;
    padding: 0.5rem;
    border: none;
    border-radius: 8px;
    outline: none;
}
</style>
