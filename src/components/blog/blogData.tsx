import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Securing Your Data in the Cloud Environment: Best Practices by Cloud Creatorz",
    paragraph:
      "As businesses continue to transition to cloud infrastructures, maintaining the confidentiality, integrity, and availability of data remains critically important. Cloud Creatorz, a prominent name in cloud solutions, not only understands the gravity of these challenges but also leads the way in delivering robust and all-encompassing security measures. This article explores the top strategies advocated by Cloud Creatorz to protect your data in today’s cloud environments.",
    image: "/images/blog/blog-01.jpeg",
    author: {
      name: "Shifana",
      image: "/images/blog/author-01.png",
      designation: "Cloud Engineer",
    },
    tags: ["Security"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: "Unlocking Cloud Compliance: 5 Key Strategies by Cloud Creatorz",
    paragraph:
      "In today’s data-driven world, securing and managing information is more crucial than ever. As organizations increasingly rely on cloud platforms, ensuring cloud compliance becomes essential for data security and regulatory adherence. This article explores five key strategies offered by Cloud Creatorz to enhance cloud compliance, ensuring your data remains secure while meeting industry standards and regulatory requirements.",
    image: "/images/blog/blog-02.jpeg",
    author: {
      name: "Shifana",
      image: "/images/blog/author-01.png",
      designation: "Cloud Engineer",
    },
    tags: ["Cloud solutions"],
    publishDate: "2024",
  },
  {
    id: 3,
    title: "Implementing AI/ML for Technical Decision Makers: A Guide by Cloud Creatorz.",
    paragraph:
      "In the fast-evolving world of technology, Artificial Intelligence (AI) and Machine Learning (ML) stand out as revolutionary tools. For technical decision-makers, building a resilient infrastructure that meets AI/ML demands is key to tapping into their transformative potential. This guide highlights the essential components of AI/ML infrastructure, outlines Cloud Creatorz's strategic approaches, and provides insights into creating a future-ready AI/ML environment.",
    image: "/images/blog/blog-03.jpeg",
    author: {
      name: "Reyas Khan",
      image: "/images/blog/author-03.png",
      designation: "Software Engineer",
    },
    tags: ["AI solutions"],
    publishDate: "2024",
  },
];
export default blogData;
