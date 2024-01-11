import { TUser } from '@/plugins/types/requests'
import { IRequestService, RequestService } from './RequestService'

class UserService {
  async getMe() {
    const user = await RequestService.call('/user', {})

    return user as TUser
  }

  async updateProfile(values: IRequestService) {
    const user = await RequestService.call('/user/updateProfile', {
      ...values,
    })

    return user as TUser
  }

  async updateImage(values: IRequestService) {
    const user = await RequestService.call('/user/updateImage', {
      ...values,
    })

    return user as TUser
  }
}

export default new UserService()
