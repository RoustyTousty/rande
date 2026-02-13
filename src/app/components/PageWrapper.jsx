"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageWrapper({
  children,
  background = "/bg2.png",
  backTo = "/",
}) {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setLoaded(true), 20);
    return () => clearTimeout(id);
  }, []);

  const handleBack = () => {
    setExiting(true);
    setTimeout(() => {
      router.push(backTo);
    }, 500);
  };

  return (
    <div
      className={`
        fixed inset-0 w-screen h-screen overflow-hidden
        transition-opacity duration-500
        ${loaded && !exiting ? "opacity-100" : "opacity-0"}
      `}
    >
      {/* Background */}
      <img
        src={background}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Back Button */}
      <button
        onClick={handleBack}
        className="
          absolute top-6 left-6 z-20
          px-4 py-2 rounded-lg font-semibold
          bg-white text-gray-800
          hover:scale-110 transition cursor-pointer
        "
      >
        ← Back
      </button>

      {/* Page Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6">
        {children}
      </div>
    </div>
  );
}
