import Detail from "../../../../ui/products/detail-product"

export default function Page({params}){
  const id = params.id
    return (
      <Detail id={id} />
    )
}