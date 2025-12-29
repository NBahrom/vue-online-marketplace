import type { GetterTree } from 'vuex'
import type { CartState } from './types'

const getters: GetterTree<CartState, any> = {
    cartItems: state => state.items,

    cartCount: state =>
      state.items.reduce((sum, item) => sum + item.quantity, 0),

    cartTotal: state =>
      state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      )
}

export default getters;