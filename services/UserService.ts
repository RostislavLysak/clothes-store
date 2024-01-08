import { TUpdateImage, TUpdateProfile, TUser } from '@/plugins/types/requests'
import BaseService from './BaseService'

class UserService extends BaseService {
  async getMe() {
    const user = await this.httpClient.get('/user', {
      headers: await this.context(),
    })

    return user.data as TUser
  }

  async updateProfile(values: TUpdateProfile) {
    const user = await this.httpClient.post('/user/updateprofile', {
      headers: await this.context(),
      ...values,
    })

    return user.data as TUser
  }

  async updateImage(values: TUpdateImage) {
    const user = await this.httpClient.post('/user/updateimage', {
      headers: await this.context(),
      ...values,
    })

    return user.data as TUser
  }
}

export default UserService
