import ShopService from '@/services/ShopService'
import View from './view'

type ProductProps = {
  params: {
    slug: string
  }
}

const ProductPage = async ({ params }: ProductProps) => {
  try {
    const { slug } = params
    const product = await ShopService.getProductBySlug(slug)
    const catalog = await ShopService.getProductsWithoutSlug(product.category, slug)

    return <View product={product} catalog={catalog} />
  } catch (e) {
    return null
  }
}

export default ProductPage
