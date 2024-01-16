import Catalog from "@/components/Catalog/Catalog"
import SingleProduct from "@/components/SingleProduct/SingleProduct"
import { TProduct } from "@/plugins/types/requests"

type ViewProps = {
    product: TProduct
    catalog: TProduct[]
}


const View = ({product, catalog}: ViewProps) => {
  return (
    <div className="flex flex-col pt-12">
        <SingleProduct product={product}/>
        <Catalog catalog={catalog}/>
    </div>
  )
}

export default View