import React from 'react'
import { Card } from 'semantic-ui-react'
import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@classes/Product'

type ProductListProps = {
  products: Product[]
}

const mapProductsToCards = (products: Product[]) =>
  products.map(({ name, id, price, images }) => (
    <Link key={id} href={`/product/${id}`} passHref>
      <Card
        as="a"
        header={name}
        image={{
          children: <Image src={images[0].url} width={333} height={333} />,
        }}
        // image={`https://v3.tissini.app${images[0].url}`}
        meta={{
          children: <Card.Meta style={{ color: 'dimgray' }}>{price}</Card.Meta>,
        }}
      />
    </Link>
  ))

const ProductList = ({ products }: ProductListProps) => (
  <Card.Group itemsPerRow={2} stackable>
    {mapProductsToCards(products)}
  </Card.Group>
)

export default ProductList
