import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Feature from "./_components/Feature";
import Footer from "./_components/Footer";
import Documentation from "./_components/Documentation";
import Team from "./_components/Team";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Feature/>
      <Team/>
      <Documentation/>
      <Footer/>
    </>
  );
}
