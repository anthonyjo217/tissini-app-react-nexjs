import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import { GetServerSideProps } from 'next'
import { Product, TAPIProductResponse } from '@classes/Product'
// import  { useFetch } from '@hooks/useFetch';
import useSWR, { SWRConfig } from 'swr'
import HomeProductList from '@components/HomeProductList/HomeProductList'

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`https://l8.tissini.dev/api/v3/categories/1/products`)
  //rename de data a productlisst tipo TAPIProductResponse
  const { products: productList }: TAPIProductResponse = await res.json()

  return {
    props: {
      fallback: {
        '/': productList,
      },
    },
  }
}

const HomePage = ({ fallback }: any) => {
  return (
    <SWRConfig value={{ fallback }}>
      <HomeProductList />
    </SWRConfig>
  )
}

export default HomePage
