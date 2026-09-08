"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlink = ({ href, children }) => {
  const path = usePathname();
  const isActive = href === "/" ? path === "/" : path.startsWith(href);
  return (
    <Link
      className={`font-medium ${isActive ? "text-primary" : "text-black"}`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default Navlink;
