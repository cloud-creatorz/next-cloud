import ServicesSectionOne from "@/components/Services/ServicesSectionOne";
import ServicesSectionTwo from "@/components/Services/ServicesSectionTwo";
// import Blog from "@/components/blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
// import Pricing from "@/components/Pricing";
// import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Cloud Creatorz",
  description: "Cloud and AI solutions",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <ServicesSectionOne />
      <ServicesSectionTwo />
      <Contact />
    </>
  );
}