import React from "react";
import { useRoutes } from "react-router-dom";
import HomePage1 from "../Pages/index1/Index.tsx";
import HomePage2 from "../Pages/index2/Index.tsx";
import HomePage3 from "../Pages/index3/Index.tsx";
import HomePage4 from "../Pages/index4/Index.tsx";
import HomePage5 from "../Pages/index5/Index.tsx";
import HomePage6 from "../Pages/index6/Index.tsx";
import HomePage7 from "../Pages/index7/Index.tsx";
import HomePage8 from "../Pages/index8/Index.tsx";
import HomePage9 from "../Pages/index9/Index.tsx";
import HomePage10 from "../Pages/index10/Index.tsx";
import SingleHomePage1 from "../Pages/single-index1/Index.tsx";
import SingleHomePage2 from "../Pages/single-index2/Index.tsx";
import SingleHomePage3 from "../Pages/single-index3/Index.tsx";
import SingleHomePage4 from "../Pages/single-index4/Index.tsx";
import SingleHomePage5 from "../Pages/single-index5/Index.tsx";
import SingleHomePage6 from "../Pages/single-index6/Index.tsx";
import SingleHomePage7 from "../Pages/single-index7/Index.tsx";
import SingleHomePage8 from "../Pages/single-index8/Index.tsx";
import SingleHomePage9 from "../Pages/single-index9/Index.tsx";
import SingleHomePage10 from "../Pages/single-index10/Index.tsx";

import Case from "../Pages/Case/index.tsx";
import CaseSingle from "../Pages/Case-Single/index.tsx";


import BlogPage from "../Pages/Blog/index.tsx";
import BlogLeft from "../Pages/Blog left/index.tsx";
import BlogRight from "../Pages/Blog Right/index.tsx";
import BlogSingle from "../Pages/Blog Single/index.tsx";

import Service1Page from "../Pages/service1/index.tsx";
import Service2Page from "../Pages/service2/index.tsx";
import Service3Page from "../Pages/service3/index.tsx";
import Service4Page from "../Pages/service4/index.tsx";
import Service5Page from "../Pages/service5/index.tsx";

import FAQPage from "../Pages/Faq/index.tsx";
import TestimonialPage from "../Pages/testimonials/index.tsx";
import PricingPage from "../Pages/pricing/index.tsx";
import About from "../Pages/About/index.tsx";
import Contact from "../Pages/Contact/index.tsx";
import Team from "../Pages/Team/index.tsx";

import NotFoundPage from "../Pages/404/index.tsx";

import { Outlet } from 'react-router-dom';
import Header from "../Layouts/Header.tsx";
import Footer from "../Layouts/Footer.tsx";

const BlogLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};


const routesConfig = [
  // Home page routes
  { path: "/", element: <HomePage1 /> },
  { path: "/single-index1", element: <SingleHomePage1 /> },
  { path: "/index2", element: <HomePage2 /> },
  { path: "/single-index2", element: <SingleHomePage2 /> },
  { path: "/index3", element: <HomePage3 /> },
  { path: "/single-index3", element: <SingleHomePage3 /> },
  { path: "/index4", element: <HomePage4 /> },
  { path: "/single-index4", element: <SingleHomePage4 /> },
  { path: "/index5", element: <HomePage5 /> },
  { path: "/single-index5", element: <SingleHomePage5 /> },
  { path: "/index6", element: <HomePage6 /> },
  { path: "/single-index6", element: <SingleHomePage6 /> },
  { path: "/index7", element: <HomePage7 /> },
  { path: "/single-index7", element: <SingleHomePage7 /> },
  { path: "/index8", element: <HomePage8 /> },
  { path: "/single-index8", element: <SingleHomePage8 /> },
  { path: "/index9", element: <HomePage9 /> },
  { path: "/single-index9", element: <SingleHomePage9 /> },
  { path: "/index10", element: <HomePage10 /> },
  { path: "/single-index10", element: <SingleHomePage10 /> },

  // Case routes
  { path: "/case", element: <Case /> },
  { path: "/case-single", element: <CaseSingle /> },

  // Blog routes
  {
    path: "/",
    element: <BlogLayout />,
    children: [
      { path: "/blog", element: <BlogPage /> },
      { path: "/blog-left", element: <BlogLeft /> },
      { path: "/blog-right", element: <BlogRight /> },
      { path: "/blog-single", element: <BlogSingle /> },
    ],
  },

  // Services routes
  { path: "/service1", element: <Service1Page /> },
  { path: "/service2", element: <Service2Page /> },
  { path: "/service3", element: <Service3Page /> },
  { path: "/service4", element: <Service4Page /> },
  { path: "/service5", element: <Service5Page /> },

  // Other routes
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/team", element: <Team /> },
  { path: "/faq", element: <FAQPage /> },
  { path: "/testimonials", element: <TestimonialPage /> },
  { path: "/pricing", element: <PricingPage /> },

  // Not found routes
  { path: "/404", element: <NotFoundPage /> },
  { path: "/*", element: <NotFoundPage /> },
];

const AppRoutes: React.FC = () => {
  const element = useRoutes(routesConfig);
  return <>{element}</>;
};

export default AppRoutes;
