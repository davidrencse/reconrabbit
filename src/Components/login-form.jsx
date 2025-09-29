// src/components/login-form.jsx
"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/**
 * A form component for user login and registration.
 * @param {object} props - The props for the component.
 * @param {string} [props.className] - Additional CSS classes.
 * @param {boolean} props.isLogin - Flag to toggle between Login and Sign Up mode.
 * @param {object} props.formData - The state object for form inputs.
 * @param {string} props.formData.name
 * @param {string} props.formData.email
 * @param {string} props.formData.password
 * @param {string} props.formData.confirmPassword
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} props.handleInputChange - Function to handle input changes.
 * @param {(e: React.FormEvent<HTMLFormElement>) => void} props.handleSubmit - Function to handle form submission.
 * @param {() => void} props.toggleMode - Function to switch between login/register modes.
 */
export function LoginForm({
  className,
  isLogin,
  formData,
  handleInputChange,
  handleSubmit,
  toggleMode,
  ...props
}) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>{isLogin ? "Login to your account" : "Create an account"}</CardTitle>
          <CardDescription>
            {isLogin
              ? "Enter your email below to login to your account."
              : "Enter your details to create a new account."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              {!isLogin && (
                <div className="grid gap-3">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              )}
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  {isLogin && (
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  )}
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {!isLogin && (
                  <div className="grid gap-3">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type="password"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          required
                      />
                  </div>
              )}
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  {isLogin ? "Login" : "Create Account"}
                </Button>
                <Button variant="outline" className="w-full">
                  Login with Google
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <a href="#" className="underline underline-offset-4" onClick={(e) => { e.preventDefault(); toggleMode(); }}>
                {isLogin ? "Sign up" : "Sign in"}
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}