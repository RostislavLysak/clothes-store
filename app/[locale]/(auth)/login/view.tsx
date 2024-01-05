'use client'

import { useState } from 'react'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Button from '@/components/Button/Button'
import FormControl, { TField } from '@/components/FormControl/FormControl'
import useForm from '@/hooks/useForm'
import { validate } from '@/validation'
import { useTranslations } from 'next-intl'

const View = () => {
  const t = useTranslations('Login.form')
  const router = useRouter()
  const [err, setErr] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { values, errors, submit, register } = useForm(
    {
      email: '',
      password: '',
    },
    {
      email: validate('email'),
      password: validate('password'),
    },
  )

  const fields: TField[] = [
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
