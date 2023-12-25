import { Product } from '@/components/Product/Product'
import { getProducts } from '@/services/products'

type CatalogProps = {
  params: {
    slug: string
  }
}

const Catalog = async ({ params }: CatalogProps) => {
  const { slug } = params

  const products = await getProducts(slug)
  return (
    <div className='flex flex-wrap justify-center m-auto w-full'>
      {products.map((item) => (
        <Product product={item} key={item.title} />
      ))}
    </div>
  )
}

export default Catalog
