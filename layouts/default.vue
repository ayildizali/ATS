<template>
  <div class="flex w-full">
    <side-bar/>
    <router-view class="shrink"/>
  </div>
</template>
<script setup>
import SideBar from "../src/components/SideBar.vue"
</script>