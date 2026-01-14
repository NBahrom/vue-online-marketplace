<template>
    <section class="best-seller">
        <div class="container">
            <div class="best-seller-wrapper">
                <h2>Лидеры продаж</h2>

                <div class="best-seller-items">
                    
                    <Swiper
                        :slides-per-view="'auto'"
                        space-between="18"
                        class="swiper-products"    
                    >
                        <SwiperSlide v-for="product in products">
                            <ProductsItem 
                                :id="product.id"
                                :link="`/products/${product.id}`"
                                :imgSrc="product.image"
                                :productName="product.name"
                                :category="product.category"
                                :price="product.price"
                                :newLabel="true"
                                :showFullInfo="false"
                            />
                        </SwiperSlide>

                    </Swiper>

                    <div class="category">
                        <ProductsCategoryBlock 
                             :imgSrc="PhonesImg"
                             categoryName="Смартфоны"
                             link="/category/phones"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import ProductsItem from '../Products/ProductsItem.vue';
import ProductsCategoryBlock from '../Products/ProductsCategoryBlock.vue';
import ProductImg from '../../assets/images/products/product1.png';
import PhonesImg from '../../assets/images/products/phones.png'
import { Swiper, SwiperSlide } from 'swiper/vue';
import products from "@/data/products.json"


</script>

<style scoped>
.best-seller-wrapper h2{
    margin-bottom: 35px;
    font-weight: 700;
    font-size: 40px;
    line-height: 100%;
    color: var(--color-black);
}

.swiper-products .swiper-slide{
    width: 255px;
}

.best-seller-items{
    position: relative;
    display: flex;
}

</style>