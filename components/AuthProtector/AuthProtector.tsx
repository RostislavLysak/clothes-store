import { useEffect } from 'react'

import { signOut, useSession } from 'next-auth/react'

const AuthProtector = () => {
  const { data } = useSession()

  useEffect(() => {
    if (data?.error === 'RefreshAccessTokenError') {
      signOut()
    }
  }, [data])

  return null
}

export default AuthProtector
