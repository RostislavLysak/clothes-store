'use client'

import { useState } from 'react'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import axios from 'axios'

import Button from '@/components/Button/Button'
import Input from '@/components/Input/Input'
import Routes from '@/routes'

const View = () => {
  const router = useRouter()
  const [err, setErr] = useState('')
  const [state, setState] = useState({
    email: '',
    lastName: '',
    password: '',
    firstName: '',
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const body = {
      email: state.email,
      password: state.password,
      name: `${state.firstName} ${state.lastName}`,
    }

    try {
      await axios.post(`/api/${Routes.register}`, body)

      await signIn('credentials', {
        redirect: false,
        email: state.email,
        password: state.password,
      })
      router.push('/')
    } catch (error: any) {
      setErr(error.response.data.message)
      return null
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [`${e.target.name}`]: e.target.value })
  }
  return (
    <>
      {err && <p className='mb-2 text-lg text-center text-red-700'>{err}</p>}
      <form
        className='flex flex-col items-center justify-center'
        onSubmit={handleSubmit}
      >
        <Input
          name='firstName'
          value={state.firstName}
          placeholder='firstname'
          onChange={handleChange}
        />
        <Input
          name='lastName'
          value={state.lastName}
          placeholder='lastname'
          onChange={handleChange}
        />
        <Input
          type='email'
          name='email'
          value={state.email}
          placeholder='email'
          onChange={handleChange}
        />
        <Input
          type='password'
          name='password'
          value={state.password}
          placeholder='password'
          onChange={handleChange}
        />

        <Button type='submit'>Submit</Button>
      </form>
    </>
  )
}

export default View
