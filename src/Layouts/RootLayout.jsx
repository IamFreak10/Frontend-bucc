
import Navbar from '@/components/Navbar/Navbar'
import NoticeHeadlineBar from '@/Shared/NoticeHeadlineBar/NoticeHeadlineBar'
import React from 'react'
import { Outlet } from 'react-router'

export const notices = [
  {
    _id: "notice_001",
    title: "Internship Opportunity for CSE Students (Spring 2026)",
    subject: "Career & Internship",
    description:
      "Interested CSE students are invited to apply for internship opportunities at reputed software companies. Details are provided in the attached PDF.",
    pdfUrl:
      "https://drive.google.com/uc?id=1A2B3C4D5E&export=download",
    createdAt: "2026-02-05T09:30:00Z"
  },
  {
    _id: "notice_002",
    title: "Web Development Workshop Registration Open",
    subject: "Skill Development",
    description:
      "BUCC is organizing a hands-on web development workshop covering modern frontend technologies. Registration deadline is mentioned in the notice.",
    pdfUrl:
      "https://drive.google.com/uc?id=6F7G8H9I0J&export=download",
    createdAt: "2026-02-04T15:45:00Z"
  },
  {
    _id: "notice_003",
    title: "Career Guidance Session for Final Year Students",
    subject: "Career Guidance",
    description:
      "A career guidance session will be conducted focusing on job preparation strategies, interview tips, and higher study opportunities.",
    pdfUrl:
      "https://drive.google.com/uc?id=K1L2M3N4O5&export=download",
    createdAt: "2026-02-02T11:00:00Z"
  },
  {
    _id: "notice_004",
    title: "Recruitment Notice: BUCC Executive Committee",
    subject: "Recruitment",
    description:
      "BUCC is inviting applications for executive committee positions. Passionate students are encouraged to apply and be part of the leadership team.",
    pdfUrl:
      "https://drive.google.com/uc?id=P6Q7R8S9T0&export=download",
    createdAt: "2026-01-28T10:15:00Z"
  },
  {
    _id: "notice_005",
    title: "Seminar on Higher Studies Abroad",
    subject: "Seminar",
    description:
      "A seminar on higher studies abroad will be arranged to guide students about scholarships, applications, and requirements.",
    pdfUrl:
      "https://drive.google.com/uc?id=U1V2W3X4Y5&export=download",
    createdAt: "2026-01-22T14:00:00Z"
  }
]; 
export default function RootLayout() {
  return (
    <>
    
    <Navbar />
    <NoticeHeadlineBar notices = {notices} />
    
    <Outlet />
    
    </>
  )
}
