<script setup lang="ts">
import {RouterView } from 'vue-router'
import TheHeader from './components/Header/TheHeader.vue';
import TheFooter from './components/Footer/TheFooter.vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

</script>

<template>
  <TheHeader />
  <RouterView />
  <TheFooter />
</template>

