import Breadcrumb from "@/components/Common/Breadcrumb";
import Calendly from "../signup/calendly"; 
import Contact from "@/components/Contact";
import { Metadata } from "next";
import BookAppointment from "./book-appointment";
import { PiCheckCircle } from "react-icons/pi";

export const metadata: Metadata = {
  title: "Contact Page | Cloud CreatorZ",
  description: "This is Contact Page for Cloud CreatorZ",
  // other metadata
};

const Bookacall = () => {
  return (
    <>
      <div style={{ marginTop: '30px' }}> 
        <Breadcrumb
          pageName="Contact Us"
          description="We're here to help. Reach out with any questions or feedback, and we'll get back to you within 24 hrs."
        />
        <div className="w-1/4 px-3 my-8 pl-60">
          <BookAppointment />
      </div>
      </div>
      <section className="relative z-10 overflow-hidden pt-6 pb-4 md:pb-6 lg:pb-8 lg:pt-[15px]">
        <div className="container mx-auto flex flex-wrap">
          <div className="w-1/2 px-4"> 
            <div className="shadow-lg mx-auto max-w-md rounded bg-white px-8 py-10 dark:bg-dark sm:p-[60px]">
              <h3 className="mb-4 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                Book a call
              </h3>
              <p className="mb-8 text-center text-base font-medium text-body-color">
                Schedule a meeting with us to discuss how we can help your business grow.
              </p>
              {[{ title: "Development + Design", description: "Turn your ideas into reality with our development and design services." }, 
                 { title: "Free Consultation", description: "Get expert advice on how to improve your business and increase your online presence." }, 
                 { title: "Technical Support", description: "Get technical support for your website or application." }]
                .map((item, index) => (
                  <div key={index} className="flex gap-x-4 py-4">
                    <PiCheckCircle className="rounded-md text-[#3d80d7] text-2xl flex-shrink-0" />
                    <ul>
                      <h3 className="text-lg font-bold text-gray-700">{item.title}</h3>
                      <div className="text-gray-400">{item.description}</div>
                    </ul>
                  </div>
                ))}
            </div>
          </div>
              <div className="w-full lg:w-1/2 px-4">
                <img
                  src="/images/services/book.gif"  
                  alt="Description of image"
                  className="w-full h-auto object-cover"
                  style={{ marginTop: '120px' }}
                />
              </div>
        </div>
      </section>
    </>
  );
};

export default Bookacall;
