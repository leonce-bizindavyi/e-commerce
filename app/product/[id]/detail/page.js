import Image from "next/image";
import { detailProduct } from "@/app/libs/products"; 
import Detail from "@/app/ui/products/detail-product";

export default function Page({params}){
  const id = params.id
    return (
      <Detail id={id} />
    )
}