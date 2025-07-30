import { useState } from "react";
import { Menu, ShoppingCart, Heart } from "lucide-react";

import BannerCarousel from "../components/BannerCarousel";
import ProductSection from "../components/ProductSection";
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import bannerImg from "../assets/banner.png";
import capa from "../assets/capa.png";
import celular from "../assets/celular.png";
import monitor from "../assets/monitor.png";
import mousepad from "../assets/mousepad.png";
import notebook from "../assets/notebook.png";
import smartphone from "../assets/smartphone.png";
import smartwatch from "../assets/smartwatch.png";
import smartTV from "../assets/smartTV.png";
import tablet from "../assets/tablet.png";
import teclado from "../assets/teclado.png";



export default function Home() {
  const [categories] = useState([
    { name: "Celulares", img: celular },
    { name: "Notebooks", img: notebook },
    { name: "Tablets", img: tablet },
    { name: "Periféricos", img: teclado },
    { name: "TVs", img: smartTV },
    { name: "Acessórios", img: mousepad },
    { name: "PCs", img: monitor },
    { name: "Smartwatches", img: smartwatch },
  ]);

  const [products] = useState({
    recomendados: [
      { name: "Celular", price: "R$800,00", img: celular },
      { name: "Capa protetora", price: "R$20,00", img: capa },
    ],
    destaque: [
      { name: "Smart TV", price: "R$1400,00", img: smartTV },
      { name: "Monitor", price: "R$750,00", img: monitor },
    ],
    maisVendidos: [
      { name: "Smartphone", price: "R$3.200,00", img: smartphone },
      { name: "Smartwatch", price: "R$900,00", img: smartwatch },
    ],
  });

    return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Topbar */}
      <header className="bg-black text-white flex items-center justify-between px-4 py-3">
        <Menu size={24} />
        <ShoppingCart size={24} />
      </header>

      <div className="max-w-5xl w-full mx-auto px-4">
        {/* Banner */}
        <div className="flex items-center flex-col bg-white p-4 mt-4 rounded-xl">
            <h1 className="flex items-center gap-2 text-2xl font-bold text-orange-500 mb-3">
                <img src="/src/assets/imageLogin.png" alt="Logo" className="w-6 h-6" />
                Bem-vindo à Elektro!
            </h1>
            <img src={bannerImg} alt="Banner" className="rounded-xl w-full h-40 md:h-64 lg:h-80 object-cover" />
        </div>

        {/* Categorias */}
        <section className="bg-white mt-4 rounded-xl shadow">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Categorias Elektro</h2>
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4">
              {categories.map((cat, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <img src={`${cat.img}`} alt={cat.name} className="w-14 h-14 md:w-20 md:h-20 rounded-full object-cover" />
                  <span className="text-xs md:text-sm mt-1">{cat.name}</span>
                </div>
              ))}
            </div>
          </div>
          <hr className="border-gray-300" />
        </section>

        <ProductSection title="Para você" products={products.recomendados} />
        <ProductSection title="Produtos em destaque" products={products.destaque} />
        <ProductSection title="Mais vendidos" products={products.maisVendidos} />

      </div>

      {/* Rodapé social */}
      <footer className="bg-orange-400 text-white py-6 flex flex-col items-center mt-auto">
        <p className="mb-3 font-medium text-center">Siga-nos nas redes sociais!</p>
        <div className="flex gap-6 text-2xl">
          <FaFacebookF />
          <FaInstagram />
          <FaTiktok />
          <FaTwitter />
          <FaLinkedinIn />
        </div>
      </footer>
    </div>
  );
}