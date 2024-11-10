"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="w-full h-full  flex flex-col items-center justify-center gap-10">
      <h2 className="text-red-600 text-9xl">Something went wrong!</h2>
      <button
        className="border-none px-8 py-3 bg-red-600 text-white"
        onClick={() => reset()}
      >
        Reload!
      </button>
    </div>
  );
}
