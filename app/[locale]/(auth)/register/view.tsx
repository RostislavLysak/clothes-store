'use client'

import { useState } from 'react'

import { signIn } from 'next-auth/react'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'

import axios from 'axios'

import Button from '@/components/Button/Button'
import FormControl, { TField } from '@/components/FormControl/FormControl'
import useForm from '@/hooks/useForm'
import Routes from '@/routes'
import { validate } from '@/validation'

const View = () => {
  const t = useTranslations('Register.form')
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
      email: validate('email'),
      lastName: validate('lastName'),
      password: validate('password'),
      firstName: validate('firstName'),
    },
  )

  const fields: TField[] = [
    {
      label: t('firstName.label'),
      ...register('firstName'),
      disabled: isLoading,
      disabledAnimated: true,
      helperText: errors['firstName'],
    },
    {
      label: t('lastName.label'),
      ...register('lastName'),
      disabled: isLoading,
      disabledAnimated: true,
      helperText: errors['lastName'],
    },
    {
      label: t('email.label'),
      ...register('email'),
      disabled: isLoading,
      disabledAnimated: true,
      helperText: errors['email'],
    },
    {
      label: t('password.label'),
      ...register('password'),
      type: 'password',
      disabled: isLoading,
      disabledAnimated: true,
      helperText: errors['password'],
    },
  ]

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

      <FormControl
        fields={fields}
        className='flex flex-col items-center justify-center space-y-7'
        onSubmit={submit(handleSubmit)}
      >
        <Button type='submit' loading={isLoading} disabled={isLoading}>
          {t('button')}
        </Button>
      </FormControl>
    </>
  )
}

export default View
