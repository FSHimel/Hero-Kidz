"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Lock, Mail, Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";
import { useRouter, useSearchParams } from "next/navigation";
import SocialLoginButton from "../buttons/SocialLoginButton";

export default function Login() {
  const router = useRouter();
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") || "/";
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      // TODO: Add your login logic here
      const formData = new FormData(e.currentTarget);

      const email = formData.get("email");
      const password = formData.get("password");

      const form = { email, password };

      const result = await signIn("credentials", {
        email: form.email,
        password: form.password,
        redirect: false,
      });
      if (!result.ok) {
        Swal.fire(
          "Error",
          "Email & Password didn't match. Try login with Google/ Register",
          "error",
        );
      } else {
        Swal.fire("Success", "Welcome Back", "success");
        router.push(callbackUrl);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="card bg-base-100 shadow-xl border border-base-300">
        <div className="card-body p-6 sm:p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold">Welcome back</h1>

            <p className="text-base-content/60 mt-2">
              Login to your account to continue
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            {/* Email */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>

              <label className="input border outline-0 border-primary rounded-xl flex items-center gap-3 w-full ">
                <Mail className="w-5 h-5 shrink-0 text-base-content/50" />

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="grow min-w-0 w-full"
                  required
                />
              </label>
            </div>

            {/* Password */}
            <div className="form-control w-full">
              <div className="flex items-center justify-between">
                <label className="label">
                  <span className="label-text font-medium">Password</span>
                </label>
              </div>

              <label className="input border outline-0 border-primary rounded-xl flex items-center gap-3 w-full">
                <Lock className="w-5 h-5 shrink-0 text-base-content/50" />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="grow min-w-0 w-full"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="btn btn-ghost btn-sm btn-circle shrink-0"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </label>
              <Link
                href="/forgot-password"
                className="text-sm text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full mt-2 rounded-xl"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="divider text-sm text-base-content/50">OR</div>

          {/* Google Login */}
          <SocialLoginButton></SocialLoginButton>

          {/* Register */}
          <p className="text-center text-sm text-base-content/60 mt-6">
            Don&apos;t have an account?{" "}
            <Link
              href={`/register?callbackUrl=${callbackUrl}`}
              className="text-primary font-semibold hover:underline"
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
