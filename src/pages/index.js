import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Hero from "@/components/Hero/Hero";
import Slider from "@/components/Slider/Slider";
import { SliderData } from "@/components/Slider/SliderData";
import Instagram from "@/components/Instagram/Instagram";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Photography App</title>
      </Head>

      <Hero
        heading="Captur Photography"
        message="I capture moments in nature and keep them alive."
      />
      <Slider slides={SliderData} />
      <Instagram />
    </>
  );
}
