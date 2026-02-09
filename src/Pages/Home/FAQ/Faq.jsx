import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
const faqs = [
  {
    id: '1',
    question: 'What is BUCC?',
    answer:
      'BUCC stands for Barishal University Career Club. It is a student-run organization focused on career development, professional skills, and leadership growth for university students.',
  },
  {
    id: '2',
    question: 'Who can join BUCC?',
    answer:
      'Any student of Barishal University who is passionate about personal growth, leadership, and career development can join BUCC.',
  },
  {
    id: '3',
    question: 'What does BUCC do?',
    answer:
      'BUCC organizes workshops, seminars, career talks, skill-building sessions, networking events, and leadership programs to prepare students for higher studies and professional careers.',
  },
  {
    id: '4',
    question: 'Is BUCC only for business or management students?',
    answer:
      'No. BUCC is open to students from all departments and disciplines. Career readiness is for everyone.',
  },
  {
    id: '5',
    question: 'How can I become a member?',
    answer:
      'You can apply through our official membership recruitment process, which is announced on our website and social media platforms.',
  },
  {
    id: '6',
    question: 'Are there any membership fees?',
    answer:
      'BUCC keeps its activities affordable and accessible. Any applicable fees are minimal and communicated transparently during recruitment or events.',
  },
  {
    id: '7',
    question: 'What are the benefits of joining BUCC?',
    answer:
      'Members gain access to career guidance, skill development opportunities, networking with professionals and alumni, leadership experience, and a strong professional community.',
  },
  {
    id: '8',
    question: 'Does BUCC collaborate with other organizations?',
    answer:
      'Yes. BUCC actively collaborates with university departments, student clubs, alumni, and external organizations to create meaningful opportunities for students.',
  },
  {
    id: '9',
    question: 'How can I participate in BUCC events?',
    answer:
      'Event details are shared regularly on our website and official social media pages. Members receive priority access.',
  },
  {
    id: '10',
    question: 'How can I contact BUCC?',
    answer:
      'You can reach us through the Contact Us section of our website or via our official social media channels.',
  },
];

export default function Faq() {
  const [showAll, setShowAll] = useState(false);

  const visibleFAQs = showAll ? faqs : faqs.slice(0, 3);
  return (
    <Fade className='mb-5' delay={400} duration={1500} triggerOnce={false} cascade damping={0.1}>
      <Accordion type="multiple" className="max-w-7xl mx-auto space-y-4">
        {visibleFAQs.map((faq, index) => (
          <AccordionItem
            key={faq.id}
            value={`item-${faq.id}`}
            className="border border-gray-200 rounded-xl px-6 bg-white shadow-sm"
          >
            <AccordionTrigger className="text-left text-lg font-semibold text-[#004d26] hover:no-underline">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 text-sm font-bold text-white bg-[#004d26] rounded-full">
                  {index + 1}
                </span>
                {faq.question}
              </div>
            </AccordionTrigger>

            <AccordionContent className="text-gray-600 leading-relaxed pt-2 pl-10">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="
    group flex items-center gap-2
    px-6 py-3
    rounded-full
    bg-[#004d26]
    text-white text-sm md:text-base font-semibold
    shadow-md
    hover:bg-[#006633]
    hover:shadow-lg
    transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-[#004d26]/40
  "
        >
          {showAll ? 'Show Less' : 'Show More'}

          <ChevronDown
            className={`
      w-5 h-5
      transition-transform duration-300
      ${showAll ? 'rotate-180' : 'rotate-0'}
      group-hover:translate-y-0.5
    `}
          />
        </button>
      </div>
    </Fade>
  );
}
