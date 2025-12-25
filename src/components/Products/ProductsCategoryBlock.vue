<template>
    <div  class="products-category"   :style="{ backgroundImage: `url(${imgSrc})` }">
        <a class="products-category-link" :href="link">
            {{categoryName}}
            <ArrowRightIcon />
        </a>
    </div>
</template>

<script>
    import ArrowRightIcon from '../icons/ArrowRightIcon.vue';

    export default {
        name: 'ProductsCategoryBlock',
        components: {
            ArrowRightIcon
        },
        props: {
            imgSrc: {
                type: String,
                required: true,
            },
            categoryName: {
                type: String,
                required: true
            },
            link: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>
.products-category{
    width: 341px;
    height: 100%;
    border-radius: 10px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 25px;
}

.products-category-link{
    padding: 8px 15px;
    border-radius: 3px;
    background-color: var(--color-accent);
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    color: var(--color-white);
}

.products-category-link svg{
    margin-left: 17px;
}
</style>