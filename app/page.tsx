import { Features } from "@/app/_components/features";
import { Footer } from "@/app/_components/footer";
import { Header } from "@/app/_components/header";
import { Hero } from "@/app/_components/hero";
import { HowItWorks } from "@/app/_components/how-it-works";

const Home = () => (
  <div className="size-full bg-gray-50">
    <Header />
    <Hero />
    <Features />
    <HowItWorks />
    <Footer />
  </div>
);

export default Home;
