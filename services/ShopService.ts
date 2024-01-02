import axios from 'axios'
import { TCategory, TProduct } from '@/plugins/types/requests'

class ShopService {
  async getProducts() {
    const products = await axios.get(`${process.env.API_URL}/shop/products`)

    return products.data as TProduct[]
  }

  async getByCategoryProducts(category: string) {
    const products = await axios.get(
      `${process.env.API_URL}/shop/products/${category}`,
    )

    return products.data as TProduct[]
  }

  async getUniqueCateries() {
    const categories = await axios.get(`${process.env.API_URL}/shop/categories`)

    return categories.data as TCategory[]
  }
}

export default new ShopService()
