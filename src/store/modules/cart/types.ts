export interface CartProduct {
  id: number | string
  title: string
  price: number
  quantity: number
  image?: string
}

export interface CartState {
  items: CartProduct[]
}