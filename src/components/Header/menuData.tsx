import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Services",
    path: "/Services",
    newTab: false,
  },
  {
    id: 33,
    title: "Architectures",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Resources",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "About Us",
        path: "/aboutpage",
        newTab: false,
      },
      {
        id: 42,
        title: "Contact Us",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Architectures",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Blogs",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Our mission & vision",
        path: "/blog-details",
        newTab: false,
      },
      /*{
        id: 46,
        title: "Sign In Page",
        path: "/signin",
        newTab: false,
      },*/
      {
        id: 47,
        title: "Book a call",
        path: "/bookacall",
        newTab: false,
      },
      /*{
        id: 48,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },*/
    ],
  },
];
export default menuData;
