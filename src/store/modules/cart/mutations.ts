import type { MutationTree } from "vuex"
import type { CartState, CartProduct } from "./types"

const mutations: MutationTree<CartState> = {
    ADD_TO_CART(state, product: CartProduct) {
      const existing = state.items.find(p => p.id === product.id)

      if (existing) {
        existing.quantity++
      } else {
        state.items.push({ ...product, quantity: 1 })
      }

      localStorage.setItem('cart', JSON.stringify(state.items))
    },

    REMOVE_FROM_CART(state, id: number | string) {
      state.items = state.items.filter(item => item.id !== id)
      localStorage.setItem('cart', JSON.stringify(state.items))
    },

    INCREASE_QTY(state, id: number | string) {
      const item = state.items.find(p => p.id === id)
      if (item) item.quantity++
      localStorage.setItem('cart', JSON.stringify(state.items))
    },

    DECREASE_QTY(state, id: number | string) {
      const item = state.items.find(p => p.id === id)
      if (!item) return

      if (item.quantity > 1) {
        item.quantity--
      } else {
        state.items = state.items.filter(p => p.id !== id)
      }

      localStorage.setItem('cart', JSON.stringify(state.items))
    },

    CLEAR_CART(state) {
      state.items = []
      localStorage.removeItem('cart')
    }
}

export default mutations;