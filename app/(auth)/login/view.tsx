'use client'

import { useState } from 'react'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Button from '@/components/Button/Button'
import Input from '@/components/Input/Input'

const View = () => {
  const router = useRouter()
  const [err, setErr] = useState('')
  const [state, setState] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const user = await signIn('credentials', {
      ...state,
      redirect: false,
    })

    user?.ok ? router.push('/') : setErr('Wrong email or password')
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
