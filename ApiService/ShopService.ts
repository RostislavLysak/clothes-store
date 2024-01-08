import prisma from '@/prisma'

class ShopService {
  async getProducts() {
    const products = await prisma.product.findMany()

    return products
  }

  async getByCategoryProducts(slug: string) {
    const products = await prisma.product.findMany({
      where: {
        category: slug,
      },
    })

    return products
  }

  async getUniqueCategories() {
    const categories = await prisma.product.findMany({
      distinct: ['category'],
      select: {
        category: true,
      },
    })

    return categories
  }
}

export default new ShopService()
