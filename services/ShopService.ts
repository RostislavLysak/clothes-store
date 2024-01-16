import { TProduct } from '@/plugins/types/requests'
import { RequestService } from './RequestService'

class ShopService {
  async getProducts() {
    const products = await RequestService.call('/products', {})

    return products as TProduct[]
  }

  async getProductBySlug(slug: string) {
    const product = await RequestService.call(`/products/product/${slug}`, {})

    return product as TProduct
  }
  async getProductsWithoutSlug(type: string, slug: string) {
    const product = await RequestService.call(`/products/${type}/${slug}`, {})

    return product as TProduct[]
  }

  async getProductsByType(type: string) {
    const products = await RequestService.call(`/products/${type}`, {})

    return products as TProduct[]
  }

  async getUniqueCategories() {
    const categories = await RequestService.call('/products/categories', {})

    return categories as string[]
  }

  async getUniqueBrands() {
    const brands = await RequestService.call('/products/brands', {})

    return brands as string[]
  }
}

export default new ShopService()
