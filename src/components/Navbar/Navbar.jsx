'use client';

import { useState } from 'react';
import { NavLink } from 'react-router';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative px-4 py-2 rounded-lg text-[20px] font-semibold
   transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
   ${
     isActive
       ? 'text-white bg-[#004d26] shadow-[0_6px_18px_rgba(0,77,38,0.25)] scale-[1.04]'
       : 'text-[#1a3a22] hover:bg-[#004d26]/10 hover:scale-[1.03]'
   }
   before:absolute before:bottom-1 before:left-1/2 before:h-[2px]
   before:w-0 before:-translate-x-1/2 before:bg-[#004d26]
   before:transition-all before:duration-500
   hover:before:w-3/4`;

  const menuItems = (
    <>
      <NavLink to="/" className={navLinkClass}>
        Home
      </NavLink>
      <NavLink to="/about" className={navLinkClass}>
        About
      </NavLink>
      <NavLink to="/events" className={navLinkClass}>
        Events
      </NavLink>
      <NavLink to="/contact" className={navLinkClass}>
        Contact
      </NavLink>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#A1BC98]/90 backdrop-blur-md border-b-8 border-[#004d26]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}

          <img
            src="/BUCC Logo_20260111_171506_0000.png"
            alt="BUCC Logo"
            className="w-16 h-16 md:w-24 md:h-24 object-contain"
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">{menuItems}</div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[260px]">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold">Menu</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex flex-col gap-3">{menuItems}</div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
