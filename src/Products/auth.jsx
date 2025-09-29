// src/Products/auth.jsx
"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/*────────────────────────── SHARED INPUT ──────────────────────────*/
const TextField = ({ label, ...rest }) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-white/70">{label}</label>
    <input
      {...rest}
      className="w-full rounded-md border border-neutral-700 bg-black px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-neutral-500"
    />
  </div>
);

/*────────────────────────── LOGIN FORM ──────────────────────────*/
const LoginForm = ({ formData, handleInputChange, handleSubmit, toggleMode }) => (
  <form
    onSubmit={handleSubmit}
    className="flex flex-col gap-6 rounded-xl border border-neutral-800 bg-black/80 p-8 shadow"
  >
    <h2 className="text-center text-2xl font-bold text-white">Sign in to your account</h2>

    <TextField
      label="Email"
      type="email"
      name="email"
      value={formData.email}
      onChange={handleInputChange}
      placeholder="you@example.com"
      required
    />

    <TextField
      label="Password"
      type="password"
      name="password"
      value={formData.password}
      onChange={handleInputChange}
      placeholder="••••••••"
      required
    />

    <button
      type="submit"
      className="rounded-md bg-black border border-neutral-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-900"
    >
      Sign In
    </button>

    <p className="text-center text-sm text-white/70">
      Don&apos;t have an account?{" "}
      <button
        type="button"
        onClick={toggleMode}
        className="font-medium text-white underline-offset-4 hover:underline"
      >
        Sign&nbsp;Up
      </button>
    </p>
  </form>
);

/*────────────────────────── SIGN-UP FORM ──────────────────────────*/
const SignupForm = ({ formData, handleInputChange, handleSubmit, toggleMode }) => (
  <form
    onSubmit={handleSubmit}
    className="flex flex-col gap-6 rounded-xl border border-neutral-800 bg-black/80 p-8 shadow"
  >
    <h2 className="text-center text-2xl font-bold text-white">Create your account</h2>

    <TextField
      label="Full name"
      type="text"
      name="name"
      value={formData.name}
      onChange={handleInputChange}
      placeholder="Jane Doe"
      required
    />

    <TextField
      label="Email"
      type="email"
      name="email"
      value={formData.email}
      onChange={handleInputChange}
      placeholder="you@example.com"
      required
    />

    <TextField
      label="Password"
      type="password"
      name="password"
      value={formData.password}
      onChange={handleInputChange}
      placeholder="••••••••"
      required
    />

    <TextField
      label="Confirm password"
      type="password"
      name="confirmPassword"
      value={formData.confirmPassword}
      onChange={handleInputChange}
      placeholder="••••••••"
      required
    />

    <button
      type="submit"
      className="rounded-md bg-black border border-neutral-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-900"
    >
      Create Account
    </button>

    <p className="text-center text-sm text-white/70">
      Already have an account?{" "}
      <button
        type="button"
        onClick={toggleMode}
        className="font-medium text-white underline-offset-4 hover:underline"
      >
        Sign&nbsp;In
      </button>
    </p>
  </form>
);

/*────────────────────────── AUTH PAGE ──────────────────────────*/
const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const endpoint = isLogin ? "login" : "register";
    const url = `http://localhost:5000/api/auth/${endpoint}`;

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok && data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/dashboard");
      } else {
        alert(data.msg || "Something went wrong");
      }
    } catch (err) {
      console.error("Auth error:", err);
      alert("Server error");
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-6">
      <div className="w-full max-w-sm">
        {isLogin ? (
          <LoginForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            toggleMode={toggleMode}
          />
        ) : (
          <SignupForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            toggleMode={toggleMode}
          />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
