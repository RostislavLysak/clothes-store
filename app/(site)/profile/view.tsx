'use client'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import Button from '@/components/Button/Button'
import ImageChanger from '@/components/ImageChanger/ImageChanger'
import InputControl from '@/components/InputControl/InputControl'
import useForm from '@/hooks/useForm'
import { TUser } from '@/plugins/types/requests'
import UserService from '@/services/UserService'

interface ViewProps {
  data: TUser
}

const View = ({ data }: ViewProps) => {
  const { refresh } = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const { img, email, lastName, firstName } = data
  const { values, submit, errors, register } = useForm(
    { email, lastName, firstName },
    {
      lastName: (v: string) => {
        if (v.length < 3) {
          return 'Min 3'
        }

        return true
      },
      firstName: (v: string) => {
        if (v.length < 3) {
          return 'Min 3'
        }

        return true
      },
    },
  )

  const handleSubmit = async () => {
    setIsLoading(true)
    await UserService.updateProfile({
      ...values,
    })
    refresh()
    setIsLoading(false)
  }
  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col p-8 sm:p-12 border rounded-md'>
        <ImageChanger data={{ img, email }} />

        <form
          className='flex flex-col justify-center items-center space-y-7'
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

          <Button type='submit' loading={isLoading} disabled={isLoading}>
            Change
          </Button>
        </form>
      </div>
    </div>
  )
}

export default View
