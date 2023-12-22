'use client'

import { useState } from 'react'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

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

    user?.ok ? router.push('/') : setErr('User not found')
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
        <input
          type='text'
          name='email'
          value={state.email}
          className='p-2 m-2 w-64 text-black rounded-md'
          onChange={handleChange}
        />
        <input
          type='text'
          name='password'
          value={state.password}
          className='p-2 m-2 w-64 text-black rounded-md'
          onChange={handleChange}
        />
        <button type='submit' className='px-2 py-1 mt-2 border rounded-md'>
          Sign In
        </button>
      </form>
    </>
  )
}

export default View
