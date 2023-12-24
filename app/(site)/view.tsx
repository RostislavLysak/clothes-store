'use client'
import { useEffect, useState } from 'react'

import axios from 'axios'

import { Product, TProduct } from '@/components/Product/Product'
import Routes from '@/routes'

const getProducts = async () => {
  const res = await axios.get<Promise<TProduct[]>>(`/api/${Routes.products}`)
  return res.data
}
const View = () => {
  const [data, setData] = useState<TProduct[]>([])

  useEffect(() => {
    getProducts().then(setData)
  }, [])

  return (
    <div className='flex flex-wrap justify-center m-auto w-full'>
      {data.map((item) => {
        return <Product key={item.id} product={item} />
      })}
    </div>
  )
}

export default View
