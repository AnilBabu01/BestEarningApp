import Head from "next/head";
import React, { useEffect } from "react";
import Slider from "@/Components/Lending/Home/Slider";
import GameList from "@/Components/Lending/Home/GameList";
import WhyChoice from "@/Components/Lending/Home/WhyChoice";
import Footer from "@/Components/Lending/Home/Footer";
import Banner from "@/Components/Lending/Home/Banner";
export default function Home({ setLoadingshow, loadingshow }) {
  useEffect(() => {
    setLoadingshow(true);
  }, []);

  return (
    <>
      <Head>
        <title>BestEarningApp</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {loadingshow && (
          <>
            {/* <Banner/> */}
            <Slider />
            <GameList />
            <WhyChoice />
            <Footer />
          </>
        )}
      </main>
    </>
  );
}
