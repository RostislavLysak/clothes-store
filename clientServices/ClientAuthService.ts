import { IRegister } from '@/plugins/types/models'
import { TUser } from '@/plugins/types/requests'
import Routes from '@/routes'
import axios from 'axios'

class ClientAuthService {
  async register(values: IRegister) {
    const user = await axios.post(`/api/${Routes.register}`, values)

    return user.data as TUser
  }
}

export default new ClientAuthService()
