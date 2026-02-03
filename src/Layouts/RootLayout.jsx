import Navbar from '@/Shared/Navbar'
import React from 'react'
import { Outlet } from 'react-router'

export default function RootLayout() {
  return (
    <>
    
    <RootLayout />
    <Navbar />
    <Outlet />
    </>
  )
}
