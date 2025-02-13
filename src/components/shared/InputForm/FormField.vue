<template>
  <div class="formGroup">
    <label :for="id">{{ label }}</label>
    <input 
      :id="id" 
      :type="type" 
      :value="modelValue" 
      @input="$emit('update:modelValue', $event.target.value)" 
      class="formInput"
    />
    <span class="error" v-if="error">{{ error }}</span>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  modelValue: String,
  type: {
    type: String,
    default: "text",
  },
  error: String,
  id: String,
});
defineEmits(["update:modelValue"]);
</script>

<style scoped lang="scss">
.formGroup {

  margin-bottom: 10px;

  .formInput {
    width: -webkit-fill-available;
    padding: 1rem;
    border: 1px solid #ccc;
    background-color: #21201E;
    color: white;
  }
}
.error {
  color: red;
  font-size: 12px;
}
</style>
