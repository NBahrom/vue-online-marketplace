import type { Module } from 'vuex'
import type { CartProduct } from '@/store/modules/cart/types'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export interface CartState {
  items: CartProduct[]
}

const cartModule: Module<CartState, any> = {
  namespaced: true,

  state: (): CartState => ({
    items: JSON.parse(localStorage.getItem('cart') || '[]')
  }),

  getters,

  mutations,

  actions
}

export default cartModule
