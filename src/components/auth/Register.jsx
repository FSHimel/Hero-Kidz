"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Lock, Mail, User, Loader2 } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { postUser } from "@/actions/server/auth";
import { useRouter } from "next/navigation";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      // TODO: Add your registration logic here
      //
      // Example:
      const formData = new FormData(e.currentTarget);

      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");

      const form = { name, email, password };
      const result = await postUser(form);

      if (result.acknowledged) {
        alert("Resistration Successful. Please Login...🖐️");
        router.push("/login");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    // TODO: Add your Google sign-in logic
    //
    // Example:
    // await signIn("google", {
    //   callbackUrl: "/dashboard",
    // });
  };

  return (
    <div className="w-full max-w-md">
      <div className="card bg-base-100 shadow-xl border border-base-300">
        <div className="card-body p-6 sm:p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold">Create an account</h1>

            <p className="text-base-content/60 mt-2">Sign up to get started</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            {/* Full Name */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">Full name</span>
              </label>

              <label className="input border outline-0 border-primary rounded-xl flex items-center gap-3 w-full">
                <User className="w-5 h-5 shrink-0 text-base-content/50" />

                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="grow min-w-0 w-full"
                  required
                />
              </label>
            </div>

            {/* Email */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>

              <label className="input border outline-0 border-primary rounded-xl flex items-center gap-3 w-full">
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
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>

              <label className="input border outline-0 border-primary rounded-xl flex items-center gap-3 w-full">
                <Lock className="w-5 h-5 shrink-0 text-base-content/50" />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a password"
                  className="grow min-w-0 w-full"
                  minLength={8}
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
                  Creating account...
                </>
              ) : (
                "Create account"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="divider text-sm text-base-content/50">OR</div>

          {/* Google */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full rounded-xl"
          >
            <FcGoogle className="text-xl" />
            Continue with Google
          </button>

          {/* Login */}
          <p className="text-center text-sm text-base-content/60 mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
