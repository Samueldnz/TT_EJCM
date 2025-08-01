import BackHeader from "../components/BackHeader";
import SocialLoginButtons from "../components/SocialLoginButtons";
import DividerWithText from "../components/DividerWithText";
import InputField from "../components/InputField";
import FormButton from "../components/FormButton";

export default function Register() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-4">
      {/* Container central responsivo */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
        <BackHeader title="Cadastrar-se" />

        <div className="mt-6">
          <SocialLoginButtons />

          <DividerWithText text="ou" />

          <form className="space-y-4 mt-6">
            <InputField label="Nome" placeholder="Digite seu nome completo" />
            <InputField label="CPF" placeholder="Digite seu CPF" />
            <InputField label="Telefone" placeholder="Digite seu telefone" />
            <InputField label="E-mail" placeholder="Digite seu e-mail" type="email" />
            <InputField label="Senha" placeholder="Digite sua senha" type="password" />
            <InputField label="Confirme sua senha" placeholder="Confirme sua senha" type="password" />

            <FormButton text="Cadastrar-se!" />
          </form>
        </div>
      </div>
    </div>
  );
}
