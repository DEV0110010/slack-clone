import { AlertTriangle } from "lucide-react";
import "../styles/error-animations.css";

export default function InlineError({ message = "Something went wrong" }) {
  return (
    <div className="error-message flex items-center justify-center gap-2 p-3 text-red-600 bg-red-50 rounded-lg shadow-md">
      <AlertTriangle className="w-5 h-5 flex-shrink-0" />
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
}
