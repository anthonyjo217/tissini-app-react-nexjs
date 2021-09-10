import React from 'react'
import { Item, Label } from 'semantic-ui-react'

import AddToCart from './AddToCart'
import ProductAttributes from './ProductAttributes'
import { Product } from '@classes/Product'

type ProductSummaryProps = {
  product: Product
}

const ProductSummary = ({ product }: ProductSummaryProps) => (
  <>
    <Item.Group as="section">
      <Item style={{ alignItems: 'center' }}>
        <Item.Image size="medium">
          <img src={product.image} alt={product.name} />
        </Item.Image>
        <Item.Content>
          <Item.Header as="h1">{product.name}</Item.Header>
          <Item.Description>
            <p>{product.price}</p>
            <Label>{`Ref: ${product.reference}`}</Label>
          </Item.Description>
          <Item.Extra>
            <AddToCart product={product} />
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
    {/* <ProductAttributes  {...product.variants} /> */}
  </>
)

export default ProductSummary
