'use client'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import Button from '@/components/Button/Button'
import FormControl, { TField } from '@/components/FormControl/FormControl'
import ImageChanger from '@/components/ImageChanger/ImageChanger'
import useForm from '@/hooks/useForm'
import { TUser } from '@/plugins/types/requests'
import { validate } from '@/validation'
import { TProfilePage } from '@/plugins/ui/i18n/translations'
import ClientUserService from '@/clientServices/ClientUserService'

interface ViewProps {
  t: TProfilePage
  data: TUser
}

const View = ({ t, data }: ViewProps) => {
  const { refresh } = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const { img, lastName, firstName } = data
  const { values, submit, errors, register } = useForm(
    { lastName, firstName },
    {
      lastName: validate('lastName'),
      firstName: validate('firstName'),
    },
  )

  const fields: TField[] = [
    {
      label: t.firstName,
      ...register('firstName'),
      disabled: isLoading,
      disabledAnimated: true,
      helperText: errors['firstName'],
    },
    {
      label: t.lastName,
      ...register('lastName'),
      disabled: isLoading,
      disabledAnimated: true,
      helperText: errors['lastName'],
    },
  ]

  const handleSubmit = async () => {
    setIsLoading(true)

    await ClientUserService.updateProfile(values)

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
            {t.button}
          </Button>
        </FormControl>
      </div>
    </div>
  )
}

export default View
