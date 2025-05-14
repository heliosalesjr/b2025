"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { HiMenu, HiX } from "react-icons/hi"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: "Apresentação", href: "/" },
    { name: "Módulo 1", href: "/modulo1" },
    { name: "Educação Financeira", href: "/educacaofinanceira" },
    { name: "Metodologias", href: "/metodologias" },
    { name: "Material Didático", href: "/material" },
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
        <nav className="hidden md:flex gap-8 pr-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-base font-medium transition-all duration-300
                  ${isActive ? "font-bold text-primary" : "text-slate-700"}
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-primary after:transition-all
                  ${
                    isActive
                      ? "after:w-full"
                      : "after:w-0 hover:after:w-full hover:after:opacity-100"
                  }`}
              >
                {link.name}
              </Link>
            )
          })}
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
            <div className="w-4/5 max-w-sm bg-white/50 backdrop-blur-md h-full p-5 shadow-lg flex flex-col">
              {/* Botão de fechar */}
              <button onClick={() => setIsOpen(false)} className="self-end p-2">
                <HiX className="text-2xl" />
              </button>

              {/* Links */}
              <nav className="flex flex-col items-center mt-10 space-y-4 w-full">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`w-full text-center py-3 px-6 rounded-lg text-lg font-medium transition-all
                        ${
                          isActive
                            ? "bg-primary/90 text-white font-bold"
                            : "bg-white/70 text-slate-800 hover:bg-white/90 hover:text-primary"
                        }`}
                    >
                      {link.name}
                    </Link>
                  )
                })}
              </nav>
            </div>
            <div className="flex-1" onClick={() => setIsOpen(false)}></div>
          </div>
        )}
      </div>
    </header>
  )
}
