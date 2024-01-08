import { getTranslation } from '@/plugins/ui/i18n'

import View from './view'
import { translationSubKeys } from '@/plugins/ui/i18n/translations'

const Register = async () => {
  const subKeys = translationSubKeys.registerPage
  const t = await getTranslation(subKeys, 'Register.form')

  return <View t={t} />
}

export default Register
