'use client';

import { useState } from 'react';
import { NavLink } from 'react-router';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Menu, ChevronDown, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Desktop Link Styles
  const navLinkClass = ({ isActive }) =>
    `relative px-4 py-2 rounded-lg text-[17px] font-bold flex items-center gap-1
   transition-all duration-300 uppercase
   ${isActive ? 'text-white bg-[#004d26]' : 'text-[#1a3a22] hover:bg-[#004d26]/10'}`;

  const dropdownItemClass = "block px-4 py-2 text-sm text-gray-700 hover:bg-[#004d26] hover:text-white transition-colors whitespace-nowrap";

  // Data Structure for Committees to keep code DRY (Don't Repeat Yourself)
  const committees = ["2024", "2023", "2022"];

  return (
    <nav className="sticky top-0 z-50 w-full  bg-[#A1BC98]/95 backdrop-blur-md border-b-8 border-[#004d26]">
      <div className="mx-auto max-w-7xl px-6 py-3">
        <div className="flex h-24 items-center justify-between">
          
          <img src="/BUCC Logo_20260111_171506_0000.png" alt="BUCC Logo" className="w-16 h-16 md:w-26 md:h-26 object-contain" />

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navLinkClass}>HOME</NavLink>
            <NavLink to="/events" className={navLinkClass}>EVENTS</NavLink>
            
            {/* Desktop "Peoples" Dropdown */}
            <div className="relative group">
              <button className={`${navLinkClass({ isActive: false })} cursor-pointer`}>
                Peoples <ChevronDown size={14} />
              </button>
              
              {/* Level 1: Peoples Menu */}
              <div className="absolute left-0 mt-0 w-60 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white shadow-2xl border-t-4 border-[#004d26] py-2">
                  <NavLink to="/mentor" className={dropdownItemClass}>ORGANIZING MENTOR</NavLink>
                  
                  {/* Generate Committee Dropdowns */}
                  {committees.map((year) => (
                    <div key={year} className="relative group/sub">
                      <div className={`${dropdownItemClass} flex justify-between items-center cursor-pointer font-semibold text-[#004d26]`}>
                        COMMITTEE {year} <ChevronRight size={14} />
                      </div>
                      {/* Level 2: Sub-Menu */}
                      <div className="absolute left-full top-0 ml-[1px] w-56 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                        <div className="bg-white shadow-xl border-t-4 border-[#004d26] py-2">
                          <NavLink to={`/committee-${year}/exec`} className={dropdownItemClass}>EXECUTIVE COMMITTEE</NavLink>
                          <NavLink to={`/committee-${year}/general`} className={dropdownItemClass}>GENERAL MEMBERS</NavLink>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <NavLink to="/gallaery" className={navLinkClass}>Gallaery</NavLink>
            <NavLink to="/notice" className={navLinkClass}>Notice</NavLink>
            <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
            <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
            <NavLink to="/contact" className={navLinkClass}>CONTACT</NavLink>
          </div>

          {/* MOBILE MENU */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-8 w-8 text-[#004d26]" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[310px] p-0 bg-white border-l-[6px] border-[#004d26] overflow-y-auto">
              <SheetHeader className="p-6 border-b bg-[#f8faf8]">
                <SheetTitle className="text-[#004d26] font-black text-xl tracking-widest">BUCC MENU</SheetTitle>
              </SheetHeader>

              <div className="flex flex-col p-4">
                <MobileNavItem to="/" label="HOME" onClick={() => setOpen(false)} />
                <MobileNavItem to="/events" label="EVENTS" onClick={() => setOpen(false)} />

                {/* Mobile Peoples Accordion */}
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="peoples" className="border-none">
                    <AccordionTrigger className="px-4 py-3 text-[#1a3a22] font-bold text-lg hover:no-underline hover:bg-gray-50 rounded-lg">
                      PEOPLES
                    </AccordionTrigger>
                    <AccordionContent className="pl-4 space-y-1">
                      <MobileSubItem to="/mentor" label="Organizing Mentor" onClick={() => setOpen(false)} />
                      
                      {/* Nested Committee Accordions */}
                      {committees.map((year) => (
                        <Accordion key={year} type="single" collapsible className="w-full">
                          <AccordionItem value={`year-${year}`} className="border-none">
                            <AccordionTrigger className="px-4 py-2 text-[#004d26] font-bold text-md hover:no-underline">
                              COMMITTEE {year}
                            </AccordionTrigger>
                            <AccordionContent className="pl-6 space-y-1 border-l-2 border-[#004d26]/20 ml-4">
                              <MobileSubItem to={`/committee-${year}/exec`} label="Executive Committee" onClick={() => setOpen(false)} />
                              <MobileSubItem to={`/committee-${year}/general`} label="General Members" onClick={() => setOpen(false)} />
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <MobileNavItem to="/Gallaery" label="Gallaery" onClick={() => setOpen(false)} />
                <MobileNavItem to="/contact" label="CONTACT" onClick={() => setOpen(false)} />
              </div>

              <div className="p-8 mt-auto text-center opacity-40">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase">Established 2022</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

// Reusable Nav Components
function MobileNavItem({ to, label, onClick }) {
  return (
    <NavLink to={to} onClick={onClick} className={({ isActive }) => `px-4 py-3 rounded-lg text-lg font-bold ${isActive ? 'bg-[#004d26] text-white' : 'text-[#1a3a22]'}`}>{label}</NavLink>
  );
}

function MobileSubItem({ to, label, onClick }) {
  return (
    <NavLink to={to} onClick={onClick} className="block px-4 py-2 text-[15px] text-gray-600 font-semibold hover:text-[#004d26] transition-colors">{label}</NavLink>
  );
}