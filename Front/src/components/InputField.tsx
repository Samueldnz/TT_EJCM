interface InputFieldProps {
  label: string;
  placeholder: string;
  type?: string;
}

export default function InputField({ label, placeholder, type = "text" }: InputFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border-b border-gray-300 bg-transparent py-2 placeholder-gray-400 focus:outline-none focus:border-black"
      />
    </div>
  );
}
