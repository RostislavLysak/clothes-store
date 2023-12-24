import AuthLayout from '@/components/AuthLayout'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AuthLayout>{children}</AuthLayout>
}
