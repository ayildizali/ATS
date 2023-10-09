<template>
  <div v-if="show" class="absolute left-0 top-0 flex h-full w-full justify-center bg-black bg-opacity-30 px-8">
    <div class="mt-32 self-start rounded-lg bg-white p-4">
      <slot/>
    </div>
  </div>

</template>
<script>
import {ref} from "vue";

export default {
  setup() {
    const show = ref(false)
    const openModal = () => {
      show.value = true
    }
    const closeModal = () => {
      show.value = false
    }
    return {
      show,
      closeModal,
      openModal,
    }
  }
}

</script>
<style scoped>

</style>