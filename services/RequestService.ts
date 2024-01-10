import options from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'

export interface IRequestService {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  body?: {
    [key: string]: string
  }
}

export class RequestService {
  static async call(
    url: string = '/',
    { method = 'GET', body = {} }: IRequestService,
  ) {
    const object: any = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    }

    Object.keys(body).length ? (object.body = JSON.stringify(body)) : null

    const baseURL = 'http://localhost:3001'
    const session: any = await getServerSession(options).catch(() => null)
    const {accessToken, user: {id}} = session

    if(id) {
      object.headers['userid'] = id
    }

    if (accessToken) {
      object.headers['authorization'] = `Bearer ${accessToken}`
    }

    const result = await fetch(baseURL + url, object)

    return result.json()
  }
}
