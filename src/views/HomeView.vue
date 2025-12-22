<template>
  <main>
    <Banner />
    <CategoriesShowCaseVue />
  </main>
</template>

<script>
import CategoriesShowCaseVue from '../components/CategoriesShowCase/CategoriesShowCase.vue';
import Banner from '../components/Banner/Banner.vue';

export default {
  name: 'HomeView',
  components: {
    CategoriesShowCaseVue,
    Banner
  }
};

</script>