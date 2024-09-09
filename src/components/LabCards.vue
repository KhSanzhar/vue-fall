<template>
  <div class="h-screen flex items-center justify-center">
    <div class="grid grid-cols-3 gap-4">
      <div class="flex flex-col space-y-4">
        <lab-card />
        <lab-card />
      </div>
      <lab-card />
      <div class="flex flex-col space-y-4">
        <lab-card />
        <lab-card />
      </div>
    </div>
  </div>
</template>
<script setup>
import LabCard from '@/components/LabCard.vue'
</script>