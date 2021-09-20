import React, { useEffect } from 'react'
import { Card } from 'semantic-ui-react'
import { discountByItem, useCart } from '@store/Cart'

type ProductPrice = {
  //subTotal: number,
  price: number
}

const applyDiscount = (price: number): String => {
  const { subTotal } = useCart()

  let priceProductDiscount: number = price

  if (subTotal > 50) {
    priceProductDiscount = discountByItem(price, subTotal)
  }

  return priceProductDiscount.toLocaleString('en-US', {
    maximumFractionDigits: 2,
  })
}

const ProductPrice = ({ price }: ProductPrice) => {
  return (
    <>
      <Card.Meta style={{ color: 'dimgray' }}>
        {`$ ${applyDiscount(price)}`}
      </Card.Meta>
    </>
  )
}

export default ProductPrice
