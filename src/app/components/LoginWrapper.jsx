"use client";
import { useState } from "react";

export default function LoginWrapper({ children }) {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);

  const correctPassword = "Oslo";

  const tryUnlock = () => {
    if (
      password.trim().toLowerCase() ===
      correctPassword.toLowerCase()
    ) {
      setUnlocked(true);
      setError("");
    } else {
      setError("Nepareiza parole");
      setShake(true);
      setTimeout(() => setShake(false), 300);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      tryUnlock();
    }
  };

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      {/* DARK LOGIN OVERLAY */}
      {!unlocked && (
        <div className="absolute inset-0 z-[999] bg-[rgba(0,0,0,0.90)] backdrop-blur-3xl flex flex-col items-center justify-center text-white gap-4 transition-opacity duration-1000">
          <h1 className="text-3xl mb-4 opacity-80">Parole</h1>

          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (error) setError("");
            }}
            onKeyDown={handleKeyDown}
            placeholder="Parole"
            className={`
              px-4 py-2 rounded bg-gray-800 border border-gray-700
              focus:outline-none focus:ring-2 focus:ring-white
              text-white transition-transform
              ${shake ? "animate-shake" : ""}
            `}
          />

          {error && (
            <p className="text-red-500 mt-2 text-sm">
              {error}
            </p>
          )}
        </div>
      )}

      {/* CONTENT */}
      <div className={`w-full h-full ${unlocked ? "" : "pointer-events-none"}`}>
        {children}
      </div>
    </div>
  );
}
