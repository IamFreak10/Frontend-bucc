"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const menuItems = ["Home", "About", "Services", "Contact"]

  return (
    <nav className="w-full bg-white border-b shadow">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold">BUCC</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {menuItems.map((item) => (
            <Button key={item} variant="link">
              {item}
            </Button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Menu</h2>
              <Button variant="ghost" onClick={() => setOpen(false)}>
                <CloseIcon className="h-6 w-6" />
              </Button>
            </div>

            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <Button
                  key={item}
                  variant="link"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </Button>
              ))}
            </div>
          </SheetContent>
        </Sheet>

      </div>
    </nav>
  )
}
