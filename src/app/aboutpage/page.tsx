"use client";

import { useEffect, useState } from "react";
import Breadcrumb from "../../components/Common/Breadcrumb";
import Image from "next/image";
import { useInView } from 'react-intersection-observer';




const AboutPage = () => {
    const [inViewLeft, setInViewLeft] = useState(false);
  const [inViewRight, setInViewRight] = useState(false);

  // Intersection Observer hooks
  const { ref: leftRef, inView: leftInView } = useInView({
    triggerOnce: true, // Trigger only once when it enters the view
    threshold: 0.5, // Trigger when 50% of the element is in view
  });

  const { ref: rightRef, inView: rightInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (leftInView) {
      setInViewLeft(true);
    }
    if (rightInView) {
      setInViewRight(true);
    }
  }, [leftInView, rightInView]);
  return (
    <>
      <div className="mt-10 text-center text-5xl font-bold px-4 py-10 text-white">
        <Breadcrumb
          pageName="About Us"
          description="We at Cloud creatorz love building tailor-made cloud solutions to help you generate tangible returns on investment and be your trusted companion to digital transformation."
        />
      </div>

      
      {/* Our Mission */}
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Our Mission</h2>
        </div>

        <div className="flex flex-wrap items-center justify-between mb-16">
          <div 
            ref={leftRef}
            className={`w-full lg:w-1/2 mb-8 lg:mb-0 scroll-animation ${inViewLeft ? 'slide-left' : ''}`}
          >
            <p className="text-[17px] text-white">
              At Cloud creatorz, we are on a mission to enable businesses to succeed in an increasingly cloud-first world. 
              <br />
              <br />
              We provide strategic guidance, cutting-edge cloud solutions, and managed services that empower organizations to streamline operations, enhance collaboration, and optimize costs. Our goal is to be the trusted partner that helps you transition to the cloud seamlessly and realize the full potential of your data and applications.
              <br />
              <br />
              Through innovation and a customer-first approach, we aim to unlock new opportunities for businesses to scale, innovate, and stay ahead of the competition in a fast-paced digital landscape.
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md h-auto">
              <Image
                src="/images/blog/about-2.png"  
                alt="Cloud Creatorz Achievements"
                width={819}
                height={480}
                layout="responsive"
                objectFit="cover"
                priority
              />
            </div>
          </div>
        </div>  

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <div className="text-4xl font-bold text-deep-teal mb-2">4+</div>
            <p className="text-xl text-white">Cloud services providers</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-deep-teal mb-2">100+</div>
            <p className="text-xl text-white">IT infra management</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-deep-teal mb-2">storage</div>
            <p className="text-xl text-white">Migrations support</p>
          </div>
        </div> 
        <br />

        {/* Mission Statement Section */}
        {/* <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4 text-white">Our Mission</h2>
          </div>

          <div className="flex flex-wrap items-center justify-between mb-16">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <p className="text-[20px] text-white">
                At Cloud creatorz, we are on a mission to enable businesses to succeed in an increasingly cloud-first world. 
                <br />
                <br />
                We provide strategic guidance, cutting-edge cloud solutions, and managed services that empower organizations to streamline operations, enhance collaboration, and optimize costs. Our goal is to be the trusted partner that helps you transition to the cloud seamlessly and realize the full potential of your data and applications.
                <br />
                <br />
                Through innovation and a customer-first approach, we aim to unlock new opportunities for businesses to scale, innovate, and stay ahead of the competition in a fast-paced digital landscape.
              </p>
            </div>


            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md h-auto">
                <Image
                  src="/images/blog/about-3.png"  
                  alt="Cloud Creatorz Mission"
                  width={819}
                  height={480}
                  layout="responsive"
                  objectFit="cover"
                  priority
                />
              </div>
            </div> 
          </div>
        </div>*/} 
      </div>

      {/* Values Section */}
      <section className="section_about bg-skyblue py-16">
        <div className="container-large">
          <div className="about_content-wrapper">
            <div className="spacer-medium"></div>
            <div className="about_head-wrapper">
              <div className="container mx-auto px-6">
                <div className="mb-12 text-center">
                  <div className="section-tag text-lg text-white-500">Culture and DNA</div>
                  <h2 className="text-4xl font-bold text-deep-teal mb-4">Our Values</h2>
                </div>
                <div 
                  ref={rightRef}
                  className={`w-full lg:w-full mb-12 lg:mb-0 scroll-animation ${inViewRight ? 'slide-right' : ''}`}
                  >
                  <p className="text-[20px] text-white text-center">
                        At Cloud Creatorz, our core values are at the heart of everything we do. 
                        We are dedicated to helping businesses not just adopt cloud technologies, 
                        but leverage them as a foundation for growth and transformation. 
                        <br />
                        Our focus on transparency, ongoing improvement, and customer-centricity ensures that 
                        we prioritize our clients' needs in every solution we provide. 
                        These guiding principles allow us to consistently surpass expectations and foster lasting relationships.
                  </p>
                </div>
              </div>
              <br />
              <br />
              {/* About Values Tabs */}
                <div className="about_tabs-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-20">
                  {/* Integrity Tab */}
                  <div className="about_tab bg-transparent p-6 rounded-lg border border-gray-300 shadow-lg hover:border-indigo-500 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-indigo-500 transition-all duration-300 ease-in-out">
                    <div className="about_tab-head-wrapper">
                      <h3 className="heading-style-h4 text-[25px] text-white font-bold">Integrity</h3>
                      <br />
                      <br />
                      <p className="paragraph text-[15px]">Our integrity is the foundation of all our relationships. We ensure that our clients’ data and assets are treated with the utmost care, upholding the highest standards of trust and accountability.</p>
                    </div>
                    <div className="spacer-large"></div>
                    <div className="about_cta-wrapper">
                      <div className="service_img-wrapper">
                        <Image
                          src="/images/logo/logo-1.png"
                          alt="Integrity Icon"
                          width={80}
                          height={80}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Innovation Tab */}
                  <div className="about_tab bg-transparent p-6 rounded-lg border border-gray-300 shadow-lg hover:border-blue-500 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-blue-500 transition-all duration-300 ease-in-out">
                    <div className="about_tab-head-wrapper">
                      <h3 className="heading-style-h4 text-[25px] text-white font-bold"><strong>Innovation</strong></h3>
                      <br />
                      <br />
                      <p className="paragraph-2 text-[15px]">Innovation drives us to explore new technologies, constantly refining our cloud solutions to deliver unmatched performance and value for our clients.</p>
                    </div>
                    <div className="spacer-large"></div>
                    <div className="about_cta-wrapper">
                      <div className="service_img-wrapper">
                        <Image
                          src="/images/logo/logo-3.png"
                          alt="Innovation Icon"
                          width={72}
                          height={72}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Collaboration Tab */}
                  <div className="about_tab bg-transparent p-6 rounded-lg border border-gray-300 shadow-lg hover:border-teal-500 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-teal-500 transition-all duration-300 ease-in-out">
                    <div className="about_tab-head-wrapper">
                      <h3 className="heading-style-h4 text-[25px] text-white font-bold"><strong>Collaboration</strong></h3>
                      <br />
                      <br />
                      <p className="paragraph-3 text-[15px]">We thrive on collaboration—whether within our teams or with our clients—because we believe the best results come from diverse perspectives and working together toward a shared goal.</p>
                    </div>
                    <div className="spacer-large"></div>
                    <div className="about_cta-wrapper">
                      <div className="service_img-wrapper">
                        <Image
                          src="/images/logo/logo-4.png"
                          alt="Collaboration Icon"
                          width={72}
                          height={72}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Excellence Tab */}
                  <div className="about_tab bg-transparent p-6 rounded-lg border border-gray-300 shadow-lg hover:border-yellow-500 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-yellow-500 transition-all duration-300 ease-in-out">
                    <h3 className="heading-style-h4 text-[25px] text-white font-bold"><strong>Excellence</strong></h3>
                    <div className="about_tab-head-wrapper is-doubled">
                      <br />
                      <br />
                      <p className="paragraph-4 text-[15px]">We are committed to excellence in every aspect of our business—from product development to customer service. We consistently exceed expectations, driving successful outcomes for our clients.</p>
                    </div>
                    <div className="spacer-large"></div>
                    <div className="about_cta-wrapper">
                      <div className="service_img-wrapper">
                        <Image
                          src="/images/logo/logo-5.png"
                          alt="Excellence Icon"
                          width={72}
                          height={72}
                        />
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
              {/* Our Achievements Section */}
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Purpose</h2>
        </div>
      </div>
      
      <div className="flex flex-wrap items-center justify-between mb-16 slide-left">
          {/* Text Content */}
          <div className="w-full lg:w-full mb-12 lg:mb-0">
                  <p className="text-[25px] text-white text-center">
                  exists to empower businesses to embrace
                    <br />
                    the future with confidence. By providing best-in-
                    <br />
                    class cloud solutions and unparalleled support, we
                    <br />
                    enable our clients to achieve their goals, surpass their
                    <br />
                    competition, and create a brighter, more connected world.
                  </p>
                </div>
          </div>
          <div className="container-large">
          <div className="about_content-wrapper">
            <div className="spacer-medium"></div>
            <div className="about_head-wrapper">
              <div className="container mx-auto px-6">
                <div className="mb-12 text-center">
                  <div className="section-tag text-lg text-white-500">Business Fundamentals</div>
                  <h2 className="text-4xl font-bold text-deep-teal mb-4">Our Principles</h2>
                </div>
                <div className="w-full lg:w-full mb-12 lg:mb-0">
                  <p className="text-[20px] text-white text-center">
                    Cloud creatorz is built upon a foundation of principles that guide our decisions and actions each day.
                    <br />
                    From prioritizing customer satisfaction to fostering a culture of continuous learning and improvement, our
                    <br />
                    principles ensure that we remain steadfast in <b>our commitment to excellence, integrity, and innovation.</b>
                  </p>
                </div>
              </div>
              <br />
              <br />
                  {/* About Values Tabs */}
                  <div className="about_tabs-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-20">
                    {/* Customer Centricity Tab */}
                    <div className="about_tab bg-transparent p-6 rounded-lg border border-gray-300 shadow-lg hover:border-pink-500 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-pink-500 transition-all duration-300 ease-in-out">
                      <div className="about_tab-head-wrapper">
                        <h3 className="heading-style-h4 text-[25px] text-white font-bold">Customer Centricity</h3>
                        <br />
                        <br />
                        <p className="paragraph text-[15px]">We prioritize the needs and objectives of our clients above all else, ensuring that every decision we make is driven by a commitment to their success.</p>
                      </div>
                      <div className="spacer-large"></div>
                      <div className="about_cta-wrapper">
                        <div className="service_img-wrapper">
                          <Image
                            src="/images/logo/logo-6.png"
                            alt="Customer Centricity Icon"
                            width={80}
                            height={80}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Reliability Tab */}
                    <div className="about_tab bg-transparent p-6 rounded-lg border border-gray-300 shadow-lg hover:border-blue-500 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-blue-500 transition-all duration-300 ease-in-out">
                      <div className="about_tab-head-wrapper">
                        <h3 className="heading-style-h4 text-[25px] text-white font-bold"><strong>Reliability</strong></h3>
                        <br />
                        <br />
                        <p className="paragraph-2 text-[15px]">We uphold the highest standards of reliability and security, safeguarding our clients data and ensuring uninterrupted access to our services.</p>
                      </div>
                      <div className="spacer-large"></div>
                      <div className="about_cta-wrapper">
                        <div className="service_img-wrapper">
                          <Image
                            src="/images/logo/logo-7.png"
                            alt="Reliability Icon"
                            width={72}
                            height={72}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Continuous Improvement Tab */}
                    <div className="about_tab bg-transparent p-6 rounded-lg border border-gray-300 shadow-lg hover:border-green-500 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-green-500 transition-all duration-300 ease-in-out">
                      <div className="about_tab-head-wrapper">
                        <h3 className="heading-style-h4 text-[20px] text-white font-bold"><strong>Continuous Improvement</strong></h3>
                        <br />
                        <br />
                        <p className="paragraph-3 text-[15px]">We never settle for the status quo. We are committed to continuous learning and improvement, always striving to enhance our products, services, and processes.</p>
                      </div>
                      <div className="spacer-large"></div>
                      <div className="about_cta-wrapper">
                        <div className="service_img-wrapper">
                          <Image
                            src="/images/logo/logo-8.png"
                            alt="Continuous Improvement Icon"
                            width={72}
                            height={72}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Adaptability Tab */}
                    <div className="about_tab bg-transparent p-6 rounded-lg border border-gray-300 shadow-lg hover:border-teal-500 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-teal-500 transition-all duration-300 ease-in-out">
                      <h3 className="heading-style-h4 text-[25px] text-white font-bold"><strong>Adaptability</strong></h3>
                      <div className="about_tab-head-wrapper is-doubled">
                        <br />
                        <br />
                        <br />
                        <p className="paragraph-4 text-[15px]">The only constant in the digital world is change. We embrace change with agility and adaptability, staying flexible and responsive to evolving customer needs and market trends.</p>
                      </div>
                      <div className="spacer-large"></div>
                      <div className="about_cta-wrapper">
                        <div className="service_img-wrapper">
                          <Image
                            src="/images/logo/logo-8.png"
                            alt="Adaptability Icon"
                            width={72}
                            height={72}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

            </div>
          </div>
        </div>
      <br />
      <br />
      <br /> 
      <br />
      <br />
      {/* Our Achievements Section */}
      <div className="container mx-auto px-6">
        <div className="mb-12 text-left">
        <div className="section-tag text-[26px] text-lg text-white-500 slide-right">Our People</div>
          <br />
          <h2 className="text-[30px] mb-4 text-white slide-left">We are Cloud Creatorz</h2>
        </div>

        <div className="flex flex-wrap items-center justify-between mb-16">
          {/* Text Content */}
          <div 
            ref={leftRef}
            className={`w-full lg:w-1/2 mb-8 lg:mb-0 scroll-animation ${inViewLeft ? 'slide-left' : ''}`}
          >
            <p className="text-[21px] text-white">
             At Cloud Creatorz, we stand at the forefront of cloud computing, where innovation, reliability, 
             and integrity drive everything we do. Together, let's reshape the future of business by unlocking 
             the true potential of the cloud, empowering organizations to achieve their goals with unmatched ease 
             and efficiency.</p>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md h-auto">
              <Image
                src="/images/blog/about-1.png" 
                alt="Cloud Creatorz Achievements"
                width={819}
                height={480}
                layout="responsive"
                objectFit="cover"
                priority
              />
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
