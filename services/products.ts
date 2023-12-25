import prisma from "@/prisma"

export const getUniqueCateries = async () => {
    const categories = await prisma.product.findMany({
        distinct: ['category'],
        select: {
          category: true,
        },
      })

      return categories
}

export const getProducts = async (category?: string) => {
    const products = await prisma.product.findMany({
        where: {
          ...(category ? { category } : {}),
        },
      })

      return products
}