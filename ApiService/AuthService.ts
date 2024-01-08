import ApiError from '@/exceptions/api-error'
import prisma from '@/prisma'
import { compare, hash } from 'bcrypt'
import TokenService from './TokenService'
import { ILogin, IRefreshToken, IRegister } from '@/plugins/types/models'

class AuthService {
  async login({ email, password }: ILogin) {
    const user = await prisma.user.findUnique({
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

    const tokens = TokenService.generateTokens({
      userId: user.id,
    })

    return {
      tokens,
      id: user.id,
    }
  }

  async register({ firstName, lastName, email, password }: IRegister) {
    const exist = await prisma.user.findFirst({
      where: {
        email,
      },
    })

    if (exist) {
      throw ApiError.AlreadyExist()
    }

    const hashPassword = await hash(password, 7)

    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashPassword,
        img: '',
      },
    })

    const tokens = TokenService.generateTokens({
      userId: user.id,
    })

    return tokens
  }

  async refreshToken(value: IRefreshToken) {
    const payload = TokenService.verifyRefreshToken(value.token)

    if (!payload?.userId) {
      throw ApiError.UnauthorizedError()
    }

    const { userId } = payload

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })

    if (!user) {
      throw ApiError.NotFound('User not found')
    }

    const token = TokenService.generateTokens({ userId })

    return token
  }
}

export default new AuthService()
