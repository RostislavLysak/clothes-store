import AuthLayout from '@/components/AuthLayout'
import { getUniqueCateries } from '@/services/products'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const categories = await getUniqueCateries()
  return <AuthLayout categories={categories}>{children}</AuthLayout>
}
