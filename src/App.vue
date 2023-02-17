<script setup>
import NavMenu from '@/components/NavMenu.vue'
import MainPage from '@/components/MainPage.vue'

import { ref, onMounted } from 'vue'
const showMainPage = ref(true)

onMounted(() => {
  if (window.location.pathname === '/') {
    showMainPage.value = true
  } else {
    showMainPage.value = false
  }
})
</script>

<template>
  <NavMenu />
  <MainPage v-if="showMainPage" />
  <div v-else>
    <h1>This is another "Page"</h1>
  </div>
</template>
