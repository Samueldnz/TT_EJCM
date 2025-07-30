import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface BackHeaderProps {
  title: string;
}

export default function BackHeader({ title }: BackHeaderProps) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-2 text-gray-800">
      <button onClick={() => navigate(-1)}>
        <ArrowLeft size={24} />
      </button>
      <h1 className="text-lg font-medium">{title}</h1>
    </div>
  );
}
