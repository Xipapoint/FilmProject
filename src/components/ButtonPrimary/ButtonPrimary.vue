<template>
    <button class="btn-primary">
      <slot></slot>
    </button>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .btn-primary {
    background-color: #5c00d1;
    color: white;
    font-size: 16px;
    font-weight: bold;
    padding: 12px 20px;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }
  
  .btn-primary:hover {
    background-color: #4a00a8;
  }
  </style>
  