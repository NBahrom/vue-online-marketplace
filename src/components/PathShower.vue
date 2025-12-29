<template>
    <div class="container">
        <div class="path-container">
            <HomeIcon />
            <div class="path-block">
                <a         
                    v-for="(path, index) in paths"
                    :key="path.link"
                    :href="path.link"
                >
                    <span v-if="index !== 0">/</span>
                    {{ path.name }}
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import type { PathArr } from '@/types/Path.props'
    import HomeIcon from './icons/HomeIcon.vue';

    defineProps<PathArr>()

</script>

<style scoped>
    .path-container{
        display: flex;
        gap: 10px;
        align-items: center;
    }

    .path-block{
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 5px;
    }

    .path-block a{
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
        color: var(--color-black);
        opacity: 0.5;
    }

    .path-block a:last-of-type{
        opacity: 1;
    }
</style>