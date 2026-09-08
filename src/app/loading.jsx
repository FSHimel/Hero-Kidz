import React from "react";
import { Loader2 } from "lucide-react";

export default function GlobalLoading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-base-100/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-base-100 border border-base-200 shadow-xl max-w-xs w-full text-center">
        {/* Animated Spinner Icon */}
        <div className="relative flex items-center justify-center">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>

        {/* Loading Text */}
        <div className="space-y-1">
          <h3 className="font-bold text-lg text-base-content tracking-wide">
            Loading...
          </h3>
          <p className="text-xs text-base-content/60 font-medium">
            অনুগ্রহ করে একটু অপেক্ষা করুন
          </p>
        </div>

        {/* DaisyUI Progress Bar Accent */}
        <progress className="progress progress-primary w-full h-1"></progress>
      </div>
    </div>
  );
}
