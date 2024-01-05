'use client'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import Button from '@/components/Button/Button'
import FormControl, { TField } from '@/components/FormControl/FormControl'
import ImageChanger from '@/components/ImageChanger/ImageChanger'
import useForm from '@/hooks/useForm'
import { TUser } from '@/plugins/types/requests'
import * as api from '@/services/client'
import { validate } from '@/validation'
import { useTranslations } from 'next-intl'

interface ViewProps {
  data: TUser
}

const View = ({ data }: ViewProps) => {
  const t = useTranslations('Profile.form')
  const { refresh } = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const { img, lastName, firstName } = data
  const { values, submit, errors, register } = useForm(
    { lastName, firstName },
    {
      firstName: validate('firstName'),
      lastName: validate('lastName'),
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
  ]

  const handleSubmit = async () => {
    setIsLoading(true)
    await api.user.updateProfile({
      ...values,
    })
    refresh()
    setIsLoading(false)
  }
  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col p-8 sm:p-12 border rounded-md'>
        <ImageChanger img={img} />

        <FormControl
          fields={fields}
          className='flex flex-col justify-center items-center space-y-7'
          onSubmit={submit(handleSubmit)}
        >
          <Button type='submit' loading={isLoading} disabled={isLoading}>
            {t('button')}
          </Button>
        </FormControl>
      </div>
    </div>
  )
}

export default View
