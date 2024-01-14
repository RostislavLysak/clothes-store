export interface TProduct {
  category: string
  description: string
  id: string
  img: string
  title: string
  slug: string
  brand: string
}

export interface TUser {
  id: string
  email: string
  firstName: string
  lastName: string
  password: string
  img: string
}

export interface TUpdateProfile extends Pick<TUser, 'firstName' | 'lastName'> {}
