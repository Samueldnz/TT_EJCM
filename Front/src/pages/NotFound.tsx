import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import errorImg from "../assets/404.png";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-6 py-10 text-center">
      <h1 className="text-3xl font-bold mb-6">Opsss...</h1>

      <img src={errorImg} alt="404 Error" className="w-64 h-auto mb-6" />

      <p className="text-gray-700 text-sm mb-10">
        Infelizmente, parece que não encontramos o produto desejado.
      </p>

      <button
        onClick={() => navigate(-1)}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition"
      >
        <ArrowLeft className="text-gray-700" size={20} />
      </button>
    </div>
  );
}
