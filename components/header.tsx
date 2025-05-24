"use client"

import { useState } from "react"
import { Menu, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"
import { useTheme } from "next-themes"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const menuItems = [
    { name: "Inicio", href: "/" },
    { name: "Ver en Directo", href: "/ver-en-directo" },
    { name: "Sobre Nosotros", href: "/sobre-nosotros" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-background/95 text-foreground backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200">
            Pase Directo
          </Link>
        </div>

        {/* Desktop Navigation and Theme Button */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Botón de tema */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow rounded-full p-2 flex items-center justify-center transition-colors hover:bg-green-500 hover:text-white dark:hover:bg-green-500"
            aria-label="Cambiar tema"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-foreground">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
            <div className="flex flex-col space-y-4 mt-8">
              <div className="flex items-center mb-8">
                <Link
                  href="/"
                  className="text-xl font-bold text-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
                >
                  Pase Directo
                </Link>
              </div>
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
