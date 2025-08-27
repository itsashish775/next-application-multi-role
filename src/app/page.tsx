"use client";

import Link from "next/link";
import { AuthService } from "@/lib/auth";
import PublicHeader from "@/components/PublicHeader";
import Slider, { Settings } from "react-slick";
import HeroBanner from "@/components/Sections/Banners/HeroBanner";
import Services from "@/components/Sections/sections/ServiceSection";
import WhyUsSection from "@/components/Sections/sections/WhyUs";
import Footer from "@/components/PublicFooter";
import FaqSection from "@/components/Sections/sections/FaqSection";
const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  autoplaySpeed: 1500,
  arrows: false,
  autoplay: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};

export default function Home() {
  const user = AuthService.getCurrentUser();

  return (
    <div className='min-h-screen bg-gray-50'>
      <PublicHeader />

      <main>
        <div className='mx-auto  px-4 sm:px-6 lg:px-8'>
          {/* Hero Section */}
          <HeroBanner user={user} />

          {/* Testimonials Carousel */}
          <div className='mt-20'>
            <Services />
          </div>
          <div>
            <WhyUsSection />
          </div>
          <div>
            <FaqSection/>
          </div>

      

          
        </div>
      </main>
      <div className="mt-4">
        <Footer />
      </div>
    </div>
  );
}
