import UnauthorizedhLayout from '@/components/UnauthorizedLayout'
import { getTranslation } from '@/plugins/ui/i18n'
import { translationSubKeys } from '@/plugins/ui/i18n/translations'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const subKeys = translationSubKeys.unAuthHeader
  const t = await getTranslation(subKeys, 'UnAuthHeader')

  return <UnauthorizedhLayout t={t}>{children}</UnauthorizedhLayout>
}
