export interface CartProduct {
  id: number | string
  name: string
  price: number
  quantity: number
  image?: string
}

export interface CartState {
  items: CartProduct[]
}