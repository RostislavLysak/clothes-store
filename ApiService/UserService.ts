import ApiError from '@/exceptions/api-error'
import prisma from '@/prisma'
import TokenService from './TokenService'
import { IUpdateImage, IUpdateProfile } from '@/plugins/types/models'

class UserService {
  private getPayload(accessToken: string | null) {
    const token = accessToken?.split(' ')[1]

    if (!token) {
      throw ApiError.BadRequest('Bad request')
    }

    const payload = TokenService.verifyAccessToken(token)

    if (!payload?.userId) {
      throw ApiError.BadRequest('Bad request')
    }

    return payload
  }

  async getUser(accessToken: string | null) {
    const payload = this.getPayload(accessToken)

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

  async updateProfile({ accessToken, firstName, lastName }: IUpdateProfile) {
    const payload = this.getPayload(accessToken)

    const user = await prisma.user.update({
      where: {
        id: payload.userId,
      },
      data: {
        firstName,
        lastName,
      },
    })

    return user
  }

  async updateImage({ accessToken, img }: IUpdateImage) {
    const payload = this.getPayload(accessToken)

    const user = await prisma.user.update({
      where: {
        id: payload.userId,
      },
      data: {
        img,
      },
    })

    return user
  }
}

export default new UserService()
