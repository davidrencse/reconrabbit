// src/components/AuthLayout.jsx
import React from 'react';

export const AuthLayout = ({ children }) => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gray-950 p-6 md:p-10">
      {/* Animated Gradient Orbs */}
      <div className="absolute -top-1/4 -left-1/4 h-[500px] w-[500px] animate-[float_8s_ease-in-out_infinite] rounded-full bg-purple-500/30 opacity-50 blur-3xl filter"></div>
      <div className="absolute -bottom-1/4 -right-1/4 h-[400px] w-[400px] animate-[float_12s_ease-in-out_infinite_reverse] rounded-full bg-blue-500/30 opacity-50 blur-3xl filter"></div>
      <div className="absolute -bottom-1/3 -left-1/4 h-[300px] w-[300px] animate-[float_10s_ease-in-out_infinite] rounded-full bg-pink-500/20 opacity-40 blur-3xl filter"></div>

      {/* Form Container */}
      <div className="relative z-10 w-full max-w-md">
        <div className="rounded-2xl border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-xl">
          {children}
        </div>
      </div>
    </div>
  );
};