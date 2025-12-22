<script setup lang="ts">
import {RouterView } from 'vue-router'
import TheHeader from './components/Header/TheHeader.vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

</script>

<template>
  <TheHeader />
  <RouterView />
</template>

