'use client'

import { useState } from 'react'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import axios from 'axios'

import Button from '@/components/Button/Button'
import InputControl from '@/components/InputControl/InputControl'
import PasswordControl from '@/components/PasswordControl/PasswordControl'
import useForm from '@/hooks/useForm'
import Routes from '@/routes'

const View = () => {
  const router = useRouter()
  const [err, setErr] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { values, errors, submit, register } = useForm(
    {
      email: '',
      lastName: '',
      password: '',
      firstName: '',
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
        if (v.length > 12) {
          return 'Max 12'
        }
        return true
      },
      lastName: (v) => {
        if (!v) {
          return 'Last Name is required'
        }
        if (v.length < 3) {
          return 'Min 3'
        }
        if (v.length > 12) {
          return 'Max 12'
        }
        return true
      },
      firstName: (v) => {
        if (!v) {
          return 'First Name is required'
        }
        if (v.length < 3) {
          return 'Min 3'
        }
        if (v.length > 12) {
          return 'Max 12'
        }
        return true
      },
    },
  )

  const handleSubmit = async () => {
    try {
      setIsLoading(true)
      await axios.post(`/api/${Routes.register}`, { ...values })

      await signIn('credentials', {
        redirect: false,
        email: values.email,
        password: values.password,
      })
      router.push('/')
      setIsLoading(false)
    } catch (error: any) {
      setErr(error.response.data.message)
      return null
    }
  }

  return (
    <>
      {err && <p className='mb-2 text-lg text-center text-red-700'>{err}</p>}

      <form
        className='flex flex-col items-center justify-center space-y-7'
        onSubmit={submit(handleSubmit)}
      >
        <InputControl
          label='First Name'
          {...register('firstName')}
          disabledAnimated
          disabled={isLoading}
          helperText={errors['firstName']}
        />
        <InputControl
          label='Last Name'
          {...register('lastName')}
          disabledAnimated
          disabled={isLoading}
          helperText={errors['lastName']}
        />
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
          Register
        </Button>
      </form>
    </>
  )
}

export default View
