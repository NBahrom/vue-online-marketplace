<template>
  <main class="cart">
    <PathShower :paths />
  </main>
</template>

<script setup>
  import PathShower from '@/components/PathShower.vue';

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

<style>
.cart{
  margin-top: 30px;
}
</style>
