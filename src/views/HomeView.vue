<template>
  <main>
    <Banner />
    <CategoriesShowCaseVue />
    <BestSellers />
    <Brands />
    <NewProducts />
  </main>
</template>

<script>
import CategoriesShowCaseVue from '../components/CategoriesShowCase/CategoriesShowCase.vue';
import Banner from '../components/Banner/Banner.vue';
import BestSellers from '../components/BestSellers/BestSellers.vue';
import Brands from '@/components/Brands/Brands.vue';
import NewProducts from '@/components/NewProducts/NewProducts.vue';

export default {
  name: 'HomeView',
  components: {
    CategoriesShowCaseVue,
    Banner,
    BestSellers,
    Brands,
    NewProducts
  }
};

</script>