import UnauthorizedhLayout from '@/components/UnauthorizedLayout'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <UnauthorizedhLayout>{children}</UnauthorizedhLayout>
}
