import type { ActionTree } from "vuex";
import type { CartState, CartProduct } from './types'

const actions: ActionTree<CartState, any> = {
    addToCart({ commit }, product: CartProduct) {
      commit('ADD_TO_CART', product)
    },

    removeFromCart({ commit }, id: number | string) {
      commit('REMOVE_FROM_CART', id)
    },

    increaseQty({ commit }, id: number | string) {
      commit('INCREASE_QTY', id)
    },

    decreaseQty({ commit }, id: number | string) {
      commit('DECREASE_QTY', id)
    },

    clearCart({ commit }) {
      commit('CLEAR_CART')
    }
}

export default actions;