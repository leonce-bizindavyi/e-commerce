import Products from "../../ui/products/page";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-4">
            <div className="text-3xl uppercase font-semibold">All products</div>
            <div className="mx-auto max-w-screen-lg">
                <Products/>
            </div>
        </main>

    )
}