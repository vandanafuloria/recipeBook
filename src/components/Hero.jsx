import React from "react";
import image from "../assets/hero.png";

export default function Hero() {
  return (
    <>
      <div className=" rounded-3xl overflow-hidden mt-[10rem]">
        <img
          className="w-full h-50 md:h-80 object-fill"
          src="https://www.realsimple.com/thmb/sJwa-QiYX3CihmhktCoRqMS4J2w=/1500x375/filters:no_upscale():max_bytes(200000):strip_icc()/food-banner-2000-5b5c15c00f08412ea9a186aa98147634.jpg"
          alt="hero image"
        />
      </div>
    </>
  );
}
