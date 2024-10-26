import HeroCarousel from "@/components/HeroCarousel";
import Searchbar from "@/components/Searchbar";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <>
      <section className="px-6 md:px-20 py-24 border-2 ">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Find the Best Deals, Track the Best Prices
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </p>
            <h1 className="head-text">
              Find the Best Deals,
              <span className="text-primary"> Track the Best Prices</span>
            </h1>
            <p className="mt-6">
              Stay Informed, Stay Ahead – Car Price Tracking Made Easy
            </p>
            <Searchbar />
          </div>
          <HeroCarousel />
        </div>
      </section>

      <section className="trending-section">
        <h2 className="section-text"> Trending </h2>

        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {["Apple Iphone", "Book", "Sneakers"].map((product) => (
            <div>{product}</div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
