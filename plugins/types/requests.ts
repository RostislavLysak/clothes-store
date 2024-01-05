export interface TProduct {
  category: string
  description: string
  id: string
  img: string
  title: string
}

export interface TCategory extends Pick<TProduct, 'category'> {}

export interface TUser {
  id: string
  email: string
  firstName: string
  lastName: string
  password: string
  img: string
}

export interface TUpdateProfile extends Pick<TUser, 'firstName' | 'lastName'> {}

export interface TUpdateImage extends Pick<TUser, 'img'> {}
