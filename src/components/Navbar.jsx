import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  const navLinks = [
    { name: "Page 1", href: "/page1" },
    { name: "Page 2", href: "/page2" },
    { name: "Page 3", href: "/page3" },
    { name: "Page 4", href: "/page4" },
    { name: "Page 5", href: "/page5" },
  ]

  return (
    <header className="w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-6">
            <Image
              src="/placeholder.svg?height=40&width=120"
              alt="Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium transition-colors hover:text-primary">
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          {/* Mobile menu button would go here */}
          <button className="p-2">Menu</button>
        </div>
      </div>
    </header>
  )
}

