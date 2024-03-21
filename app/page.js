import Image from "next/image";
import Products from "./ui/products/page";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="mx-auto max-w-screen-lg">
        <div className="relative h-56 rounded-b-lg bg-cover bg-center bg-no-repeat shadow-lg" style={{ backgroundImage: "url(/cover.jpg)" }}>
          <div className="px-4 pt-8 pb-10 mt-20">
            <div className="absolute inset-x-0 -bottom-10 mx-auto w-36 rounded-full border-8 border-white shadow-lg">
              <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
              <Image className="mx-auto h-auto w-full rounded-full" src="/prof.webp" width={100} height={100} alt="account" />
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-center space-y-4 py-8 px-4 sm:flex-row sm:space-y-0 md:justify-between lg:px-0">
          <div className="max-w-lg">
            <h1 className="text-2xl font-bold text-gray-800">Beep Essences</h1>
            <p className="mt-2 text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, alias. Quas necessitatibus exercitationem praesentium.</p>
          </div>
          <div className="">
            <button className="flex whitespace-nowrap rounded-lg bg-pink-600 px-6 py-2 font-bold text-white transition hover:translate-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 inline h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokewinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Chat with us
            </button>
            <p className="mt-4 flex items-center whitespace-nowrap text-gray-500 sm:justify-end">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +257 61 291 137
            </p>
          </div>
        </div>
        <div className="text-3xl uppercase font-semibold">Trending products</div>
          <Products />
      </div>
    </main>
  );
}
