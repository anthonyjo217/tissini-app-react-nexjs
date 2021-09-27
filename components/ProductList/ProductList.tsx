import React, { useContext } from 'react'
import { Card } from 'semantic-ui-react'
import { Product } from '@classes/Product'
import AddToCart from '@components/ProductSummary/AddToCart'
import { ProductListContext } from '@contexts/productList/ProductListContext'

const mapProductsToCart = (products: Product[]) =>
  products.map((product) => <AddToCart key={product.id} product={product} />)

const ProductList = () => {
  const productList = useContext(ProductListContext)

  return (
    <Card.Group itemsPerRow={2} stackable>
      {mapProductsToCart(productList)}
    </Card.Group>
  )
}

export default ProductList

// const mapProductsToCards = (products: Product[]) =>
//   products.map(({ name, id, price, images }) => (
//     <Link key={id} href={`/product/${id}`} passHref>
//       <Card
//         as="a"
//         header={name}
//         image={{
//           children: <Image src={images[0].url} width={333} height={333} />,
//         }}
//         // image={`https://v3.tissini.app${images[0].url}`}
//         meta={{
//           children: <Card.Meta style={{ color: 'dimgray' }}>{price}</Card.Meta>,
//         }}
//       />
//     </Link>
//   ))
