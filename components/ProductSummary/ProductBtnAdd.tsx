import React, { useState, useContext, useEffect } from 'react'
import { Input, Icon, Transition, Card, CardMeta } from 'semantic-ui-react'
import { useCart, useCartMutations, discountByItem } from '@store/Cart'
import { Product } from '@classes/Product'

type ProductBtnAddProps = {
  product: Product
}

// Fake a server Response, we don't care on this project
// about data persistency, but you may add it :)
// const addToCartRequest = () =>
//   new Promise((resolve, reject) => {
//     window.setTimeout(resolve, 600)
//   })

const validate = (quantity: number) => {
  let error = ''
  if (quantity < 1) error = "Can't be blank"

  return error
}

const ProductBtnAdd = ({ product }: ProductBtnAddProps) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [visible, setVisible] = useState(false)
  const { addToCart } = useCartMutations()

  const toggleMessage = () => {
    setTimeout(() => {
      setVisible(false)
    }, 1000)
  }

  const handleSubmit = (e: Event) => {
    e.preventDefault()
    const error = validate(quantity)
    setError(error)

    if (!error) {
      addToCart(product, quantity)
      setQuantity(quantity)
      setVisible(true)
      toggleMessage()

      // addToCartRequest()
      //   .then(() => {
      //console.log('product quantity-->', product);
      // addToCart(product, quantity)
      // setLoading(false)
      // setQuantity(quantity)
      // setVisible(true)
      // toggleMessage()
      // })
      // .catch((err: Error) => {
      //   setError(`Error: ${err}` || 'Something went wrong')
      //   setLoading(false)
      // })
    }
  }

  useEffect(() => {
    setQuantity(quantity)
  }, [])

  const handleChange = (e: any) => {
    e.preventDefault()
    const {
      target: { value },
    } = e
    setQuantity(parseInt(value, 10))
  }
  return (
    <>
      <Input
        size="mini"
        type="number"
        placeholder="Quantity"
        value={quantity}
        min={1}
        step={1}
        error={!!error}
        onChange={handleChange}
        action={{
          color: 'green',
          content: 'Add to Cart',
          icon: 'plus cart',
          onClick: handleSubmit,
          // loading,
          //disabled: loading,
        }}
      />

      {error && (
        <div style={{ color: 'red', position: 'absolute' }}>{error}</div>
      )}
      <Transition duration={{ hide: 500, show: 500 }} visible={visible}>
        <div style={{ color: 'green', position: 'absolute' }}>
          <Icon name="check" />
          Added to cart
        </div>
      </Transition>
    </>
  )
}

export default ProductBtnAdd
