"use client";
import PageWrapper from "@/app/components/PageWrapper";
import { useEffect, useState } from "react";

export default function Page() {
  const startDate = new Date("2025-10-22T00:00:00");
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const diff = now - startDate;

  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  return (
    <PageWrapper backTo="/">
      <div className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-3xl text-gray-800 font-bold mb-4">Laiks kopš esam kopā</h1>
        <p className="text-lg text-gray-800 mb-6">Oktobris 22, 2025</p>

        <div className="text-2xl text-gray-800 space-y-2">
          <div>{days} dienas, {hours} stundas, {minutes} minūtes, {seconds} sekundes</div>
        </div>
      </div>
    </PageWrapper>
  );
}
