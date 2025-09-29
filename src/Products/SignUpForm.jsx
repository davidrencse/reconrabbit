// src/components/SignUpForm.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const SignUpForm = ({ formData, handleInputChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white">Create Your Account</h1>
        <p className="text-sm text-gray-400">Join us and start your journey.</p>
      </div>

      {/* Form Fields */}
      <div className="grid gap-3">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleInputChange}
          className="bg-black/40 text-white border-white/20 focus:border-purple-400"
          required
        />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleInputChange}
          className="bg-black/40 text-white border-white/20 focus:border-purple-400"
          required
        />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          className="bg-black/40 text-white border-white/20 focus:border-purple-400"
          required
        />
      </div>
       <div className="grid gap-3">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          className="bg-black/40 text-white border-white/20 focus:border-purple-400"
          required
        />
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3">
        <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold">
          Create Account
        </Button>
        <Button variant="outline" className="w-full bg-black/20 border-white/20 hover:bg-white/10 text-white">
          <svg className="mr-2 h-4 w-4" /* Google Icon SVG */>
            <path d="M20.941 10.134c0-.703-.062-1.385-.183-2.05H10.5v3.876h5.86c-.253 1.25-1.003 2.3-2.128 3.03v2.51h3.23c1.892-1.742 2.977-4.322 2.977-7.366z" fill="#4285F4"></path><path d="M10.5 21c2.81 0 5.165-.933 6.886-2.53l-3.23-2.51c-.933.625-2.128 1-3.656 1-2.77 0-5.11-1.87-5.947-4.38H1.28v2.58C3.046 18.66 6.49 21 10.5 21z" fill="#34A853"></path><path d="M4.553 12.22c-.22-.625-.344-1.29-.344-1.97s.124-1.345.344-1.97V5.7h-3.27C.527 7.24 0 8.98 0 10.25s.527 3.01 1.283 4.55l3.27-2.58z" fill="#FBBC05"></path><path d="M10.5 4.38c1.52 0 2.88.52 3.96 1.54l2.86-2.86C15.66.52 13.31 0 10.5 0 6.49 0 3.046 2.34.28 5.7l3.27 2.58C4.39 5.81 6.73 4.38 10.5 4.38z" fill="#EA4335"></path>
          </svg>
          Sign Up with Google
        </Button>
      </div>

      {/* Footer Link */}
      <div className="mt-4 text-center text-sm">
        <span className="text-gray-400">Already have an account? </span>
        <Link to="/login" className="font-semibold text-purple-400 underline-offset-4 hover:underline hover:text-purple-300">
          Sign In
        </Link>
      </div>
    </div>
  </form>
);