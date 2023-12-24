import ApiError from '@/exceptions/api-error'
import prisma from '@/prisma'
import { compare, hash } from 'bcrypt'

type TUser = {
  email: string
  password: string
}

interface TRegisterUser extends TUser {
  name: string
}

export const login = async ({ email, password }: TUser) => {
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  })

  if (!user) {
    throw ApiError.BadRequest('Invalid email or password')
  }

  const isEqual = await compare(password, user.password)

  if (!isEqual) {
    throw ApiError.BadRequest('Invalid email or password')
  }

  return user
}

export const register = async ({ name, email, password }: TRegisterUser) => {
  const exist = await prisma.user.findFirst({
    where: {
      email,
    },
  })

  if (exist) {
    throw ApiError.AlreadyExist()
  }

  const hashPassword = await hash(password, 7)

  const user = prisma.user.create({
    data: {
      name,
      email,
      password: hashPassword,
    },
  })

  return user
}
