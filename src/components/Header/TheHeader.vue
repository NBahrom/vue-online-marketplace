<script setup lang="ts">
import HeaderBottom from './HeaderBottom.vue';
import HeaderTop from './HeaderTop.vue';

</script>

<template>
    <header>
        <div class="container">
            <div class="header_inner">
                <HeaderTop />
                <HeaderBottom />
            </div>
        </div>
    </header>
</template>

<style scoped>
header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 30px 0;
    background-color: #FFFFFF;
    z-index: 10;
}

.header_inner{
    display: flex;
    flex-direction: column;
    gap: 27px; 
}

</style>