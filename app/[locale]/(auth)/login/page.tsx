import { getTranslation } from '@/plugins/ui/i18n'

import View from './view'
import { translationSubKeys } from '@/plugins/ui/i18n/translations'

const Login = async () => {
  const subKeys = translationSubKeys.loginPage
  const td = await getTranslation(subKeys, 'Login.form')

  return <View t={td} />
}

export default Login
