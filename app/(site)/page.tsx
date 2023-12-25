import { Product } from '@/components/Product/Product'
import { getProducts } from '@/services/products'

export default async function Home() {
  const products = await getProducts()
  return (
    <div className='flex flex-wrap justify-center m-auto w-full'>
      {products.map((item) => {
        return <Product key={item.id} product={item} />
      })}
    </div>
  )
}
