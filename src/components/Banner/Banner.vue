<template>
    <section class="banner">
        <Swiper
            :slides-per-view="1"
            :navigation="{
                nextEl: '.image-swiper-button-next',
                prevEl: '.image-swiper-button-prev',
                disabledClass: 'swiper-button-disabled'
            }"
            :pagination="{ clickable: true }"
            :modules="[Navigation, Pagination]"
            class="swiper-banner"    
        >
            <SwiperSlide class="swiper_slide_custom"><img src="../../assets/images/banner.png" class="swiper_slide_img" alt="banner" /></SwiperSlide>
            <SwiperSlide class="swiper_slide_custom"><img src="../../assets/images/banner.png" class="swiper_slide_img" alt="banner" /></SwiperSlide>
            <SwiperSlide class="swiper_slide_custom"><img src="../../assets/images/banner.png" class="swiper_slide_img" alt="banner" /></SwiperSlide>
            <SwiperSlide class="swiper_slide_custom"><img src="../../assets/images/banner.png" class="swiper_slide_img" alt="banner" /></SwiperSlide>
        </Swiper>

        <div className="swiper-button-container container">
            <div className="swiper-button image-swiper-button-next">
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.6665 9.11117L11.3332 1.77783M18.6665 9.11117L11.3332 16.4445M18.6665 9.11117H1.55542" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className="swiper-button image-swiper-button-prev">
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.33335 8.88883L8.66668 16.2222M1.33335 8.88883L8.66668 1.5555M1.33335 8.88883L18.4445 8.88883" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    </section>
</template>

<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation, Pagination } from 'swiper/modules';

  export default {
    name: 'Banner',
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      return {
        Navigation,
        Pagination
      };
    }
  };
</script>

<style scoped>
.banner{
    width: 100%;
    height: 400px;
    margin-top: 192px;
    position: relative;
    background-color: #F2F2F2;
}

.swiper-banner{
    height: 100%;
}

.banner .swiper-wrapper{
    align-items: center;
}

.swiper_slide_custom{
    display: flex !important;
    justify-content: center;
    align-items: center;
}

.swiper_slide_img{
    height: 100%;
    width: 1092px;
    object-fit: cover;
}

.image_swiper_button_next{
    position: absolute;
    top: 0;
    right: 0;
}

.swiper-button-container{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0px);
    width: 100%;
    height: fit-content;
    z-index: 2;
}

.image-swiper-button-next{
    position: absolute;
    top: 50%;
    transform: translate(0px, -50%);
    right: 0;
    padding: 20px 18px;
    background-color: #FFFFFF;
    border-radius: 100%;
    display: flex;
    z-index: 2;
    box-shadow: 0px 5px 15px 0px #00000026;
    cursor: pointer;
}

.image-swiper-button-prev{
    position: absolute;
    top: 50%;
    transform: translate(0px, -50%);
    left: 0;
    padding: 20px 18px;
    background-color: #FFFFFF;
    border-radius: 100%;
    box-shadow: 0px 5px 15px 0px #00000026;
    display: flex;
    z-index: 2;
    cursor: pointer;
}
</style>