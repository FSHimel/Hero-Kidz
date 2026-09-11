import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-cente space-y-5">
      <div className="flex-1 space-y-5">
        <h1 className="text-4xl md:text-6xl font-bold md:leading-18">
          Give Your Child A <span className="text-primary">Enjoyable Life</span>
        </h1>
        <h2 className="text-xl">Buy all the products up to 15% discount</h2>
        <button className="btn btn-primary btn-outline">Explore Now</button>
      </div>
      <div className="flex-1">
        <Image
          src="/assets/hero.png"
          alt="banner"
          width={500}
          height={400}
        ></Image>
      </div>
    </div>
  );
};

export default Banner;
