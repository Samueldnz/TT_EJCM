import { FaFacebookF, FaGoogle } from "react-icons/fa";

export default function SocialLoginButtons() {
  return (
    <div className="flex justify-center gap-10 mt-4">
      <button className="bg-gray-200 rounded-full w-14 h-14 flex items-center justify-center text-black text-xl hover:bg-gray-300">
        <FaFacebookF />
      </button>
      <button className="bg-gray-200 rounded-full w-14 h-14 flex items-center justify-center text-black text-xl hover:bg-gray-300">
        <FaGoogle />
      </button>
    </div>
  );
}
