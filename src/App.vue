<template>
<!--  <div>-->
<!--    <lab-header />-->
<!--    <lab-cards />-->
<!--  </div>-->

  <div class="min-h-screen flex flex-col">
    <a-header />

    <div class="flex-grow">

      <a-input v-model="filter" class="mt-16 w-fit mx-auto" placeholder="Write smth"/>

      <div class="flex justify-center mt-4">
        <a-button @click="addNewItem">
          Add
        </a-button>
      </div>

      <div class="mb-12 grid grid-cols-4 gap-5 mx-4 mt-6">
        <a-item
          v-for="item in items"
          :key="item.id"
          :item="item"
          @click="removeItem(item.id)"
          class=""
        />
      </div>

      <div v-if="items.length" class="flex justify-center mt-4">
        Current Count of Items: {{ items.length }}
      </div>

    </div>

    <a-footer class="bottom-0"/>
  </div>
</template>


<script setup>
// import LabCards from '@/components/LabCards.vue'
// import LabHeader from '@/components/LabHeader.vue'
import AHeader from '@/Quiz1/AHeader.vue'
import AFooter from '@/Quiz1/AFooter.vue'
import AInput from '@/Quiz1/AInput.vue'
import { ref } from 'vue'
import { useItems } from '@/Quiz1/useItems.js'
import AItem from '@/Quiz1/AItem.vue'
import AButton from '@/Quiz1/AButton.vue'


const filter = ref('')


const {items, addItem, removeItem} = useItems([
  {id: 1, name: 'Item 1'},
  {id: 2, name: 'Item 2'},
])

const addNewItem = () => {
  const newItem = {id: items.value.length + 1, name: filter.value};
  addItem(newItem);
  filter.value = '';
}

</script>