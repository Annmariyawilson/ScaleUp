
'use client';

import Marquee from 'react-fast-marquee';
import { ChevronRight } from 'lucide-react';
<<<<<<< HEAD
import { useState } from 'react';
import Registration from './Registration';

export default function DepositMarquee() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  return (
    <div className='px-2 md:px-0 py-5'>
      <div
        className="w-full  p-2 flex items-center "
        style={{ backgroundColor: '#00D28A', color: 'var(--color-black)' }}
      >
        {/* Fixed "button" on the left */}


        {/* Scrolling marquee */}
        <div className="flex-1 overflow-hidden">
          <Marquee gradient={false} speed={50} direction="left">

            <span>
              Registration Started for{" "}
              <span className="">
                ScaleUp Conclave 2026 – The AI Summit
              </span>
              .{" "}
              <button
                onClick={() => setIsRegisterModalOpen(true)}
                className="ml-1 underline font-semibold text-[#4028c8] hover:text-white-300 transition"
              >
                Book Tickets Now!
              </button>
            </span>
            &nbsp;
              &nbsp;
            <span>

              Registration Started for{" "}
              <span className="">
                ScaleUp Conclave 2026 – The AI Summit
              </span>
              .{" "}
              <button
                onClick={() => setIsRegisterModalOpen(true)}
                className="ml-1 underline font-semibold text-[#4028c8] hover:text-white-300 transition"
              >
                Book Tickets Now!
              </button>
            </span>
            &nbsp;
              &nbsp;
            <span>
              Registration Started for{" "}
              <span className="">
                ScaleUp Conclave 2026 – The AI Summit
              </span>
              .{" "}
              <button
                onClick={() => setIsRegisterModalOpen(true)}
                className="ml-1 underline font-semibold text-[#4028c8] hover:text-white-300 transition"
              >
                Book Tickets Now!

              </button>
            </span>
            &nbsp;
              &nbsp;

          </Marquee>
        </div>
      </div>
      <Registration
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      />
    </div>

=======

export default function DepositMarquee() {
  return (




    <div className='px-2 md:px-0 py-5'>
    <div
      className="w-full  p-2 flex items-center "
      style={{ backgroundColor: '#00D28A', color: 'var(--color-black)' }}
    >
      {/* Fixed "button" on the left */}
     

      {/* Scrolling marquee */}
      <div className="flex-1 overflow-hidden">
        <Marquee gradient={false} speed={50} direction="left">
          <span className="mr-8">
          📢 Date Change&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; ScaleUp Conclave 2026 – The AI Summit&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; New Dates: March 25 & 26, 2026&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; Venue: Shifa Convention Center, Perinthalmanna&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; 2 Days • 50+ Speakers • 5000+ Innovators
          </span>
          <span className="mr-8">
          📢 Date Change&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; ScaleUp Conclave 2026 – The AI Summit&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; New Dates: March 25 & 26, 2026&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; Venue: Shifa Convention Center, Perinthalmanna&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; 2 Days • 50+ Speakers • 5000+ Innovators

</span>          {/* <span className="mr-8">
          17000+ Total attendees | 900+ Local Business Heroes | 150+ Educational Institutions | 200+ Keynote Speakers | 30+ Investors in Attendance
          </span> */}
        </Marquee>
      </div>
    </div>
    </div>
>>>>>>> 08950c4bb45ababec07a92bd45b010adda4c4541
  );
}
