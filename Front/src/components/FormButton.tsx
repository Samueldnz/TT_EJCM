interface FormButtonProps {
  text: string;
  onClick?: () => void;
}

export default function FormButton({ text, onClick }: FormButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-black text-white py-2 rounded-xl mt-4 hover:bg-gray-800 transition"
    >
      {text}
    </button>
  );
}
