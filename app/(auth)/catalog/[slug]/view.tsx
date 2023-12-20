import Product from './components/Product'
import { TProduct } from './page'

interface ViewProps {
  category: string
  data: TProduct[]
}

export default function View({ data, category }: ViewProps) {
  return (
    <div className='flex flex-wrap justify-center m-auto w-full'>
      {data.map((item) => (
        <Product product={item} key={item.title} category={category} />
      ))}
    </div>
  )
}
