import { redirect } from 'next/navigation'

import linking from '@/routes/linking'

const Catalog = () => {
  redirect(linking.hoodie.index)
}

export default Catalog
