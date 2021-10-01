import React, { useState, useEffect, useMemo } from 'react'
import fetch from 'isomorphic-unfetch'
import { GetServerSideProps } from 'next'
import { Product, TAPIProductResponse } from '@classes/Product'
// import  { useFetch } from '@hooks/useFetch';
//import useSWR, { SWRConfig } from 'swr'
import HomeProductList from '@components/HomeProductList/HomeProductList'
import { ProductListContext } from '@contexts/productList/ProductListContext'

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`https://l8.tissini.dev/api/v3/categories/1/products`)
  //rename de data a productlisst tipo TAPIProductResponse
  const { products: productList }: TAPIProductResponse = await res.json()

  return {
    props: {
      productList,
    },
  }
}

const HomePage = React.memo(({ productList }: { productList: Product[] }) => {
  return (
    <ProductListContext.Provider value={productList}>
      <HomeProductList />
    </ProductListContext.Provider>
  )
})

export default HomePage

// swr

// export const getServerSideProps: GetServerSideProps = async () => {
//   const res = await fetch(`https://l8.tissini.dev/api/v3/categories/1/products`)
//   //rename de data a productlisst tipo TAPIProductResponse
//   const { products: productList }: TAPIProductResponse = await res.json()

//   return {
//     props: {
//       fallback: {
//         '/': productList,
//       },
//     },
//   }
// }

// const HomePage = ({ fallback}: any) => {

//   console.log( fallback );

//   return (
//     <SWRConfig value={{ fallback }}>
//       <HomeProductList />
//     </SWRConfig>
//   )
// }
