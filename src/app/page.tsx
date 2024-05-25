"use client"
import Button from "@/components/Button";
import ShoeCard from "@/components/ShoeCard";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [shoe, setShoe] = useState("/images/big-shoe1.png");

  return (
    <main className="relative">
      <section id="hero" className="lg:padding-l wide:padding-r w-full flex lg:flex-row flex-col justify-center min-h-screen gap-10 lg:gap-0 xl:gap-10 max-container">
        <div className="relative xl:w-2/5 lg:w-[50%] flex flex-col justify-center items-start w-full max-lg:padding-x pt-[81px]">
          <p className="text-xl font-montserrat text-my-blue z-20">Our Summer Collection</p>
          <h1 className="mt-3 font-palanquin text-[78px] leading-[89px] max-sm:text-[72px] max-sm:leading-[82px] font-bold">
            <span className="z-10 lg:whitespace-nowrap relative pr-14 lg:bg-white">The New Arrival</span>
            <br />
            <span className="text-my-blue inline-block mt-1">Nike</span> Shoes
          </h1>
          <p className="font-montserrat text-slate-800 text-lg leading-8 mt-6 mb-10 sm:max-w-sm">Discover stylish Nike arrivals, quality, comfort, and innovation for your active life</p>
          <Button label="Shop Now" icon="./icons/arrow-right.svg"/>
          <div className="flex justify-start items-start flex-wrap w-full mt-6 gap-16">
            <div>
              <p className="text-[42px] font-palanquin font-bold">1k +</p>
              <p className="leading-7 font-montserrat text-slate-800">Brands</p>
            </div>
            <div>
              <p className="text-[42px] font-palanquin font-bold">500 +</p>
              <p className="leading-7 font-montserrat text-slate-800">Shops</p>
            </div>
            <div>
              <p className="text-[42px] font-palanquin font-bold">250k +</p>
              <p className="leading-7 font-montserrat text-slate-800">Customers</p>
            </div>
          </div>
        </div>
        <div className="relative flex-1 flex justify-center items-center lg:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
          <Image className="object-contain relative pb-6 xl:w-[500px] xl:h-[500px] sm:w-[400px] sm:h-[300px] h-[300px]" src={shoe} alt="Shoe collection" width={500} height={500} />
          <div className="flex sm:gap-6 gap-4 absolute bottom-7">
            <ShoeCard img="/images/big-shoe1.png" shoe={shoe} change={() => {setShoe("/images/big-shoe1.png")}} />
            <ShoeCard img="/images/big-shoe2.png" shoe={shoe} change={() => {setShoe("/images/big-shoe2.png")}} />
            <ShoeCard img="/images/big-shoe3.png" shoe={shoe} change={() => {setShoe("/images/big-shoe3.png")}} />
          </div>
        </div>
      </section>
      <section className="padding">
        PopularProducts
      </section>
      <section className="padding">
        SuperQuality
      </section>
      <section className="padding-x py-10">
        Services
      </section>
      <section className="padding">
        SpecialOffer
      </section>
      <section className="padding bg-pale-blue">
        CustomerReviews
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        Subscribe
      </section>
      <section className="padding-x bg-black padding-t pb-8">
        Footer
      </section>
    </main>
  );
}
