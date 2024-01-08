import axios from 'axios'

export type Options = {
  headers?: Record<string, string | null>
}

const httpClient = axios.create({
  withCredentials: true,
  baseURL: process.env.API_URL ?? '/api',
})

type Context = () => Promise<Options['headers']>

class BaseService {
  httpClient: typeof httpClient
  context: Context

  constructor(context?: Context) {
    this.httpClient = httpClient
    this.context = context ?? (async () => ({}))
  }
}

export default BaseService
