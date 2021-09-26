import React from 'react'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'
import useSWR, { SWRConfig } from 'swr'

function HomeProductList() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const { data, error } = useSWR('/', fetcher)

  return (
    <Layout>
      <KawaiiHeader />
      {<ProductList products={data} />}
    </Layout>
  )
}

export default HomeProductList
