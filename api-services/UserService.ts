import ApiError from '@/exceptions/api-error'
import prisma from '@/prisma'
import TokenService from './TokenService'
import { IUpdateImage, IUpdateProfile } from '@/plugins/types/models'

class UserService {
  async getUser(accessToken: string | null) {
    const token = accessToken?.split(' ')[1]

    if (!token) {
      throw ApiError.BadRequest('Bad request')
    }

    const payload = TokenService.verifyAccessToken(token)

    if (!payload?.userId) {
      throw ApiError.BadRequest('Bad request')
    }

    const user = await prisma.user.findUnique({
      where: {
        id: payload.userId,
      },
    })

    if (!user) {
      throw ApiError.NotFound('User not found')
    }

    return user
  }

  async updateProfile({ email, firstName, lastName }: IUpdateProfile) {
    const user = await prisma.user.update({
      where: {
        email,
      },
      data: {
        firstName,
        lastName,
      },
    })

    return user
  }

  async updateImage({ email, img }: IUpdateImage) {
    const user = await prisma.user.update({
      where: {
        email,
      },
      data: {
        img,
      },
    })

    return user
  }
}

export default new UserService()
