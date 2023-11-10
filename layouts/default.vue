<style scoped>
.shrink {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<template>
  <div class="flex w-full">
    <side-bar/>
    <router-view class="shrink"/>
  </div>
</template>
<script setup>
import SideBar from "../src/components/SideBar.vue"
</script>