import { useNavigate } from "react-router";
// import { Button } from "@/components/ui/button"; // Optional, replace with a simple <button> if not using shadcn

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-6">
      <div className="text-center animate-fadeIn ">
        <img  className="mx-auto w-80 mb-6 animate-bounce hover:scale-110 transition-transform duration-300" src="https://static.vecteezy.com/system/resources/thumbnails/024/405/934/small_2x/icon-tech-error-404-icon-isolated-png.png" alt="" />

        {/* <h1 className="text-7xl font-extrabold text-white mb-4 hover:scale-110 transition-transform duration-300">
          404
        </h1> */}
        <p className="text-xl text-gray-300 mb-10 hover:scale-110 transition-transform duration-300 ">
          Oops! The page you're looking for doesn't exist.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="bg-white text-gray-900 px-6 py-3 rounded-2xl shadow-lg hover:bg-gray-200 transition-all duration-300"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
