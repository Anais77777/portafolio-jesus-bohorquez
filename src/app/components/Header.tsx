"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home page" },
    { href: "/about", label: "About me" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full py-4 px-8 md:px-24 bg-transparent backdrop-blur-sm text-white z-50 mt-7">
      <div className="flex justify-between items-center">
        <Link href="/" className="font-bold text-sm">
          YOUR.DEV
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-blue-400 transition-colors ${
                pathname === link.href
                  ? "border-b-2 border-blue-400 text-blue-400"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white px-3 py-1 rounded border border-white hover:bg-[#1b1b4a] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden pt-4 pb-4 space-y-4 flex flex-col bg-transparent">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`py-2 ${
                pathname === link.href
                  ? "border-b-2 border-blue-400 text-blue-400"
                  : "hover:text-blue-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
