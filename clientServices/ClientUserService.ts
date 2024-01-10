import { TUpdateProfile, TUser } from '@/plugins/types/requests'
import axios from 'axios'

class ClientUserService {
  async updateProfile(values: TUpdateProfile) {
    const user = await axios.post('/api/user/updateprofile', values)

    return user.data as TUser
  }

  async updateImage(values: string) {
    const user = await axios.post('/api/user/updateimage', {
      img: values,
    })

    return user.data as TUser
  }
}

export default new ClientUserService()
