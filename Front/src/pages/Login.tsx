import { useState } from "react";
import BackHeader from "../components/BackHeader";
import FormButton from "../components/FormButton";
import DividerWithText from "../components/DividerWithText";
import SocialLoginButtons from "../components/SocialLoginButtons";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/imageLogin.png";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-4">
      {/* Container central responsivo */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
        <BackHeader title="Entrar" />

        {/* Logo centralizada */}
        <div className="flex justify-center mt-6">
          <img src={logo} alt="Logo" className="w-32 h-32 object-contain" />
        </div>

        {/* Formulário */}
        <form className="space-y-4 mt-6">
          {/* Campo e-mail */}
          <div className="relative">
            <Mail className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="w-full pl-10 border-b border-gray-300 bg-transparent py-2 placeholder-gray-400 focus:outline-none focus:border-black"
            />
          </div>

          {/* Campo senha */}
          <div className="relative">
            <Lock className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              className="w-full pl-10 pr-10 border-b border-gray-300 bg-transparent py-2 placeholder-gray-400 focus:outline-none focus:border-black"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Link esqueceu senha */}
          <div className="text-right text-sm text-gray-600">
            <a href="#" className="hover:underline">Esqueci minha senha</a>
          </div>

          <FormButton text="Entrar" />
        </form>

        <DividerWithText text="ou" />

        <SocialLoginButtons />

        <div className="text-center mt-4 text-sm text-blue-600">
          <Link to="/register" className="hover:underline">
            Não possui cadastro? Cadastre-se!
          </Link>
        </div>
      </div>
    </div>
  );
}
