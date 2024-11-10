import ServicesSectionOne from "@/components/Services/ServicesSectionOne";
import ServicesSectionTwo from "@/components/Services/ServicesSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Creatorz",
  description: "Cloud and AI solutions",
  // other metadata
};

const Servicespage = () => {
  return (
    <>
      <div style={{ marginTop: '70px' }}>
      <Breadcrumb
        pageName="Cloud services"
        description="We provide various services include Cloud, AI inovation, etc."
      />
      </div>
      <ServicesSectionOne />
      <ServicesSectionTwo />
    </>
  );
};

export default Servicespage;
