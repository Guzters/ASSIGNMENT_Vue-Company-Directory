<script setup>
import NavMenu from '@/components/NavMenu.vue'
import MainPage from '@/components/MainPage.vue'

import { ref } from 'vue'
const showMainPage = ref(false)
</script>

<template>
  <NavMenu />
  <MainPage v-if="showMainPage" />
  <div v-else>
    <h1>This is another "Page"</h1>
  </div>
</template>
