import { Product } from '@/components/Product/Product'
import * as api from '@/services/server'

type CatalogProps = {
  params: {
    slug: string
  }
}

const Catalog = async ({ params }: CatalogProps) => {
  const { slug } = params

  try {
    const products = await api.shop.getByCategoryProducts(slug)

    return (
      <div className='flex flex-wrap justify-center m-auto w-full'>
        {products.map((item) => (
          <Product key={item.title} product={item} />
        ))}
      </div>
    )
  } catch (error) {
    return null
  }
}

export default Catalog
