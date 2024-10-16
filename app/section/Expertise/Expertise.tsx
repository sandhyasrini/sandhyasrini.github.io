"use client";
import React, { useRef } from "react";
import "../../globals.css";
import { about_me } from "@/utils/config";
import ProgressBarComponent from "@/app/common/components/ProgressBarComponent";
import { SectionHeading } from "@/app/common/components/SectionHeading";
import { useIsInViewport } from "@/app/common/hooks/useIsInViewPort";

function Expertise() {
  const ref = useRef(null);

  const isInViewport = useIsInViewport(ref);
  return (
    <section
      id="expertise"
      className="mt-[10rem] sm:my-[10rem] text-white"
      ref={ref}
    >
      <SectionHeading id="02." title="Expertise" isInView={isInViewport} />
      <div className={`grid md:grid-cols-2 grid-rows-2 md:grid-rows-1 mt-[4rem] sm:my-[4rem] leading-8 text-justify }`}>
        <div className={`about_me px-0 sm:px-5 ${isInViewport && 'animate-[slideup_3s_ease-in-out_1]'}`}>
          {about_me.map((data, index) => {
            return (
              <p key={index} className="my-[1rem] font-thin text-md">
                {data.text}
                {data?.link_url && (
                  <a
                    href={data.link_url}
                    className="text-[#009d68]"
                    target={data?.target && "_blank"}
                  >
                    {data.link_text}
                  </a>
                )}
                {data?.connector && (
                  <span className="my-[1rem] font-thin text-md">
                    {data.connector}
                  </span>
                )}
                {data?.second_text && (
                  <a
                    href={data.second_url}
                    className="text-[#009d68]"
                    target={data?.target && "_blank"}
                  >
                    {data.second_text}
                  </a>
                )}
              </p>
            );
          })}
        </div>
        <ProgressBarComponent />
      </div>
    </section>
  );
}

export default Expertise;
