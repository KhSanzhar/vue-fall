<template>
  <div class="flex items-center justify-center cursor-pointer rounded border shadow-lg h-9">
    <div >
      <span>{{item.name}}</span>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  item: {
    type: Object,
  }
})

</script>