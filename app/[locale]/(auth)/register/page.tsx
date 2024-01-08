import { getTranslation } from '@/plugins/ui/i18n'

import View from './view'

const Register = async () => {
  const data = ['firstName', 'lastName', 'email', 'password', 'button'] as const
  const t = await getTranslation(data, 'Register.form')

  return <View t={t} />
}

export default Register
