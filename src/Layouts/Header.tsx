import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import imagelogo from "../assets/br blue.png";
import businessroomLogo from "../assets/businessroom-logo.png";
interface MenuItem {
  label: string;
  to: string;
  dropdown?: { label: string; to: string }[];
}

interface HomeMenuItem {
  imageSrc: string;
  multiPageLink: string;
  onePageLink: string;
  isNew?: boolean;
  isHot?: boolean;
}

const homeMenuItems: HomeMenuItem[] = [
  {
    imageSrc: "demo-img1.png",
    multiPageLink: "/",
    onePageLink: "/single-index1",
  },
  {
    imageSrc: "demo-img2.png",
    multiPageLink: "/index2",
    onePageLink: "/single-index2",
  },
  {
    imageSrc: "comming-soon.png",
    multiPageLink: "/index3",
    onePageLink: "/single-index3",
  },
  {
    imageSrc: "demo-img3.png",
    multiPageLink: "/index4",
    onePageLink: "/single-index4",
  },
  {
    imageSrc: "demo-img4.png",
    multiPageLink: "/index5",
    onePageLink: "/single-index5",
  },
  {
    imageSrc: "demo-img5.png",
    multiPageLink: "/index6",
    onePageLink: "/single-index6",
  },
  {
    imageSrc: "demo-img6.png",
    multiPageLink: "/index7",
    onePageLink: "/single-index7",
    isNew: true,
  },
  {
    imageSrc: "demo-img7.png",
    multiPageLink: "/index8",
    onePageLink: "/single-index8",
    isNew: true,
  },
  {
    imageSrc: "demo-img8.png",
    multiPageLink: "/index9",
    onePageLink: "/single-index9",
    isNew: true,
  },
  {
    imageSrc: "demo-img9.png",
    multiPageLink: "/index10",
    onePageLink: "/single-index10",
    isHot: true,
  },
];

const menuItems: MenuItem[] = [
  // { label: "About", to: "/about" },
  // {
  //   label: "Services",
  //   to: "#",
  //   dropdown: [
  //     { label: "Service One", to: "/service1" },
  //     { label: "Service Two", to: "/service2" },
  //     { label: "Service Three", to: "/service3" },
  //     { label: "Service Four", to: "/service4" },
  //     { label: "Service Five", to: "/service5" },
  //   ],
  // },
  // {
  //   label: "Blogs",
  //   to: "#",
  //   dropdown: [
  //     { label: "Blog One", to: "/blog" },
  //     { label: "Blog Left", to: "/blog-left" },
  //     { label: "Blog Right", to: "/blog-right" },
  //     { label: "Blog Single", to: "/blog-single" },
  //   ],
  // },
  // {
  //   label: "Pages",
  //   to: "#",
  //   dropdown: [
  //     { label: "Case Study", to: "/case" },
  //     { label: "Case Study Single", to: "/case-single" },
  //     { label: "Our Team", to: "/team" },
  //     { label: "Pricing Plan", to: "/pricing" },
  //     { label: "Testimonials", to: "/testimonials" },
  //     { label: "FAQ", to: "/faq" },
  //     { label: "404", to: "/404" },
  //   ],
  // },
  // { label: "Contact Us", to: "/contact" },
];

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header-area homepage1 header header-sticky d-none d-lg-block ${
        isSticky ? "sticky" : ""
      }`}
    >
      <div className="" style={{ marginLeft: "" }}>
        <div className="row">
          <div className="col-lg-12">
            <div className="header-elements">
              <div
                className="site-logo"
                style={{
                  height: "350px",
                  width: "350px",
                  marginTop: "8px",
                  marginLeft: "80px",
                }}
              >
                <div className="d-flex align-items-center">
                  <img
                    src={businessroomLogo}
                    alt="Business Room Logo"
                    style={{
                      height: "45px",
                      width: "45px",
                      marginRight: "10px",
                    }}
                  />
                  <Link to="/">
                    <img src={imagelogo} alt="Logo" />
                  </Link>
                </div>
              </div>
              <div className="main-menu">
                <ul className="m-0">
                  <li>
                    {/* <Link to="#">
                      Home <i className="fa-solid fa-angle-down"></i>
                    </Link> */}
                    <div className="tp-submenu">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="all-images-menu home-menu">
                            {homeMenuItems.map((item, index) => (
                              <div key={index}>
                                <div className="homemenu-thumb">
                                  <div className="img1">
                                    <img
                                      src={`/assets/img/all-images/${item.imageSrc}`}
                                      alt=""
                                    />
                                  </div>
                                  {item.isNew && (
                                    <div className="text">
                                      <h2>NEW</h2>
                                    </div>
                                  )}
                                  {item.isHot && (
                                    <div className="text">
                                      <h2>HOT</h2>
                                    </div>
                                  )}
                                  <div className="homemenu-btn">
                                    <Link
                                      className="header-btn1"
                                      to={item.multiPageLink}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      Multi Page
                                      <span>
                                        <i className="fa-solid fa-arrow-right"></i>
                                      </span>
                                    </Link>
                                    <div className="space16"></div>
                                    <Link
                                      className="header-btn1"
                                      to={item.onePageLink}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      One Page
                                      <span>
                                        <i className="fa-solid fa-arrow-right"></i>
                                      </span>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link to={item.to}>
                        {item.label}{" "}
                        {item.dropdown && (
                          <i className="fa-solid fa-angle-down"></i>
                        )}
                      </Link>
                      {item.dropdown && (
                        <ul className="dropdown-padding">
                          {item.dropdown.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link to={subItem.to}>{subItem.label}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Search and Free Consultation Button Area */}
              <div className="btn-area">
                <div
                  className="search-icon header__search header-search-btn"
                  onClick={toggleSearch}
                >
                  <Link to="#">
                    {/* <img
                      src="/assets/img/icons/search-icons1.svg"
                      alt="Search"
                    /> */}
                  </Link>
                  {/* Search Form */}
                  {searchOpen && (
                    <div
                      className={`header-search-form-wrapper ${
                        searchOpen ? "open" : ""
                      }`}
                    >
                      <div
                        className="tx-search-close tx-close"
                        onClick={toggleSearch}
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </div>
                      <div className="header-search-container">
                        <form role="search" className="search-form">
                          <input
                            type="search"
                            className="search-field"
                            placeholder="Search …"
                            name="s"
                          />
                          <button type="submit" className="search-submit">
                            <img
                              src="/assets/img/icons/search-icons1.svg"
                              alt="Search"
                            />
                          </button>
                        </form>
                      </div>
                    </div>
                  )}
                </div>
                <Link
                  to="/http://54.177.193.30:5173/auth/sign-in"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "10px 20px",
                    color: "#ffffff",
                    fontWeight: "bold",
                    fontSize: "16px",
                    textDecoration: "none",
                    border: "none",
                    cursor: "pointer",
                    outline: "none",
                    marginTop: "-300px",
                    marginRight: "80px",
                    backgroundColor: "#3daef4",
                    borderRadius: "8px",
                    height: "50px",
                  }}
             
                >
                  Get Started
                  <span
                    style={{
                      width: "24px",
                      height: "24px",
                      backgroundColor: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <i
                      className="fa-solid fa-arrow-right"
                      style={{ color: "#3daef4" }}
                    ></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
