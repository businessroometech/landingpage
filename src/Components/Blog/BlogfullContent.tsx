import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    imgSrc: "/assets/img/all-images/blog-img1.png",
    tags: [
      { text: "#SEO", href: "/" },
      {
        text: "Anderson",
        href: "/",
        iconSrc: "/assets/img/icons/contact1.svg",
      },
    ],
    title: "10 Essential SEO Tips to Boost Your Website's Ranking",
    summary:
      "Are you looking to improve your website's visibility and attract more organic traffic?",
    link: "/blog-single",
    date: "09, MAY 2024",
    aos: "fade-right",
    aosDuration: 800,
  },
  {
    imgSrc: "/assets/img/all-images/blog-img2.png",
    tags: [
      { text: "# PPC", href: "/" },
      {
        text: "Jon Doe",
        href: "/",
        iconSrc: "/assets/img/icons/contact1.svg",
      },
    ],
    title: "The Power of PPC Advertising: How to Maximize Your ROI",
    summary:
      "Unlock the full potential of your digital marketing strategy with the power of PPC.",
    link: "/blog-single",
    date: "10, MAY 2024",
    aos: "fade-up",
    aosDuration: 1000,
  },
  {
    imgSrc: "/assets/img/all-images/blog-img3.png",
    tags: [
      { text: "# Web Design", href: "/" },
      {
        text: "William Lee",
        href: "/",
        iconSrc: "/assets/img/icons/contact1.svg",
      },
    ],
    title: "The Importance of Responsive Web Design in the Mobile Age",
    summary:
      "Where mobile devices dominate internet usage, responsive web design more crucial.",
    link: "/blog-single",
    date: "12, MAY 2024",
    aos: "fade-left",
    aosDuration: 1200,
  },
  // Add your additional blog posts here
  {
    imgSrc: "assets/img/all-images/blog-img15.png",
    tags: [
      { text: "Ben Stokes", href: "#", iconSrc: "assets/img/icons/contact1.svg" },
      { text: "16 August 2023", href: "#", iconSrc: "assets/img/icons/calender1.svg" },
    ],
    title: "The Power of Content Marketing: How to Drive Engagement...",
    summary: "Are you looking to improve your website's visibility and attract more organic traffic?",
    link: "/blog-single",
    date: "16, AUGUST 2023",
    aos: "fade-up",
    aosDuration: 1000,
  },
  {
    imgSrc: "assets/img/all-images/blog-img16.png",
    tags: [
      { text: "Ben Stokes", href: "#", iconSrc: "assets/img/icons/contact1.svg" },
      { text: "16 August 2023", href: "#", iconSrc: "assets/img/icons/calender1.svg" },
    ],
    title: "The Importance of SEO in Digital Marketing: A Comprehensive Guide",
    summary: "Unlock the full potential of your digital marketing strategy with the power of PPC.",
    link: "/blog-single",
    date: "16, AUGUST 2023",
    aos: "fade-up",
    aosDuration: 1000,
  },
  {
    imgSrc: "assets/img/all-images/blog-img3.png",
    tags: [
      { text: "Ben Stokes", href: "#", iconSrc: "assets/img/icons/contact1.svg" },
      { text: "16 August 2023", href: "#", iconSrc: "assets/img/icons/calender1.svg" },
    ],
    title: "The Power of Social Media Marketing: How to Build Your...",
    summary: "Where mobile devices dominate internet usage, responsive web design more crucial.",
    link: "/blog-single",
    date: "16, AUGUST 2023",
    aos: "fade-up",
    aosDuration: 1000,
  },
  {
    imgSrc: "assets/img/all-images/blog-img15.png",
    tags: [
      { text: "Ben Stokes", href: "#", iconSrc: "assets/img/icons/contact1.svg" },
      { text: "16 August 2023", href: "#", iconSrc: "assets/img/icons/calender1.svg" },
    ],
    title: "Social Media Marketing Strategies to Drive Engagement Conversions",
    summary: "Are you looking to improve your website's visibility and attract more organic traffic?",
    link: "/blog-single",
    date: "16, AUGUST 2023",
    aos: "fade-up",
    aosDuration: 1000,
  },
  {
    imgSrc: "assets/img/all-images/blog-img18.png",
    tags: [
      { text: "Ben Stokes", href: "#", iconSrc: "assets/img/icons/contact1.svg" },
      { text: "16 August 2023", href: "#", iconSrc: "assets/img/icons/calender1.svg" },
    ],
    title: "Content Marketing 101: How to Create Compelling Converts..",
    summary: "Unlock the full potential of your digital marketing strategy with the power of PPC.",
    link: "/blog-single",
    date: "16, AUGUST 2023",
    aos: "fade-up",
    aosDuration: 1000,
  },
  {
    imgSrc: "assets/img/all-images/blog-img3.png",
    tags: [
      { text: "Ben Stokes", href: "#", iconSrc: "assets/img/icons/contact1.svg" },
      { text: "16 August 2023", href: "#", iconSrc: "assets/img/icons/calender1.svg" },
    ],
    title: "The Power of Social Media Marketing: How to Build Your...",
    summary: "Where mobile devices dominate internet usage, responsive web design more crucial.",
    link: "/blog-single",
    date: "16, AUGUST 2023",
    aos: "fade-up",
    aosDuration: 1000,
  },
 
];

const BlogSection: React.FC = () => {
  return (
    <div className="blog8-scetion-area sp2 bg2" id="blog">
      <Container>
     
        <Row>
          {blogPosts.map((post, index) => (
            <Col lg={4} md={6} key={index}>
              <div
                className="blog-author-boxarea"
                data-aos={post.aos}
                data-aos-duration={post.aosDuration}
              >
                <div className="img1">
                  <img src={post.imgSrc} alt="" />
                </div>
                <div className="content-area">
                  <div className="tags-area">
                    <ul>
                      {post.tags.map((tag, idx) => (
                        <li key={idx}>
                          <Link to={tag.href}>
                            {tag.iconSrc && <img src={tag.iconSrc} alt="" />}
                            {tag.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to={post.link}>{post.title}</Link>
                  <p>{post.summary}</p>
                  <Link to={post.link} className="header-btn15">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <div className="date">
                    <Link to="/">{post.date}</Link>
                  </div>
                </div>
              </div>
              <div className="space30 d-lg-none d-block"></div>
            </Col>
            
          ))}
           <div className="col-lg-12">
      <div className="pagination-area">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a className="page-link" href="#">
                <i className="fa-solid fa-angle-left"></i>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link active" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                <i className="fa-solid fa-angle-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
        </Row>
      </Container>
    </div>
  );
};

export default BlogSection;
