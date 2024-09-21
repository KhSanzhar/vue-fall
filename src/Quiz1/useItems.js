import { ref } from 'vue'


export function useItems(BaseItems = []) {
  const items = ref(BaseItems);

  const addItem = (item) => {
    items.value.push(item);
  }

  const removeItem = (itemId) => {
    items.value = items.value.filter((item) => item.id !== itemId);
  }

  return{
    items,
    addItem,
    removeItem,
  }
}