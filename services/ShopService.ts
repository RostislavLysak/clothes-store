import { TCategory, TProduct } from '@/plugins/types/requests'
import BaseService from './BaseService'
import { RequestService } from './RequestService'

// class ShopService extends BaseService {
//   async getProducts() {
//     const products = await this.httpClient.get('/shop/products')

//     return products.data as TProduct[]
//   }

//   async getByCategoryProducts(category: string) {
//     const products = await this.httpClient.get(`/shop/products/${category}`)

//     return products.data as TProduct[]
//   }

//   async getUniqueCateries() {
//     const categories = await this.httpClient.get('/shop/categories')

//     return categories.data as TCategory[]
//   }
// }

// export default ShopService

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
