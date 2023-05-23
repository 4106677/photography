import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Hero from "@/components/Hero/Hero";

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
    </>
  );
}
