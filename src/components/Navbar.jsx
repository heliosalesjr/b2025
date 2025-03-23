"use client";

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Apresentação", href: "/page1" },
    { name: "Objetivos", href: "/page2" },
    { name: "Metodologias Ativas", href: "/page3" },
    { name: "Projeto", href: "/page4" },
    { name: "Referências", href: "/page5" },
  ]

  return (
    <header className="w-full bg-white/80 backdrop-blur-md border-b fixed top-0 left-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="mr-6">
            <Image
              src="/logo-blue.png"
              alt="Logo"
              width={120}
              height={40}
              className="h-15 w-auto ml-8"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)} className="p-2">
            <HiMenu className="text-2xl" />
          </button>
        </div>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/60 z-50 flex justify-end">
            {/* Drawer branco com transparência */}
            <div className="w-4/5 max-w-sm bg-white/50 backdrop-blur-md h-full p-5 shadow-lg flex flex-col">
              {/* Botão de fechar */}
              <button onClick={() => setIsOpen(false)} className="self-end p-2">
                <HiX className="text-2xl" />
              </button>

              {/* Links centralizados */}
              <nav className="flex flex-col items-center mt-10 space-y-4 w-full">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="w-full text-center py-3 px-6 bg-white/70 rounded-lg text-lg font-medium transition-all hover:bg-white/90 hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
            {/* Clicar fora do menu fecha ele */}
            <div className="flex-1" onClick={() => setIsOpen(false)}></div>
          </div>
        )}
      </div>
    </header>
  )
}
