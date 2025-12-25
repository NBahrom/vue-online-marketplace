<template>
    <section class="brands">
        <div class="container">
            <div class="brands-inner">
                <h2>Бренды</h2>

                <Swiper 
                    :slides-per-view="'auto'"
                    space-between="30"
                    :navigation="{
                        nextEl: '.brands-swiper-button-next',
                        prevEl: '.brands-swiper-button-prev',
                        disabledClass: 'swiper-button-disabled'
                    }"
                    class="brands-swiper"
                    :modules="[Navigation]"
                >   
                    <SwiperSlide
                        v-for="brand in brands"
                        class="brand-item"
                        :key="brand.id"
                    >
                        <img :src="brand.img" :alt="brand.name">
                    </SwiperSlide>
                </Swiper>

                <div className="swiper-button-container container">
                    <div className="swiper-button brands-swiper-button-next">
                        <svg width="24" height="24" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.6665 9.11117L11.3332 1.77783M18.6665 9.11117L11.3332 16.4445M18.6665 9.11117H1.55542" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className="swiper-button brands-swiper-button-prev">
                        <svg width="24" height="24" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.33335 8.88883L8.66668 16.2222M1.33335 8.88883L8.66668 1.5555M1.33335 8.88883L18.4445 8.88883" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Navigation } from 'swiper/modules';
    import brands from '@/data/brands.json'
</script>

<style scoped>
    .brands{
        overflow: hidden;
        position: relative;
    }

    .brands::after{
        content: '';
        position: absolute;
        bottom: 40px;
        right: 0;
        height: 250px;
        width: calc((100% - 1430px) / 2);
        background: linear-gradient(90.47deg, #f1f1f100 3.81%, rgb(255 255 255) 39.89%);
        z-index: 2;
    }

    .brands::before{
        content: '';
        position: absolute;
        bottom: 40px;
        left: 0;
        height: 250px;
        width: calc((100% - 1430px) / 2);
        background: linear-gradient(90.47deg, #f1f1f100 3.81%, rgb(255 255 255) 39.89%);
        z-index: 2;
        transform: rotate(180deg);
    }
    
    .brands-inner > h2{
        font-weight: 700;
        font-size: 40px;
        line-height: 100%;
        margin-bottom: 35px;
    }

    .brands-swiper{
        overflow: unset;
    }

    .brand-item{
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 250px;
        width: 100%;
        height: 250px;
        background-color: var(--color-grey);
        border-radius: 15px;
    }

    .brand-item > img{
        max-width: 170px;
        max-height: 120px;
        object-fit: contain;
    }

    .swiper-button-container{
        position: relative;
    }

    .brands-swiper-button-next{
        position: absolute;
        bottom: 102px;
        right: 0;
    }

    .brands-swiper-button-prev{
        position: absolute;
        bottom: 102px;
        left: 0;
        transform: translate(-50%, 0);
    }

    .brands-swiper-button-prev,
    .brands-swiper-button-next{
        cursor: pointer;
        display: flex;
        padding: 14px;
        border-radius: 100%;
        background-color: #FFFFFF;
        box-shadow: 0px 5px 15px 0px #00000026;
        z-index: 3;
    }

    .brands-swiper-button-prev svg,
    .brands-swiper-button-next svg{
        width: 18px;
        height: 18px;
    }

    @media(max-width: 1024px){
        .swiper-button-container{
            display: none;
        }
    }
</style>