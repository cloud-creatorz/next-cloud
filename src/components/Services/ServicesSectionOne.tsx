'use client';

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const ServicesSectionOne = () => {
  const [inView, setInView] = useState([false, false, false, false, false, false]);

  // Intersection Observer hooks for detecting visibility of sections
  const { ref: leftRef, inView: leftInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: rightRef, inView: rightInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Set items to be in view after intersection
  React.useEffect(() => {
    if (leftInView || rightInView) {
      setInView([true, true, true, true, true, true]);
    }
  }, [leftInView, rightInView]);

  // List component that triggers the animation based on inView state
  const List = ({ text, index }) => (
    <p
      className={`mb-5 flex items-center text-lg font-medium text-body-color ${
        inView[index] ? "slide-left" : ""
      }`}
    >
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Empowering Your Cloud Journey with Cloud Creatorz"
                paragraph="At Cloud Creatorz, we harness the power of cloud technology to deliver innovative solutions tailored to your business needs"
                mb="44px"
              />

              <div className="mb-12 max-w-[570px] lg:mb-0">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <div ref={leftRef}>
                      <List text="Scalable Cloud Solutions" index={0} />
                    </div>
                    <div ref={leftRef}>
                      <List text="AI-Driven Services" index={1} />
                    </div>
                    <div ref={leftRef}>
                      <List text="Robust Security Protocols" index={2} />
                    </div>
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <div ref={rightRef}>
                      <List text="24/7 Expert Support" index={3} />
                    </div>
                    <div ref={rightRef}>
                      <List text="Seamless Cloud Migration" index={4} />
                    </div>
                    <div ref={rightRef}>
                      <List text="Cost-Effective Strategies" index={5} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/services/services-image.png"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/services/services-image.png"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSectionOne;
