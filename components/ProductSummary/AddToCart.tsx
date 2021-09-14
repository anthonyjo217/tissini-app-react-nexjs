import React, { useState, useContext } from 'react'
import { Input, Icon, Transition, Card } from 'semantic-ui-react'
import { useCart, useCartMutations, discountByItem } from '@store/Cart'
import { Product } from '@classes/Product'
import Link from 'next/link'
import Image from 'next/image'

type AddToCartProps = {
  product: Product
}

// Fake a server Response, we don't care on this project
// about data persistency, but you may add it :)
const addToCartRequest = () =>
  new Promise((resolve, reject) => {
    window.setTimeout(resolve, 600)
  })

const validate = (quantity: number) => {
  let error = ''
  if (quantity < 1) error = "Can't be blank"

  return error
}

const applyDiscount = (subTotal: number, price: number): String => {
  let priceProductDiscount: number = price

  if (subTotal > 50) {
    priceProductDiscount = discountByItem(price, subTotal)
  }

  return priceProductDiscount.toLocaleString('en-US', {
    maximumFractionDigits: 2,
  })
}

const AddToCart = ({ product }: AddToCartProps) => {
  const { subTotal } = useCart()
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

  const handleSubmit = async () => {
    const error = validate(quantity)
    setError(error)

    if (!error) {
      setLoading(true)
      addToCartRequest()
        .then(() => {
          //console.log('product quantity-->', product);

          addToCart(product, quantity)
          setLoading(false)
          setQuantity(quantity)
          setVisible(true)
          toggleMessage()
        })
        .catch((err: Error) => {
          setError(`Error: ${err}` || 'Something went wrong')
          setLoading(false)
        })
    }
  }

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setQuantity(parseInt(target.value, 10))

  return (
    <>
      {/* <Link key={product.id} href={`/product/${product.id}`} ></Link> */}
      <Card>
        <Image src={product.images[0].url} width={333} height={333} />
        <Card.Content>
          <Card.Header>{product.name}</Card.Header>
          <Card.Meta style={{ color: 'dimgray' }}>
            {`$ ${applyDiscount(subTotal, product.price)}`}
          </Card.Meta>
          <Card.Description>{product.reference}</Card.Description>
        </Card.Content>
        <Card.Content extra>
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
              loading,
              disabled: loading,
            }}
          />
        </Card.Content>
      </Card>

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

export default AddToCart
