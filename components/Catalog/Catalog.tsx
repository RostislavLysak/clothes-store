import { TProduct } from '@/plugins/types/requests'
import { Product } from '../Product/Product'

type CatalogProps = {
  catalog: TProduct[]
}

const Catalog = ({ catalog }: CatalogProps) => {
  return (
    <div className='mt-12 border-t'>
      <div id='catalog' className='flex overflow-x-scroll gap-4 py-4 '>
        {catalog.map((item) => (
          <Product key={item.slug} product={item} size='sm' />
        ))}
      </div>
    </div>
  )
}

export default Catalog
