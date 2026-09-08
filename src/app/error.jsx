"use client"
import { Home, SearchX } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Error = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-base-100 px-4 py-12">
      <div className="max-w-md w-full text-center space-y-6">
        {/* Visual Icon Badge */}
        <div className="relative mx-auto w-28 h-28 flex items-center justify-center rounded-full bg-base-200 border border-base-300 shadow-inner">
          <SearchX className="w-14 h-14 text-primary animate-bounce" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-error"></span>
          </span>
        </div>

        {/* Big 404 Header */}
        <div className="space-y-2">
          <h1 className="text-7xl font-black tracking-extrabold text-primary">
            An error occured
          </h1>
          <p className="text-sm text-base-content/60 max-w-sm mx-auto">
            Sorry, the page you are looking for does not exist, has been removed,
            or is temporarily unavailable.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Link
            href="/"
            className="btn btn-primary btn-outline gap-2 rounded-xl"
          >
            <Home size={18} />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
    );
};

export default Error;