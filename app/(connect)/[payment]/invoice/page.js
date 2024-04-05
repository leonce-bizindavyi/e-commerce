import Invoice from "@/app/ui/checkout/invoice";

export default function Page({params}){
    return(
        <Invoice invoice={params.payment} />
    )
}