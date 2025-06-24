"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { HiMenu, HiX } from "react-icons/hi"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: "Apresentação", href: "/" },
    { name: "Módulo 1", href: "/modulo1" },
    { name: "Educação Financeira", href: "/educacaofinanceira" },
    { name: "Metodologias", href: "/metodologias" },
    { name: "Material Didático", href: "/material" },
    { name: "Diagnóstico", href: "/diagnostico" },
    
  ]

  // Detectar scroll para efeito visual
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Fechar menu ao redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Prevenir scroll quando menu mobile está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <header 
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50" 
          : "bg-white/80 backdrop-blur-md border-b border-gray-200/30"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-18 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src="/logo-blue.png"
                alt="Logo"
                width={120}
                height={40}
                className="h-10 sm:h-12 w-auto transition-all duration-300 hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3 xl:px-4 py-2 text-sm xl:text-base font-medium rounded-lg transition-all duration-300
                    ${isActive 
                      ? "text-blue-700 font-semibold" 
                      : "text-slate-700 hover:text-primary"
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-slate-500 rounded-full" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Tablet Navigation (md to lg) */}
          <nav className="hidden md:flex lg:hidden items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-2 py-2 text-xs font-medium rounded-md transition-all duration-300
                    ${isActive 
                      ? "text-blue-700 font-semibold" 
                      : "text-slate-700 hover:text-primary"
                    }`}
                >
                  {link.name.length > 12 ? link.name.substring(0, 10) + "..." : link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-blue-700 rounded-full" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(true)} 
              className="p-2 rounded-lg text-slate-700 hover:text-primary hover:bg-primary/5 transition-all duration-300 active:scale-95"
              aria-label="Abrir menu"
            >
              <HiMenu className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-50 md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu */}
        <div className="absolute inset-x-4 top-20 bg-white rounded-lg shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-center relative p-4 border-b">
            <h3 className="text-lg font-semibold text-slate-800">Menu</h3>
            <button 
              onClick={() => setIsOpen(false)} 
              className="absolute right-4 p-1 text-slate-600 hover:text-slate-800"
              aria-label="Fechar menu"
            >
              <HiX className="text-xl" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block w-full py-3 px-4 text-center font-medium rounded-lg transition-colors mb-2 last:mb-0 relative
                    ${isActive
                      ? "text-blue-700 font-semibold"
                      : "text-slate-700 hover:bg-gray-50 hover:text-primary"
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-blue-500 rounded-full" />
                  )}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </header>
  )
}