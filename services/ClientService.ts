import { IRegister } from '@/plugins/types/models'
import { TUpdateImage, TUpdateProfile, TUser } from '@/plugins/types/requests'
import Routes from '@/routes'
import axios from 'axios'

class ClientService {
  async register(values: IRegister) {
    const user = await axios.post(`/api/${Routes.register}`, values)

    return user.data as TUser
  }

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

export default new ClientService()
