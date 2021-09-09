import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'

export const getServerSideProps = async () => {
  // utilizar url absolutas
  const res = await fetch(`http://localhost:3000/api/avo`)
  //rename de data a productlisst tipo TAPIAvoResponse
  const { data: productList }: TAPIAvoResponse = await res.json()

  if (!productList) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      productList,
    },
  }
}

const HomePage = ({ productList }: { productList: TProduct[] }) => {
  // const [productList, setProductList] = useState<TProduct[]>([])

  // useEffect(() => {
  //   window
  //     .fetch('/api/avo')
  //     .then((response) => response.json())
  //     .then(({ data }: TAPIAvoResponse) => {
  //       setProductList(data)
  //     })
  // }, [])

  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage
