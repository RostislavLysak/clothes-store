'use client'

import { useEffect, useState } from 'react'

import { useParams } from 'next/navigation'

import axios from 'axios'

import { Product, TProduct } from '@/components/Product/Product'
import Routes from '@/routes'

const getProductsByCategory = async (params: string) => {
  const res = await axios.get(`/api/${Routes.products}/${params}`)

  return res.data
}

export default function View() {
  const { slug } = useParams<{ slug: string }>()
  const [data, setData] = useState<TProduct[]>([])

  useEffect(() => {
    getProductsByCategory(slug).then(setData)
  }, [])

  return (
    <div className='flex flex-wrap justify-center m-auto w-full'>
      {data.map((item) => (
        <Product product={item} key={item.title} />
      ))}
    </div>
  )
}
