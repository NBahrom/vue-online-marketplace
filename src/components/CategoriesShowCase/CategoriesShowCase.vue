
<template>
    <section class="categories-showcase ">
        <div class="container">
            <div class="categories-showcase-wrapper">
                <SingleCategoriyVue
                    category-name="наслаждайся требуемой температурой в комнате"
                    :category-image="conditionerImg"
                    category-link="/categories/conditioners"
                    category-text="Кондиционеры"
                    category-bg-color="#E4BCBF"
                    categoriy-text-color="#FFFFFF"
                />
                <SingleCategoriyVue
                    category-name="СЛУШАЙ МЕЛОДИЮ СЕРДЦА"
                    :category-image="electronicsImg"
                    category-link="/categories/electronics"
                    category-text="НАУШНИКИ"
                    category-btn-color="dark"
                    category-bg-color="#161616DE"
                    categoriy-text-color="#FFFFFF"
                />
                <SingleCategoriyVue
                    category-name="Трендовые устройства"
                    :category-image="laptopImg"
                    category-link="/categories/laptops"
                    category-text="Ноутбуки"
                    category-bg-color="#FDC62EE5"
                    categoriy-text-color="#FFFFFF"
                />
                <SingleCategoriyVue
                    category-name="ПОЗНАВАЙ МИР С..."
                    :category-image="tvImg"
                    category-link="/categories/tvs"
                    category-text="ТЕЛЕВИЗОРЫ"
                    category-bg-color="#167DFFE5"
                    categoriy-text-color="#FFFFFF"
                    text-position="-40%, 30%"
                />
                <SingleCategoriyVue
                    category-name="ОБЛЕГЧЕНИЕ РАБОТЫ"
                    :category-image="printersImg"
                    category-link="/categories/printers"
                    category-text="ПРИНТЕРЫ"
                    category-bg-color="#2CD06FDE"
                    categoriy-text-color="#FFFFFF"
                />
                 <SingleCategoriyVue
                    category-name="наслаждайся с новым..."
                    :category-image="iphoneImg"
                    category-link="/categories/phones"
                    category-text="IPHONE"
                    category-bg-color="#EDEEF2E5"
                    categoriy-text-color="#000000"
                    img-position="-100%, 0%"
                />
            </div>
        </div>
    </section>
</template>

<script>
import  SingleCategoriyVue from './SingleCategory.vue';
import electronicsImg from '../../assets/images/headphone.png';
import laptopImg from '../../assets/images/laptop.png';
import conditionerImg from '../../assets/images/conditioner.png';
import iphoneImg from '../../assets/images/iphone.png';
import printersImg from '../../assets/images/printer.png';
import tvImg from '../../assets/images/tv.png';


export default {
    name: 'CategoriesShowCase',
    components: {
        SingleCategoriyVue
    },
    data() {
        return {
            electronicsImg,
            laptopImg,
            conditionerImg,
            iphoneImg,
            printersImg,
            tvImg
        }
    }
};

</script>

<style scoped>
    .categories-showcase-wrapper{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 32px;
    }

    .categories-showcase-wrapper > :nth-child(1) {
        grid-column: span 2;
    }

    .categories-showcase-wrapper > :nth-child(6) {
        grid-column: span 2;
    }
</style>