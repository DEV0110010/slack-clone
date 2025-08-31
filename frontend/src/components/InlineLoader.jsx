import { LoaderIcon } from "lucide-react";

export default function InlineLoader({ message = "Loading..." }) {
  return (
    <div className="flex items-center justify-center gap-2 p-2 text-gray-600">
      <LoaderIcon className="w-5 h-5 text-pink-600 animate-spin" />
      <span className="text-sm font-medium animate-pulse">{message}</span>
    </div>
  );
}
