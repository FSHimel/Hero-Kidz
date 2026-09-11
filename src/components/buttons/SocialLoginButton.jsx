"use client";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const SocialLoginButton = () => {
  const params = useSearchParams();
  //   console.log(params.get("callbackUrl") || "/");
  const handleGoogleLogin = async () => {
    const result = await signIn("google", {
      redirect: "false",
      callbackUrl: params.get("callbackUrl") || "/",
    });
    if (result.ok) {
      Swal.fire("Success", "Welcome", "success");
    } else {
      Swal.fire("Error", "Sorry", "error");
    }
  };
  return (
    <div>
      <button
        type="button"
        onClick={handleGoogleLogin}
        className="btn btn-outline w-full rounded-xl"
      >
        <FcGoogle className="text-xl" />
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLoginButton;
