import { TUpdateImage, TUpdateProfile, TUser } from '@/plugins/types/requests'
import axios from 'axios'

class UserService {
  async getMe(token: string) {
    const user = await axios.get(`${process.env.API_URL}/user`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    })

    return user.data as TUser
  }

  async updateProfile(values: TUpdateProfile) {
    const user = await axios.post(`/api/user/updateprofile`, {
      ...values,
    })

    return user.data as TUser
  }

  async updateImage(values: TUpdateImage) {
    const user = await axios.post(`/api/user/updateimage`, {
      ...values,
    })

    return user.data as TUser
  }
}

export default new UserService()
