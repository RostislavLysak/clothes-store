import { createSharedPathnamesNavigation } from 'next-intl/navigation'
import config from './config'
const { locales } = config

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales })
