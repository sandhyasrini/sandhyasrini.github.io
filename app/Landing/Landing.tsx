import React from "react";
import "../globals.css";
import { description } from "@/utils/config";

export default function Landing() {
  return (
    <section className="h-[100%] flex flex-col m-[1-rem]">
      <div
        id="Home"
        className={`landing font-bold text-4xl sm:text-6xl text-white`}
      >
        <h1>Hi,</h1>
        <h1>
          I&#39;m{" "}
          <span className="text-[#A82810] shadow-lg font-bold">S</span>
          andhya,
        </h1>
        <h1>a Full Stack developer</h1>
      </div>
      <p
        className={`font-thin text-lg text-white my-[4rem] mx-0 description`}
      >
        {description}
      </p>
      <button
        type="button"
        className="text-[#009d68] w-[40%] text-[0.5rem] sm:w-[40%] sm:text-[1rem] sm:text-lg h-[100%] md:w-[20%] transition ease-in-out delay-150 bg-gray border border-[#009d68] focus:outline-none hover:bg-[#009d68] hover:text-white focus:ring-4 hover:-translate-y-1 hover:scale-110 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 align-middle"
      >
        Contact me!
      </button>{" "}
    </section>
  );
}