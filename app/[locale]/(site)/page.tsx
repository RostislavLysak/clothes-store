import { redirect } from 'next/navigation'

import { Product } from '@/components/Product/Product'
import Routes from '@/routes'
// import * as api from '@/services/server'
import ShopService from '@/services/ShopService'

export default async function Home() {
  try {
    // const products = await api.shop.getProducts()
    const products = await ShopService.getProducts()

    return (
      <div className='flex flex-wrap justify-center m-auto w-full'>
        {products.map((item) => {
          return <Product key={item.id} product={item} />
        })}
      </div>
    )
  } catch (error) {
    return redirect(`/${Routes.login}`)
  }
}
