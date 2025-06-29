import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import RealCustomersSection from '@/components/RealCustomersSection';
import ClientBlocksSection from '@/components/ClientBlocksSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <RealCustomersSection />
      <ClientBlocksSection />
      <Footer />
    </main>
  );
}