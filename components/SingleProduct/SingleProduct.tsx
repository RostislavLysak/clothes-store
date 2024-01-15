import { TProduct } from '@/plugins/types/requests'
import Button from '../Button/Button'
import { capitalize, capitalizeAll } from '@/utils'

interface ProductProps {
  product: TProduct
}

const SingleProduct = ({ product }: ProductProps) => {
  return (
    <div className='flex flex-col md:flex-row justify-around w-11/12 m-auto h-fit'>
      <div className='flex justify-center items-center'>
        <img
          src={product.img}
          alt={product.category}
          className='w-2/3 rounded-md'
        />
      </div>
      <div className='flex flex-col justify-between gap-8 md:gap-0 m-auto md:m-0 w-2/3 md:w-2/5'>
        <div className='flex flex-col justify-center gap-4 space-x-2'>
          <p className='text-lg md:text-2xl mt-4 md:mt-0 font-bold text-center'>
            {product.title}
          </p>
          <p className=''>{product.description}</p>
          <p className='font-semibold'>
            Category: {capitalize(product.category)}
          </p>
          <p className='font-semibold'>Brand: {capitalizeAll(product.brand)}</p>
        </div>
        <Button bold='font-bold'>Buy {product.price} $</Button>
      </div>
    </div>
  )
}

export default SingleProduct
