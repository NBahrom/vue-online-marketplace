<template>
    <section class="best-seller">
        <div class="container">
            <div class="best-seller-wrapper">
                <h2>Лидеры продаж</h2>

                <div class="best-seller-items">
                    <div class="category">
                        <ProductsCategoryBlock 
                             :imgSrc="HeadphonesImg"
                             categoryName="Наушники"
                             link="/category/phones"
                        />
                    </div>
                    
                    <Swiper
                        :slides-per-view="'auto'"
                        space-between="18"
                        class="swiper-products"    
                    >
                        <SwiperSlide>
                            <ProductsItem 
                                :id="1"
                                :link="'/products/2'"
                                :imgSrc="ProductImg"
                                productName="Sony MDR-ZX310"
                                category="Наушники"
                                :price="3800000"
                                :newLabel="true"
                                :showFullInfo="false"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductsItem 
                                :id="2"
                                :link="'/products/2'"
                                :imgSrc="ProductImg"
                                productName="Sony MDR-ZX310"
                                category="Наушники"
                                :price="3800000"
                                :newLabel="true"
                                :showFullInfo="false"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductsItem 
                                :id="3"
                                :link="'/products/3'"
                                :imgSrc="ProductImg"
                                productName="Sony MDR-ZX310"
                                category="Наушники"
                                :price="3800000"
                                :newLabel="true"
                                :showFullInfo="false"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductsItem 
                                :id="4"
                                :link="'/products/4'"
                                :imgSrc="ProductImg"
                                productName="Sony MDR-ZX310"
                                category="Наушники"
                                :price="3800000"
                                :newLabel="true"
                                :showFullInfo="false"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import ProductsItem from '../Products/ProductsItem.vue';
import ProductsCategoryBlock from '../Products/ProductsCategoryBlock.vue';
import ProductImg from '../../assets/images/products/headphone.png';
import HeadphonesImg from '../../assets/images/headphones.png'
import { Swiper, SwiperSlide } from 'swiper/vue';


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
    gap: 15px;
}

</style>