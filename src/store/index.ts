import { createStore } from 'vuex'
import cart from './modules/cart/index'

export default createStore({
  modules: {
    cart
  }
})
