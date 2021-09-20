import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import { GetServerSideProps } from 'next'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'
import { Product, TAPIProductResponse } from '@classes/Product'

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

const HomePage = ({ productList }: { productList: Product[] }) => {
  return (
    <Layout>
      <KawaiiHeader />
      {<ProductList products={productList} />}
    </Layout>
  )
}

export default HomePage
