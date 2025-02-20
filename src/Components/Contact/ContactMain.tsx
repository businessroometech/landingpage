import React, { useState } from "react";
import axios from "axios";
import People from "../../assets/People.png";
import businesslogo from "../../assets/businessroom-logo.png"
import { AiFillCaretDown } from "react-icons/ai";
const ContactMain: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    whatsappNumber: "",
    country: "",
    role: "",
  });

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
    {
      value: "Congo (Democratic Republic)",
      label: "Congo (Democratic Republic)",
    },
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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting form:", formData);
    try {
      const response = await axios.post(
        "https://your-api-endpoint.com/contact",
        formData
      );
      console.log("Form submitted successfully:", response.data);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        whatsappNumber: "",
        country: "",
        role: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
         <style>
    {`
      @media (max-width: 768px) {
        div {
          flex-direction: column !important;
          justifyContent: "center",
          alignItems: "center",
          
        }
      }
    `}
  </style>

        <div
          className="contact-main-inner-area sp1"
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: "200px",
            backgroundColor: "white"
          }}
        >
          <div
            className="contact-form-area"
            style={{width:"350px", flex: 1, marginLeft: "160px", }}
          >
             <style>
    {`
      @media (max-width: 768px) {
        .header-main-content {
        width: "20rem",
          flex-direction: column !important;
          align-items: center !important;
          margin-top: -50px !important; /* Adjust margin for mobile */
        }
      }
    `}
  </style>

            <h4>Create your account</h4>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-12">
                  <div className="input-area">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="input-area">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="input-area">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input-area">
                    <input
                      type="tel"
                      name="whatsappNumber"
                      placeholder="WhatsApp Number"
                      value={formData.whatsappNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                
              


<div className="col-lg-12">
      <div className="input-area" style={{ marginBottom: "15px", marginTop: "15px", position: "relative" }}>
        <select
          className="form-control"
          name="country"
          style={{
            height: "50px",
            width: "100%",
            border: "1px solid #e0e0e0",
            appearance: "none", // Hides default dropdown arrow
            paddingRight: "40px", // Space for the icon
            cursor: "pointer",
          }}
          value={formData.country}
          onChange={handleChange}
          required
        >
          <option value="">Select Country</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* Dropdown icon positioned on the right */}
        <AiFillCaretDown
          style={{
            position: "absolute",
            right: "15px",
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
            color: "#888",
          }}
          size={20}
        />
      </div>
    </div>



<div className="col-lg-12">
      <div className="input-area" style={{ marginTop: "11px", position: "relative" }}>
        {/* Wrapping the select inside a positioned div */}
        <select
          className="form-control"
          name="role"
          style={{
            height: "50px",
            width: "100%",
            border: "1px solid #e0e0e0",
            appearance: "none", // Hides default dropdown arrow
            paddingRight: "40px", // Makes space for the icon
            cursor: "pointer",
          }}
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="">Select Role</option>
          <option value="entrepreneur">Entrepreneur</option>
          <option value="investor">Investor</option>
        </select>

        {/* Dropdown icon positioned absolutely */}
        <AiFillCaretDown
          style={{
            position: "absolute",
            right: "15px",
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "none", // Prevents clicking on icon instead of select
            color: "#888",
          }}
          size={20}
        />
      </div>
    </div>





                <div className="col-lg-12">
                  <div className="input-area">
                    <button
                      style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      padding: "10px 20px",
                      backgroundColor: "#3DAEF4",
                      borderRadius: "8px",
                      color: "#ffffff",
                      fontWeight: "bold",
                      fontSize: "16px",
                      textDecoration: "none",
                      border: "none",
                      cursor: "pointer",
                      outline: "none",
                      transition: "background-color 0.3s",
                      }}
                      type="submit"
                      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#3498db")}
                      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#3DAEF4")}
                    >
                      Sign up
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
                        style={{ color: "#3DAEF4" }}
                      ></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div style={{ flex: 1, marginRight: "60px", backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img src={businesslogo} alt="sign up" style={{ width: "30%" }} />
        </div>
      </div>
    </>
  );
};

export default ContactMain;
