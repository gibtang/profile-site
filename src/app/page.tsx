import Image from 'next/image';
import { Suspense } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Profile from '@/components/Profile';
import WhyChooseJohn from '@/components/WhyChooseJohn';
import AboutJohn from '@/components/AboutJohn';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white group/design-root overflow-x-hidden font-['Inter','Noto_Sans',sans-serif]">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <Hero />
            <Profile />
            <WhyChooseJohn />
            <AboutJohn />
            <Services />
            {/* <CaseStudies /> */}
            {/* <Testimonials /> */}
          </div>
        </div>
      </div>
    </div>
  );
}