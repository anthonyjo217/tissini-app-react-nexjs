import { Product } from '@classes/Product'
import React, { Dispatch, useContext, useReducer } from 'react'

export type CartItemType = Product & { quantity: number }

export type CartState = {
  [key: string]: CartItemType
}

export type CartAction = {
  type: 'add' | 'remove'
  item: Product
  quantity?: number
}

const defaultState = {} as CartState

const CartItemsContext = React.createContext(defaultState)
const CartDispatchContext = React.createContext(
  (() => {}) as Dispatch<CartAction>
)

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducers, defaultState)

  return (
    <CartItemsContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartItemsContext.Provider>
  )
}

function cartReducers(
  state: CartState,
  { item, type, quantity: qtyToAdd = 1 }: CartAction
) {
  const existingCartItem = state[item.id]

  switch (type) {
    case 'add': {
      if (existingCartItem != undefined) {
        const quantity = existingCartItem.quantity + qtyToAdd
        return {
          ...state,
          [item.id]: {
            ...existingCartItem,
            quantity,
          },
        }
      }

      return {
        ...state,
        [item.id]: {
          ...item,
          quantity: qtyToAdd,
        },
      }
    }

    case 'remove': {
      if (existingCartItem == undefined) {
        return state
      }

      const quantity = existingCartItem.quantity - 1
      if (quantity > 0) {
        return {
          ...state,
          [item.id]: {
            ...existingCartItem,
            quantity,
          },
        }
      }

      const newCartItems = { ...state }
      delete newCartItems[item.id]
      return newCartItems
    }

    default: {
      throw new Error(`Unhandled action type: ${type}`)
    }
  }
}
export const discountByItem = (price: number, total: number): number => {
  let porcent = 0,
    discount = 0,
    numberDiscount = ''

  if (total > 50) {
    console.log('descuento al item 15%')
    // numberDiscount = '15%'
    porcent = (price * 15) / 100
    price = price - porcent
  }

  if (total > 100) {
    console.log('descuento al item 30%')
    //numberDiscount = '30%'
    porcent = (price * 30) / 100
    price = price - porcent
  }

  if (total > 150) {
    console.log('descuento al item 40%')
    //numberDiscount = '40%'
    porcent = (price * 40) / 100
    price = price - porcent
  }

  //discount = parseFloat(price.toFixed(2))
  discount = price
  return discount
}
export const discountTotal = (sum: number): number => {
  let porcent = 0,
    discount = 0,
    numberDiscount = ''

  if (sum > 50) {
    console.log('descuento 15%')
    // numberDiscount = '15%'
    porcent = (sum * 15) / 100
    sum = sum - porcent
  }

  if (sum > 100) {
    console.log('descuento 30%')
    //numberDiscount = '30%'
    porcent = (sum * 30) / 100
    sum = sum - porcent
  }

  if (sum > 150) {
    console.log('descuento 40%')
    //numberDiscount = '40%'
    porcent = (sum * 40) / 100
    sum = sum - porcent
  }

  //discount = parseFloat(sum.toFixed(2))
  discount = sum

  return discount
}

const getCartSubTotal = (sum: number, item: CartItemType) => {
  sum += item.price * item.quantity
  return sum
}

const getCartCount = (sum: number, item: CartItemType) => sum + item.quantity
/**
 * Hey there insatiably brain,
 * Are you interested in this pattern where the Context values are
 * exposed without actually provinding access to the Context itself :)
 * https://kentcdodds.com/blog/how-to-use-react-context-effectively
 */
export const useCart = () => {
  const itemsById = useContext(CartItemsContext)
  const items = Object.values(itemsById)
  // Not familiar with Array.reduce? :)
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  const count = items.reduce(getCartCount, 0)
  const subTotal = items.reduce(getCartSubTotal, 0)

  const SubtotalDiscount = discountTotal(subTotal)

  return {
    items,
    itemsById,
    count,
    subTotal,
    SubtotalDiscount,
  }
}
export const useCartMutations = () => {
  const dispatch = useContext(CartDispatchContext)

  const addToCart = (product: Product, quantity?: number) =>
    dispatch({
      type: 'add',
      item: product,
      quantity,
    })

  const removeFromCart = (product: Product) =>
    dispatch({
      type: 'remove',
      item: product,
    })

  return {
    addToCart,
    removeFromCart,
  }
}

export default CartProvider
