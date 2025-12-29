

<template>
    <header ref="headerRef">
        <div class="container">
            <div class="header_inner">
                <HeaderTop />
                <HeaderBottom />
            </div>
        </div>
    </header>
    <div
        class="header-placeholder"
        :style="{ height: placeholderHeight + 'px' }"
    ></div>
</template>

<script setup lang="ts">
    import { ref, onMounted, onBeforeUnmount } from 'vue'
    import HeaderBottom from './HeaderBottom.vue'
    import HeaderTop from './HeaderTop.vue'

    const headerRef = ref<HTMLElement | null>(null)
    const placeholderHeight = ref(0)

    const updateHeight = () => {
        if (headerRef.value) {
            placeholderHeight.value = headerRef.value.offsetHeight
        }
    }

    onMounted(() => {
        updateHeight()
        window.addEventListener('resize', updateHeight)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('resize', updateHeight)
    })
</script>


<style scoped>
header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 30px 0;
    background-color: #FFFFFF;
    z-index: 10;
    box-shadow: 0px 0px 20px 0px #00000026;
}

.header_inner{
    display: flex;
    flex-direction: column;
    gap: 27px; 
}

</style>