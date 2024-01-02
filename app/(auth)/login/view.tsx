'use client'

import { useState } from 'react'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Button from '@/components/Button/Button'
import InputControl from '@/components/InputControl/InputControl'
import PasswordControl from '@/components/PasswordControl/PasswordControl'
import useForm from '@/hooks/useForm'

const View = () => {
  const router = useRouter()
  const [err, setErr] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { values, errors, submit, register } = useForm(
    {
      email: '',
      password: '',
    },
    {
      email: (v) => {
        if (!v) {
          return 'Email is required'
        }

        if (v.length < 6) {
          return 'Min 6'
        }
        return true
      },
      password: (v) => {
        if (!v) {
          return 'Password is required'
        }
        if (v.length < 6) {
          return 'Min 6'
        }
        return true
      },
    },
  )

  const handleSubmit = async () => {
    setIsLoading(true)
    const user = await signIn('credentials', {
      ...values,
      redirect: false,
    })

    user?.ok ? router.push('/') : setErr('Wrong email or password')
    setIsLoading(false)
  }

  return (
    <>
      {err && <p className='mb-4 text-lg text-start text-red-700'>{err}</p>}
      <form
        className='flex flex-col items-center justify-center space-y-7'
        onSubmit={submit(handleSubmit)}
      >
        <InputControl
          label='Email'
          {...register('email')}
          disabledAnimated
          disabled={isLoading}
          helperText={errors['email']}
        />

        <PasswordControl
          label='Password'
          {...register('password')}
          disabledAnimated
          disabled={isLoading}
          helperText={errors['password']}
        />

        <Button type='submit' loading={isLoading} disabled={isLoading}>
          Login
        </Button>
      </form>
    </>
  )
}

export default View
