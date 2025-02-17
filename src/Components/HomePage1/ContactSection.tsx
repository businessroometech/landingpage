import { color } from "framer-motion";
import React from "react";
import { TbBackground } from "react-icons/tb";
import { Link } from "react-router-dom";
import Select from "react-select";

const ContactSection: React.FC = () => {
  const options = [
    { value: "Afghanistan", label: "Afghanistan" },
    { value: "Albania", label: "Albania" },
    { value: "Algeria", label: "Algeria" },
    { value: "Andorra", label: "Andorra" },
    { value: "Angola", label: "Angola" },
    { value: "Antigua and Barbuda", label: "Antigua and Barbuda" },
    { value: "Argentina", label: "Argentina" },
    { value: "Armenia", label: "Armenia" },
    { value: "Australia", label: "Australia" },
    { value: "Austria", label: "Austria" },
    { value: "Azerbaijan", label: "Azerbaijan" },
    { value: "Bahamas", label: "Bahamas" },
    { value: "Bahrain", label: "Bahrain" },
    { value: "Bangladesh", label: "Bangladesh" },
    { value: "Barbados", label: "Barbados" },
    { value: "Belarus", label: "Belarus" },
    { value: "Belgium", label: "Belgium" },
    { value: "Belize", label: "Belize" },
    { value: "Benin", label: "Benin" },
    { value: "Bhutan", label: "Bhutan" },
    { value: "Bolivia", label: "Bolivia" },
    { value: "Bosnia and Herzegovina", label: "Bosnia and Herzegovina" },
    { value: "Botswana", label: "Botswana" },
    { value: "Brazil", label: "Brazil" },
    { value: "Brunei", label: "Brunei" },
    { value: "Bulgaria", label: "Bulgaria" },
    { value: "Burkina Faso", label: "Burkina Faso" },
    { value: "Burundi", label: "Burundi" },
    { value: "Cabo Verde", label: "Cabo Verde" },
    { value: "Cambodia", label: "Cambodia" },
    { value: "Cameroon", label: "Cameroon" },
    { value: "Canada", label: "Canada" },
    { value: "Central African Republic", label: "Central African Republic" },
    { value: "Chad", label: "Chad" },
    { value: "Chile", label: "Chile" },
    { value: "China", label: "China" },
    { value: "Colombia", label: "Colombia" },
    { value: "Comoros", label: "Comoros" },
    { value: "Congo (Congo-Brazzaville)", label: "Congo (Congo-Brazzaville)" },
    { value: "Congo (Democratic Republic)", label: "Congo (Democratic Republic)" },
    { value: "Costa Rica", label: "Costa Rica" },
    { value: "Croatia", label: "Croatia" },
    { value: "Cuba", label: "Cuba" },
    { value: "Cyprus", label: "Cyprus" },
    { value: "Czechia", label: "Czechia" },
    { value: "Denmark", label: "Denmark" },
    { value: "Djibouti", label: "Djibouti" },
    { value: "Dominica", label: "Dominica" },
    { value: "Dominican Republic", label: "Dominican Republic" },
    { value: "Ecuador", label: "Ecuador" },
    { value: "Egypt", label: "Egypt" },
    { value: "El Salvador", label: "El Salvador" },
    { value: "Equatorial Guinea", label: "Equatorial Guinea" },
    { value: "Eritrea", label: "Eritrea" },
    { value: "Estonia", label: "Estonia" },
    { value: "Eswatini", label: "Eswatini" },
    { value: "Ethiopia", label: "Ethiopia" },
    { value: "Fiji", label: "Fiji" },
    { value: "Finland", label: "Finland" },
    { value: "France", label: "France" },
    { value: "Gabon", label: "Gabon" },
    { value: "Gambia", label: "Gambia" },
    { value: "Georgia", label: "Georgia" },
    { value: "Germany", label: "Germany" },
    { value: "Ghana", label: "Ghana" },
    { value: "Greece", label: "Greece" },
    { value: "Grenada", label: "Grenada" },
    { value: "Guatemala", label: "Guatemala" },
    { value: "Guinea", label: "Guinea" },
    { value: "Guinea-Bissau", label: "Guinea-Bissau" },
    { value: "Guyana", label: "Guyana" },
    { value: "Haiti", label: "Haiti" },
    { value: "Honduras", label: "Honduras" },
    { value: "Hungary", label: "Hungary" },
    { value: "Iceland", label: "Iceland" },
    { value: "India", label: "India" },
    { value: "Indonesia", label: "Indonesia" },
    { value: "Iran", label: "Iran" },
    { value: "Iraq", label: "Iraq" },
    { value: "Ireland", label: "Ireland" },
    { value: "Israel", label: "Israel" },
    { value: "Italy", label: "Italy" },
    { value: "Jamaica", label: "Jamaica" },
    { value: "Japan", label: "Japan" },
    { value: "Jordan", label: "Jordan" },
    { value: "Kazakhstan", label: "Kazakhstan" },
    { value: "Kenya", label: "Kenya" },
    { value: "Kiribati", label: "Kiribati" },
    { value: "Kuwait", label: "Kuwait" },
    { value: "Kyrgyzstan", label: "Kyrgyzstan" },
    { value: "Laos", label: "Laos" },
    { value: "Latvia", label: "Latvia" },
    { value: "Lebanon", label: "Lebanon" },
    { value: "Lesotho", label: "Lesotho" },
    { value: "Liberia", label: "Liberia" },
    { value: "Libya", label: "Libya" },
    { value: "Liechtenstein", label: "Liechtenstein" },
    { value: "Lithuania", label: "Lithuania" },
    { value: "Luxembourg", label: "Luxembourg" },
    { value: "Madagascar", label: "Madagascar" },
    { value: "Malawi", label: "Malawi" },
    { value: "Malaysia", label: "Malaysia" },
    { value: "Maldives", label: "Maldives" },
    { value: "Mali", label: "Mali" },
    { value: "Malta", label: "Malta" },
    { value: "Mexico", label: "Mexico" },
    { value: "Mongolia", label: "Mongolia" },
    { value: "Morocco", label: "Morocco" },
    { value: "Myanmar", label: "Myanmar" },
    { value: "Namibia", label: "Namibia" },
    { value: "Nepal", label: "Nepal" },
    { value: "Netherlands", label: "Netherlands" },
    { value: "New Zealand", label: "New Zealand" },
    { value: "Nigeria", label: "Nigeria" },
    { value: "Norway", label: "Norway" },
    { value: "Pakistan", label: "Pakistan" },
    { value: "Philippines", label: "Philippines" },
    { value: "Poland", label: "Poland" },
    { value: "Portugal", label: "Portugal" },
    { value: "Romania", label: "Romania" },
    { value: "Russia", label: "Russia" },
    { value: "Saudi Arabia", label: "Saudi Arabia" },
    { value: "South Africa", label: "South Africa" },
    { value: "Spain", label: "Spain" },
    { value: "Sri Lanka", label: "Sri Lanka" },
    { value: "Sweden", label: "Sweden" },
    { value: "United Kingdom", label: "United Kingdom" },
    { value: "United States", label: "United States" },
    { value: "Zimbabwe", label: "Zimbabwe" },
  ];

  return (
    <div className="contact1-section-area sp6" style={{height : '100vh'}} id="contact">
      <div className="container" style={{marginTop : '-140px'}}>
        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="contact-header-area text-center heading2">
              <h2 className="text-anime-style-3">Get In Touch With Us Today</h2>
              <p>
                We're here to help! If you have any questions or would like to
                discuss 
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-5"
            data-aos="zoom-out"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="contact-info-area">
              <h3>Contact Info</h3>
              <p>
                We're here to help! If you have any questions or would like to
                discuss 
              </p>
              <div className="space32"></div>
              <div className="contact-author-box">
                <div className="icons">
                  <img src="/assets/img/icons/location2.svg" alt="" />
                </div>
                <div className="content">
                  <h4>Our Location</h4>
                  <Link to="#">
                    30 N Gould St Ste R, Sheridan, 
                    <br className="d-lg-block d-none" />
                    WY 82801 , USA
                  </Link>
                </div>
              </div>
              <div className="space40"></div>
              <div className="contact-author-box">
                {/* <div className="icons">
                  <img src="/assets/img/icons/phone2.svg" alt="" />
                </div> */}
                {/* <div className="content">
                  <h4>Phone Number</h4>
                  <Link to="tel:123-456-7890">
                    123-456-7890 <br />
                    
                  </Link>
                </div> */}
              </div>
              <div className="space40"></div>
              <div className="contact-author-box">
                <div className="icons">
                  <img src="/assets/img/icons/email2.svg" alt="" />
                </div>
                <div className="content">
                  <h4>Email Address</h4>
                  <Link to="mailto:infoseoc@gmail.com">
                  info@businessroom.ai<br />
                 
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-7"
            data-aos="zoom-out"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <div className="contact-boxarea">
              <h3>Get In Touch</h3>
              <p>
                We're here to help! If you have any questions or would like to
                discuss <br className="d-lg-block d-none" />
                
              </p>
              <form action="https://api.web3forms.com/submit" method="POST">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="input-area">
                      <input type="text" placeholder="First Name" required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-area">
                      <input type="text" placeholder="Last Name" required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-area">
                      <input
                        type="email"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-area">
                      <input
                        type="number"
                        placeholder="Phone number"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-area mt-4">
                      <Select className="country-area" options={options} />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-area">
                      <textarea placeholder="Your Message" required></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-area">
                      <button className="header-btn1"  style={{backgroundColor:"#3DAEF4"}} onMouseLeave={(e) => e.currentTarget.style.color = "#fff"}>
                        Submit
                        <span> 
                            <i className="fa-solid fa-arrow-right" style={{color:"#3DAEF4"}}></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
