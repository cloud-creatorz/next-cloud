import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Cloud Creatorz offers managed cloud, AI, 
                cloud migration products and IT infra management services
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                We are a passionate team of tech 
                enthusiasts who believe in using technology to solve 
                problems and deliver business outcomes
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/blog-details"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Architectures
                  </Link>
                  <Link
                    href="/signup"
                    className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Explore Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
  width={450}
  height={556}
  viewBox="0 0 450 556"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clipPath="url(#clip0_0_1)">
    <path
      d="M277 288C401.264 288 502 187.264 502 63C502 -61.2641 401.264 -162 277 -162C152.736 -162 52 -61.2641 52 63C52 187.264 152.736 288 277 288Z"
      fill="url(#paint0_linear_0_1)"
    />
    <path
      d="M44 182C53.9411 182 62 173.941 62 164C62 154.059 53.9411 146 44 146C34.0589 146 26 154.059 26 164C26 173.941 34.0589 182 44 182Z"
      fill="url(#paint1_radial_0_1)"
    />
    <path
      d="M71 232C89.7777 232 105 216.778 105 198C105 179.222 89.7777 164 71 164C52.2223 164 37 179.222 37 198C37 216.778 52.2223 232 71 232Z"
      fill="url(#paint2_radial_0_1)"
    />
    <path
      opacity={0.8}
      d="M71.885 226.537C41.0205 293.108 69.9663 372.095 136.537 402.959C203.108 433.823 282.095 404.878 312.959 338.307C343.823 271.736 314.878 192.749 248.307 161.885C181.736 131.021 102.749 159.966 71.885 226.537Z"
      stroke="url(#paint3_linear_0_1)"
    />
    <path
      opacity={0.8}
      d="M404.744 290.92C458.581 259.837 476.423 189.949 444.594 134.82C412.766 79.6908 343.319 60.1979 289.482 91.2811C235.644 122.364 217.802 192.253 249.631 247.382C281.46 302.511 350.906 322.004 404.744 290.92Z"
      stroke="url(#paint4_linear_0_1)"
    />
    <path
      opacity={0.8}
      d="M73.4943 186.027C22.9634 239.613 25.4404 324.017 79.0269 374.548C132.613 425.079 217.017 422.602 267.548 369.015C318.079 315.429 315.602 231.025 262.015 180.494C208.429 129.963 124.025 132.44 73.4943 186.027Z"
      fill="url(#paint5_linear_0_1)"
    />
    <path
      opacity={0.7}
      d="M379.975 202.173C378.111 144.761 347.049 99.1731 310.6 100.356C282.946 101.254 260.037 128.743 251.199 166.859C247.688 169.133 240.78 188.349 241.375 206.672C242.493 241.109 261.137 268.472 283 267.762L441.4 262.62C463.262 261.91 480.093 233.395 478.975 198.959C477.857 164.523 459.213 137.159 437.35 137.869C427.384 138.193 418.166 128.996 413.921 114.746C428.898 123.262 404.254 97.3161 376.6 98.2138C340.152 99.397 312.111 146.904 313.975 204.315L379.975 202.173Z"
      fill="url(#paint6_linear_0_1)"
    />
    <path
      opacity={0.7}
      d="M71.026 62.816C70.3562 42.1842 56.4205 25.8913 39.9022 26.4275C27.3694 26.8343 16.9057 36.7855 12.7851 50.5138C11.1876 51.3416 7.99903 58.2704 8.21279 64.8551C8.61452 77.2304 16.9791 87.0098 26.8871 86.6881L98.6736 84.3578C108.582 84.0361 116.294 73.7348 115.893 61.3595C115.491 48.9842 107.126 39.2048 97.2183 39.5264C92.7017 39.673 88.5531 36.395 86.673 31.2857C93.4331 34.3012 82.346 25.0496 69.8132 25.4565C53.2948 25.9927 40.4452 43.1552 41.115 63.787L71.026 62.816Z"
      fill="url(#paint7_linear_0_1)"
    />
    <path
      opacity={0.7}
      d="M409.541 394.277C409.205 383.938 403.83 375.721 397.536 375.925C392.761 376.08 388.812 381.025 387.295 387.887C386.689 388.295 385.501 391.754 385.608 395.054C385.809 401.255 389.035 406.188 392.81 406.065L420.162 405.177C423.937 405.055 426.837 399.924 426.635 393.722C426.434 387.52 423.208 382.588 419.433 382.711C417.712 382.767 416.118 381.108 415.381 378.541C417.97 380.078 413.708 375.4 408.933 375.555C402.639 375.759 397.808 384.308 398.144 394.647L409.541 394.277Z"
      fill="url(#paint8_linear_0_1)"
    />
  </g>
  <defs>
    <linearGradient
      id="paint0_linear_0_1"
      x1={-54.5003}
      y1={-178}
      x2={222}
      y2={288}
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#4A6CF7" />
      <stop offset={1} stopColor="#4A6CF7" stopOpacity={0} />
    </linearGradient>
    <radialGradient
      id="paint1_radial_0_1"
      cx={0}
      cy={0}
      r={1}
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(44 164) rotate(90) scale(18)"
    >
      <stop offset={0.145833} stopColor="#4A6CF7" stopOpacity={0} />
      <stop offset={1} stopColor="#4A6CF7" stopOpacity={0.08} />
    </radialGradient>
    <radialGradient
      id="paint2_radial_0_1"
      cx={0}
      cy={0}
      r={1}
      gradientUnits="userSpaceOnUse"
      gradientTransform="translate(71 198) rotate(90) scale(34)"
    >
      <stop offset={0.145833} stopColor="#4A6CF7" stopOpacity={0} />
      <stop offset={1} stopColor="#4A6CF7" stopOpacity={0.08} />
    </radialGradient>
    <linearGradient
      id="paint3_linear_0_1"
      x1={95}
      y1={314}
      x2={278.512}
      y2={122}
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#4A6CF7" />
      <stop offset={1} stopColor="#4A6CF7" stopOpacity={0} />
    </linearGradient>
    <linearGradient
      id="paint4_linear_0_1"
      x1={419.261}
      y1={293.455}
      x2={314.026}
      y2={213.355}
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#4A6CF7" />
      <stop offset={1} stopColor="#4A6CF7" stopOpacity={0} />
    </linearGradient>
    <linearGradient
      id="paint5_linear_0_1"
      x1={99.3507}
      y1={373.713}
      x2={219.779}
      y2={186.723}
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#4A6CF7" />
      <stop offset={1} stopColor="#4A6CF7" stopOpacity={0} />
    </linearGradient>
    <linearGradient
      id="paint6_linear_0_1"
      x1={231.221}
      y1={347.883}
      x2={254.998}
      y2={205.597}
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#4A6CF7" />
      <stop offset={1} stopColor="#4A6CF7" stopOpacity={0} />
    </linearGradient>
    <linearGradient
      id="paint7_linear_0_1"
      x1={16.5977}
      y1={58.3422}
      x2={128.798}
      y2={11.2154}
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#4A6CF7" />
      <stop offset={1} stopColor="#4A6CF7" stopOpacity={0} />
    </linearGradient>
    <linearGradient
      id="paint8_linear_0_1"
      x1={382.477}
      y1={354.732}
      x2={324.377}
      y2={374.298}
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#4A6CF7" />
      <stop offset={1} stopColor="#4A6CF7" stopOpacity={0} />
    </linearGradient>
  </defs>
</svg>

        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            <path
              d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="url(#paint1_linear_25:218)"
            />
            <path
              d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
              stroke="url(#paint2_linear_25:218)"
            />
            <path
              d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
              stroke="url(#paint3_linear_25:218)"
            />
            <circle
              opacity="0.8"
              cx="214.505"
              cy="60.5054"
              r="49.7205"
              transform="rotate(-13.421 214.505 60.5054)"
              stroke="url(#paint4_linear_25:218)"
            />
            <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="184.389"
                y1="69.2405"
                x2="184.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_25:218"
                x1="156.389"
                y1="69.2405"
                x2="156.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_25:218"
                x1="125.389"
                y1="69.2405"
                x2="125.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_25:218"
                x1="93.8507"
                y1="67.2674"
                x2="89.9278"
                y2="210.214"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:218"
                x1="214.505"
                y1="10.2849"
                x2="212.684"
                y2="99.5816"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint5_radial_25:218"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(220 63) rotate(90) scale(43)"
              >
                <stop offset="0.145833" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0.08" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
