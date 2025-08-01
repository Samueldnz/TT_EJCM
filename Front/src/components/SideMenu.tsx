import { X, User } from "lucide-react";
import { Link } from "react-router-dom";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SideMenu({ isOpen, onClose }: SideMenuProps) {
  const menuItems = [
    { name: "Editar dados", to: "/editar" },
    { name: "Meus pedidos", to: "/pedidos" },
    { name: "Meus produtos", to: "/produtos" },
    { name: "Meu carrinho", to: "/carrinho" },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      ></div>

      {/* Menu */}
      <div className="relative w-64 h-full bg-gray-100 shadow-lg">
        {/* Header */}
        <div className="bg-gray-900 text-white p-4 flex items-center gap-2">
          <User size={20} />
          <span className="text-lg font-medium">Usuário</span>
        </div>

        {/* Links */}
        <div className="p-4 space-y-3">
          {menuItems.map((item, idx) => (
            <div key={idx}>
              <Link
                to={item.to}
                onClick={onClose}
                className="block w-full text-left text-gray-800 py-2 hover:font-medium"
              >
                {item.name}
              </Link>
              {idx < menuItems.length - 1 && <hr className="border-gray-300" />}
            </div>
          ))}
        </div>

        {/* Logout */}
        <div className="absolute bottom-4 left-4">
          <button className="text-black hover:font-medium">Sair</button>
        </div>

        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-white"
          onClick={onClose}
        >
          <X size={24} />
        </button>
      </div>
    </div>
  );
}
