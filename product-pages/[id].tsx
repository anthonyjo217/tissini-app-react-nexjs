import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'

// import Layout from '@components/Layout/Layout'
// import ProductSummary from '@components/ProductSummary/ProductSummary'
// import { Product, TAPIProductResponse } from '@classes/Product'
// import { GetStaticPaths, GetStaticProps } from 'next'

// export const getStaticPaths: GetStaticPaths = async () => {
//   const response = await fetch(
//     'https://v3.tissini.app/api/v3/categories/1/products'
//   )
//   const { products }: TAPIProductResponse = await response.json()
//   //const paths = products.map(({id})  => ({ params: {id} }))

//   const paths = products.map((pro) => {
//     let id: string = pro.id.toString()
//     return { params: { id } }
//   })

//   return {
//     // Statically generate all paths
//     paths,
//     // Display 404 for everything else
//     fallback: false,
//   }
// }

// // This also gets called at build time
// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   // params contains the post `id`.
//   // If the route is like /posts/1, then params.id is 1
//   const response = await fetch(
//     `https://v3.tissini.app/api/v3/categories/1/products/${params?.id}`
//   )
//   const product: Product = await response.json()

//   // Pass post data to the page via props
//   return { props: { product } }
// }

// const ProductPage = (product: Product) => {
//   return (
//     <Layout>
//       {product == null ? null : <ProductSummary product={product} />}
//     </Layout>
//   )
// }

// export default ProductPage
