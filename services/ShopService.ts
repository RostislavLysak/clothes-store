import { TCategory, TProduct } from '@/plugins/types/requests'
import { RequestService } from './RequestService'

class ShopService {
  async getProducts() {
    const products = await RequestService.call('/products', {})

    return products as TProduct[]
  }

  async getByCategoryProducts(category: string) {
    const products = await RequestService.call(`/products/${category}`, {})

    return products as TProduct[]
  }

  async getUniqueCateries() {
    const categories = await RequestService.call('/products/categories', {})

    return categories as TCategory[]
  }
}

export default new ShopService()
