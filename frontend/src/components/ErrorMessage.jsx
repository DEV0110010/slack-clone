import { AlertTriangle } from "lucide-react";

export default function ErrorMessage({ message }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-center px-4">
      <AlertTriangle className="w-12 h-12 text-red-500 mb-4" />
      <h2 className="text-white text-xl font-semibold mb-2">
        Oops! Something went wrong
      </h2>
      <p className="text-gray-300">
        {message || "Please try again later."}
      </p>
    </div>
  );
}
