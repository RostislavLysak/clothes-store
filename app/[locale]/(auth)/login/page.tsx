import { getTranslation } from '@/plugins/ui/i18n'

import View from './view'

const Login = async () => {
  const data = ['email', 'password', 'button'] as const
  const td = await getTranslation(data, 'Login.form')

  return <View t={td} />
}

export default Login
