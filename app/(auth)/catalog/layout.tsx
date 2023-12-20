import CategoriesList from './components/CategoriesList'

const categories = ['hoodie', 'shoes', 'outerwear']

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex flex-col lg:flex-row'>
      <CategoriesList categories={categories} />
      <div>{children}</div>
    </div>
  )
}
