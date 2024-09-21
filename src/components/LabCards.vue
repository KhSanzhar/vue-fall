<template>
  <div class="h-screen flex items-center justify-center">
    <div class="grid grid-cols-3 gap-4 m-28">
      <div class="flex flex-col space-y-4">
        <lab-card />
        <lab-card />
      </div>
      <div class="relative">

        <div class="bottom-20 absolute z-10 flex p-4 gap-2">
          <button class="text-white bg-red-500 border-none rounded-md w-16">Travel</button>
          <button class="text-white bg-blue-500 border-none rounded-md w-16">Food</button>
        </div>

        <lab-card class="h-full"/>
      </div>
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