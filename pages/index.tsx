import Nav from "@/components/layout/Nav";
import Footer from "@/components/home/Footer";
import Introduction from "@/components/home/Introduction";
import RulesAndGuidelines from "@/components/home/RulesAndGuidelines";
import Hero from "@/components/home/Hero";
import JudgingCriteria from "@/components/home/JudgingCriteria";
import Faq from "@/components/home/Faq";
import Timeline from "@/components/home/Timeline";
import Prizes from "@/components/home/Prizes";
import PartnersAndSponsors from "@/components/home/PartnersAndSponsors";
import PrivacyPolicy from "@/components/home/PrivacyPolicy";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>GetLinked Tech Hackathon 1.0</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg"></link>
      </Head>

      <Nav />
      <Hero />
      <Introduction />
      <RulesAndGuidelines />
      <JudgingCriteria />
      <Faq />
      <Timeline />
      <div className="bg-[#120b21b1] bg-opacity-[98%] bg-[url(/images/prize-bg-light.png)]">
        <Prizes />
      </div>
      <PartnersAndSponsors />
      <PrivacyPolicy />
      <Footer />
    </>
  );
}
