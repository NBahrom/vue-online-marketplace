<template>
  <main class="cart">
    <PathShower :paths />
    <div class="container">
      <h1 class="title">Моя корзина</h1>
      <span>{{ !cartProducts ? 0 : cartProducts }} товара</span>
    </div>
  </main>
</template>

<script setup>
  import PathShower from '@/components/PathShower.vue';
  import { computed } from 'vue';
  import {useStore} from 'vuex'

  const store = useStore()

  const cartProducts = computed(() => {
    store.getters["cart/cartCount"]
  })


  const paths = [
    {
      name: "Главная", link: "/"
    },
    {
      name: "Главная", link: "/"
    },
    {
      name: "Главная", link: "/"
    }
  ]

</script>

<style scoped>
.cart{
  margin-top: 30px;
}

.title{
  font-weight: 500;
  font-style: Medium;
  font-size: 40px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;
  text-transform: uppercase;
  margin-bottom: 15px;
  margin-top: 50px;
}

</style>
