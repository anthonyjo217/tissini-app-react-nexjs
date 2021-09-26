import React, { useState, useContext, useEffect } from 'react'
import { Input, Icon, Transition, Card, CardMeta } from 'semantic-ui-react'
import { useCart, useCartMutations, discountByItem } from '@store/Cart'
import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@classes/Product'
import ProductPrice from '@components/ProductSummary/ProductPrice'
import ProductBtnAdd from '@components/ProductSummary/ProductBtnAdd'

type AddToCartProps = {
  product: Product
}

const AddToCart = React.memo(({ product }: AddToCartProps) => {
  return (
    <>
      {/* <Link key={product.id} href={`/product/${product.id}`} ></Link> */}

      <Card>
        <Card.Content>
          {Math.random()}

          <Image src={product.images[0].url} width={333} height={333} />
          <Card.Content>
            <Card.Header>{product.name}</Card.Header>

            <ProductPrice price={product.price} />

            <Card.Description>{product.reference}</Card.Description>
          </Card.Content>

          <ProductBtnAdd product={product} />
        </Card.Content>
      </Card>
    </>
  )
})

export default AddToCart
