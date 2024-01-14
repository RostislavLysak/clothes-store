import ShopService from "@/services/ShopService"

type ProductProps = {
  params: {
    slug: string
  }
}

const ProductPage = async ({ params }: ProductProps) => {
  try {
    const { slug } = params

    const product = await ShopService.getProductBySlug(slug)

    console.log(product)
    return <div>{slug}</div>
  } catch (e) {
    return null
  }
}

export default ProductPage
