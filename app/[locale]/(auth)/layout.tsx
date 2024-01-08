import UnauthorizedhLayout from '@/components/UnauthorizedLayout'
import { getTranslation } from '@/plugins/ui/i18n'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const data = ['signIn', 'signUp'] as const
  const t = await getTranslation(data, 'UnAuthHeader')

  return <UnauthorizedhLayout t={t}>{children}</UnauthorizedhLayout>
}
