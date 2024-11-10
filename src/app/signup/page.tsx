import Link from "next/link";
import { Metadata } from "next";
import Calendly from "./calendly"; 
import { PiCheckCircle } from "react-icons/pi";

export const metadata: Metadata = {
  title: "Cloud Creatorz",
  description: "Book a meeting.",
};

const SignupPage = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container mx-auto flex flex-wrap">
          <div className="w-1/2 px-4"> {/* Left side for title and description */}
            <div className="shadow-lg mx-auto max-w-md rounded bg-white px-8 py-10 dark:bg-dark sm:p-[60px]">
              <h3 className="mb-4 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                Book a call
              </h3>
              <p className="mb-8 text-center text-base font-medium text-body-color">
                Schedule a meeting with us to discuss how we can help your business grow.
              </p>
              {[
                {
                  title: "Development + Design",
                  description: "Turn your ideas into reality with our development and design services.",
                },
                {
                  title: "Free Consultation",
                  description: "Get expert advice on how to improve your business and increase your online presence.",
                },
                {
                  title: "Technical Support",
                  description: "Get technical support for your website or application.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-x-4 py-4">
                  <PiCheckCircle className="rounded-md text-[#3d80d7] text-2xl flex-shrink-0" />
                  <ul>
                    <h3 className="text-lg font-bold text-gray-700">{item.title}</h3>
                    <div className="text-gray-400">{item.description}</div>
                  </ul>
                </div>
              ))}
              <div className="mt-6">
                {/* Additional Signup Form Elements Can Be Added Here */}
              </div>
            </div>
          </div>
          <div className="w-1/2 px-4"> {/* Right side for Calendly */}
            <Calendly />
          </div>
        </div>
      </section>
      <div className="absolute left-0 top-0 z-[-1]">
        <svg
          width="1440"
          height="969"
          viewBox="0 0 1440 969"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_95:1005"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1440"
            height="969"
          >
            <rect width="1440" height="969" fill="#090E34" />
          </mask>
          <g mask="url(#mask0_95:1005)">
            <path
              opacity="0.1"
              d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
              fill="url(#paint0_linear_95:1005)"
            />
            <path
              opacity="0.1"
              d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
              fill="url(#paint1_linear_95:1005)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_95:1005"
              x1="1178.4"
              y1="151.853"
              x2="780.959"
              y2="453.581"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_95:1005"
              x1="160.5"
              y1="220"
              x2="1099.45"
              y2="1192.04"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default SignupPage;
