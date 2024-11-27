import React from 'react';
import { BottomSection } from '@/app/_components/bottom-section';
import { Footer } from '@/app/_components/footer';
import { Header } from '@/app/_components/header';
import { HeroSection } from '@/app/_components/hero-section';
import { MainSection } from '@/app/_components/main-section';

const Home = () => (
  <div className="flex min-h-screen flex-col bg-background">
    <Header />
    <main className="flex-1">
      <HeroSection />
      <MainSection />
      <BottomSection />
    </main>
    <Footer />
  </div>
);

export default Home;
