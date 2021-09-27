import React, { useContext } from 'react'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'
// import useSWR, { SWRConfig } from 'swr'
// import { useFetch } from '@hooks/useFetch'
// import { ProductListContext } from '@contexts/productList/ProductListContext'

const HomeProductList = () => {
  // swr
  // const fetcher = (url: string) => fetch(url).then((res) => res.json())
  // const { data:productList, error } = useSWR('/', fetcher)

  //console.log('render 1 time');

  return (
    <Layout>
      <KawaiiHeader />
      {<ProductList />}
    </Layout>
  )
}

export default HomeProductList
