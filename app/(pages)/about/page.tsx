"use client";
import React from "react";
import MyStack from "@/components/MyStack/MyStack";
// import ShowCase from "@/components/ShowCase";
// import Testimonials from "@/components/Testimonials";
import MyServices from "@/components/MyServices/MyServices";

export default function SearvicesPage() {
  return (
    <div className="flex lg:flex-1 flex-col gap-0 h-min px-5 overflow-hidden p-0 relative lg:px-0 w-full flex-wrap lg:flex-nowrap items-center justify-start">
      <div className="gap-[50px] flex-col max-w-full w-full lg:max-w-[750px] lg:w-[80%] lg:flex-nowrap flex items-center flex-none h-min justify-center  relative overflow-hidden lg:overflow-visible p-[80px_0px]  ">
        <MyStack />
        <MyServices />
        {/* <ShowCase showData={2} isMore /> */}
        {/* <Testimonials /> */}
      </div>
    </div>
  );
}
