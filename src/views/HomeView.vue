<template>
  <main>
    <Banner />
    <CategoriesShowCaseVue />
    <BestSellers />
  </main>
</template>

<script>
import CategoriesShowCaseVue from '../components/CategoriesShowCase/CategoriesShowCase.vue';
import Banner from '../components/Banner/Banner.vue';
import BestSellers from '../components/BestSellers/BestSellers.vue';

export default {
  name: 'HomeView',
  components: {
    CategoriesShowCaseVue,
    Banner,
    BestSellers
  }
};

</script>