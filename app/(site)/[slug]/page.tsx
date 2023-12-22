import { capitalize } from '@/utils'

import { products } from '../page'
import View from './view'

interface CatalogProps {
  params: {
    slug: string
  }
}

const Catalog = ({ params }: CatalogProps) => {
  const { slug } = params
  return <View data={products[slug]} category={capitalize(slug)} />
}

export default Catalog
