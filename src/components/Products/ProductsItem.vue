<template>
    <div @click="addToCart" class="product-item">
        <div class="product-img">
            <img :src="imgSrc" :alt="productName">
        </div>

        <h4 class="product-title">{{ productName }}</h4>
        <span v-if="showFullInfo" class="product-category">{{ category }}</span>

        <div class="product-actions" v-if="showFullInfo" >
            <div class="product-price">
                <span class="price">{{ price }}</span>

                <div class="product-buttons">
                    <button class="cart-button"><CartIcon /></button>
                    <button class="wishlist-button"><WishlistIcon /></button>
                </div>
            </div>
            <button class="buy-one-click-button">Купить в 1 клик</button>
        </div>

        <div class="new-label" v-if="newLabel">
            <span>Новинка</span>
        </div>

        <div class="compare-button" v-if="showFullInfo">
            <button><CompareIcon /></button>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ProductItemProps } from '@/types/ProductItem.props'
import type { CartProduct } from '@/store/modules/cart/types';
import CartIcon from '../icons/CartIcon.vue'
import WishlistIcon from '../icons/WishlistIcon.vue';
import CompareIcon from '../icons/CompareIcon.vue';
import { useStore } from 'vuex';


const props = defineProps<ProductItemProps>()

const store = useStore();

function addToCart() {
  const cartProduct: CartProduct = {
    id: props.id,
    name: props.productName,
    price: props.price ?? 0,
    image: props.imgSrc,
    quantity: 1,
  }

  store.dispatch('cart/addToCart', cartProduct)
}

</script>

<style scoped>
.product-item{
    position: relative;
    padding: 14px 25px;
    border: 1.5px solid #EAEBED;
    border-radius: 10px;
    max-width: 255px;
    width: 100%;
    display: block;
    min-height: 295px;
}

.product-img{
    width: 100%;
    height: 205px;
    margin-bottom: 22px;
}

.product-img img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.product-title{
    font-weight: 400;
    font-size: 22px;
    line-height: 22px;
    color: var(--color-black);
    margin-bottom: 10px;
}

.product-category{
    display: block;
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    color: #7C7D82;
    margin-bottom: 20px;
    color: var(--color-grey600);
}

.product-actions{
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.product-price{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.product-price .price{
    font-weight: 400;
    font-size: 20px;
    line-height: 100%;
    color: var(--color-black);
}

.product-buttons{
    display: flex;
    gap: 10px;
}

.wishlist-button,
.cart-button{
    width: 40px;
    height: 40px;
    border: 1px solid #EAEBED;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.buy-one-click-button{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 7px 39px;
    border-radius: 5px;
    background-color: var(--color-accent);
    color: var(--color-white);
    font-size: 17px;
    font-weight: 700;
    line-height: 100%;
}

.new-label{
    padding: 5px;
    background-color: var(--color-accent);
    border-radius: 5px;
    color: var(--color-white);
    font-size: 14px;
    font-weight: 700;
    line-height: 100%;
    position: absolute;
    left: 10px;
    top: 11px;
}

.compare-button{
    width: 22px;
    height: 22px;
    position: absolute;
    top: 14px;
    right: 17px;
    cursor: pointer;
    border: 0;
}
</style>