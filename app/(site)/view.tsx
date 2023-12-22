import { Product } from '@/components/Product/Product'
import { capitalize } from '@/utils'

import { TProductList } from './page'

type ViewProps = {
  data: TProductList
}

const View = ({ data }: ViewProps) => {
  return (
    <div className='flex flex-wrap justify-center m-auto w-full'>
      {Object.keys(data).map((category: string) => {
        return data[category].map((item) => (
          <Product
            product={item}
            key={item.title}
            category={capitalize(category)}
          />
        ))
      })}
    </div>
  )
}

export default View
