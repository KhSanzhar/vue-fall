<template>
  <div
    class="flex items-center overflow-hidden rounded-md border border-gray-300 shadow-sm"
  >
    <input
      v-model="modelValue"
      class="py-2 pl-2 pr-2 focus:outline-none w-80"
      type="text"
      :placeholder="placeholder"
    />
  </div>
</template>


<script setup>
defineProps({
  placeholder: {
    type: String,
    default: ''
  }
})

const modelValue = defineModel()
</script>