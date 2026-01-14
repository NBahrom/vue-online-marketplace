

<template>
    <table>
        <tr class="table-head-cart">
            <th>Товар</th>
            <th>Количество</th>
            <th>Сумма</th>
            <th>Удалить все</th>
        </tr>
        
        <tr class="cart-item" :key="item.id" v-for="item in cartItems">
            <td class="cart-item-prod">
                <div class="cart-item-img">
                    <img :src="item.image" :alt="item.title">
                </div>
                <div class="cart-item-text">
                    <h4>{{ item.title }}</h4>
                    <p><span><GreenDot/></span> В наличии</p>
                </div>
            </td>

            <td>
                <Counter />
            </td>

            <td>
                <span class="price">{{ item.price }}</span>
            </td>

            <td>
                <div @click="deleteItem(item.id)" class="delete">
                    <GarbigeIcon />
                </div>
            </td>
        
        </tr>
    </table>
</template>

<script setup>
    import {computed} from "vue"
    import {useStore} from "vuex"
    import GreenDot from "../icons/GreenDot.vue";
    import Counter from "../ui/Counter.vue";
    import GarbigeIcon from "../icons/GarbigeIcon.vue";

    const store = useStore();

    const cartItems = computed(() => {
        return store.getters["cart/cartItems"]
    })

    function deleteItem(id) {
       store.dispatch("cart/removeFromCart", id) 
    }
    
</script>
    
<style scoped>
    .table-head-cart{
        padding: 15px 25px;
        background-color: #F4F7FB;
        border-radius: 5px;
    }

    .table-head-cart th{
        text-align: center;
        font-size: 18px;
        font-weight: 500;
        line-height: 100%;
        color: #282739;
    }

    .table-head-cart th:first-of-type{
        text-align: start;
    }

    .cart-item{
        margin-top: 50px;
    }

    .cart-item-prod{
        display: flex;
        gap: 5px;
        justify-content: start;
        align-items: center;
    }

    .cart-item-img{
        width: 112px;
        height: 108px;
    }

    .cart-item-img img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .cart-item-text{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .cart-item-text h4{
        font-weight: 700;
        font-size: 25px;
        line-height: 120%;
        color: #282739;
    }

    .cart-item-text p{
        font-size: 18px;
        line-height: 100%;
        font-weight: 400;
    }

    .cart-item-text p span{
        margin-right: 10px;
        width: 12px;
        height: 12px;
    }

    .price{
        font-weight: 500;
        font-size: 22px;
        line-height: 120%;
        color: #282739;
    }

    .delete{
        width: 24px;
        height: 24px;
    }
</style>
