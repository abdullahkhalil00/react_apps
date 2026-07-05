import { useEffect, useState } from "react"



function LoadButton(){
    const [count, setCount] = useState(0)
    const [data, setData] = useState([])
async function LoadProducts() {
    const res = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20
        }`);
    const response = await res.json()
    console.log(response)
    setData((prevData) => [...prevData,...response.products])

    }
useEffect(()=>{
    LoadProducts()
},[count])



    return (
  <div className="min-h-screen bg-gray-100 p-8">
    <h1 className="mb-8 text-center text-4xl font-bold">
      Load More Products
    </h1>

    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data && data.length
        ? data.map((item) => {
            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-xl bg-white shadow-lg transition hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-4">
                  <p className="text-lg font-semibold">{item.title}</p>
                </div>
              </div>
            );
          })
        : null}
    </div>

    <div className="mt-10 flex justify-center">
      <button
        onClick={() => setCount(count + 1)}
        className="rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
      >
        Load More
      </button>
    </div>
  </div>
);
}

export default LoadButton