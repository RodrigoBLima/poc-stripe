import { stripe } from "@/libs/stripe";
import Link from "next/link";

export default async function Home() {
  const products = await stripe.products.list({ limit: 10 });

  return (
    <div id="home" className="bg-[#ffffff] p-6 min-h-screen">
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.data.map((product) => (
          <li
            key={product.id}
            className="bg-[#ffffff] rounded-lg shadow-md border border-gray-200 p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-[#404951] font-bold text-2xl mb-3">
                {product.name}
              </h2>
              <p className="text-[#404951] text-base mb-4">
                {product.description}
              </p>
            </div>
            <Link
              href={`checkout?id=${product.id}`}
              className="bg-[#e583a2] text-white text-center px-4 py-2 rounded hover:bg-opacity-90 transition-colors"
            >
              Ir para o checkout
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
