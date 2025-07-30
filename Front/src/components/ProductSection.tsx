import { Heart } from "lucide-react";

interface Product {
  name: string;
  price: string;
  img: string;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
}

export default function ProductSection({ title, products }: ProductSectionProps) {
  return (
    <section className="bg-white mt-4 rounded-xl shadow">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4 text-center">{title}</h2>
        <div className="grid grid-cols-2 gap-4 lg:flex lg:flex-wrap lg:justify-center">
          {products.map((p, idx) => (
            <div
              key={idx}
              className="border rounded-xl p-2 shadow-sm hover:shadow-md transition w-full max-w-[200px]"
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-28 md:h-40 object-cover rounded-md"
              />
              <div className="flex justify-between items-center mt-2">
                <div>
                  <h3 className="text-sm md:text-base">{p.name}</h3>
                  <span className="text-sm font-bold">{p.price}</span>
                </div>
                <Heart size={20} className="text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-gray-300" />
    </section>
  );
}
