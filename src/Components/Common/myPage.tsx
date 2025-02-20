import Img from "../../assets/vetical.jpg";
import { FaRegDotCircle } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import Profile from "../../assets/Profile.png"
import teamMeeting from "../../assets/team-meeting.jpg"; 
import { Link } from "react-router-dom";

const StartupLanding = () => {
  const Feature = ({ text }: { text: string }) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "16px",
        gap: "12px",
      }}
    >
      {/* <div style={{
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        backgroundColor: '#4f46e5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '16px'
      }}>
        +
      </div> */}
      <span
        style={{
          color: "#1e293b",
          fontSize: "17px",
        }}
      >
        {text}
      </span>
    </div>
  );

  return (

    <div>

      <div
       className="laptop-view"
      >
    <div
    
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "48px",
        margin: "0 auto",
        gap: "48px",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "white",
        
      }}
       className="laptop-view"
    >
      {/* Left Content */}
      <div
        style={{
          flex: "1",
          paddingLeft: "100px",
        }}
        // className="laptop-view"
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "700",
            color: "#1e293b",
            marginBottom: "24px",
            lineHeight: "1.2",
          }}
        >
          {/* Discover your dream startup */}
          Businessroom Live
        </h1>

        <p
          style={{
            fontSize: "26px",
            color: "#475569",
            marginBottom: "32px",
            lineHeight: "1.6",
          }}
        >
          Pitch your idea to a global community and build meaningful
          connections.
        </p>

     
        {/* <button
          style={{
            backgroundColor: "#1e293b",
            color: "white",
            padding: "12px 24px",
            borderRadius: "8px",
            border: "none",
            fontSize: "16px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
          }}
        >
          Start with Us
          <span style={{ fontSize: "20px" }}>→</span>
        </button> */}

<div
                              className="btn-area text-center"
                              // data-aos="fade-up"
                              // data-aos-duration="1200"
                            >
                              <Link
                                to="/contact"
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  gap: "8px",
                                  padding: "10px 20px",
                                  backgroundColor: "#3DAEF4",
                                  borderRadius: "8px",
                                  color: "white",
                                  fontWeight: "bold",
                                  fontSize: "16px",
                                  textDecoration: "none",
                                  border: "none",
                                  cursor: "pointer",
                                  outline: "none",
                                }}
                              >
                                Sign Up
                                <span
                                  style={{
                                    width: "24px",
                                    height: "24px",
                                    backgroundColor: "#3DAEF4",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <i
                                    className="fa-solid fa-arrow-right"
                                    style={{ color: "white" }}
                                  ></i>
                                </span>
                              </Link>
                            </div>


      </div>

    

      {/* Right Content - Graph Card */}
      <div
        style={{
          flex: "1",
          marginLeft: "100px",
        }}
        // className="laptop-view"
      >
        {/* <div style={{ height: '790px', display: 'flex', justifyContent: 'center'}}> */}
        {/* <img 
    src={Img}
    alt="Revenue Chart"
    style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '8px' }}
  /> */}
        {/* </div> */}
        <div
          className="d-flex align-items-center vh-100"
          style={{ padding: "20px" }}
        >
          {/* Live Stream Container */}
            <div
            className="shadow-lg rounded-4 overflow-hidden flex justify-content-left"
            style={{
              width: "600px",
              height: "500px",
              background: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              position: "relative",
              cursor: "pointer",
            }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ rotate: 1, scale: 1.02 }}
            transition={{ duration: 0.8 }}
            onClick={() => window.location.href = "/your-live-project"}
            >
            {/* Live Indicator (Inside the Card) */}
            <motion.div
              className="position-absolute"
              style={{
            top: "10px",
            left: "10px",
            background: "#FF3B30",
            color: "white",
            padding: "6px 12px",
            borderRadius: "20px",
            fontSize: "14px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            boxShadow: "0px 0px 8px rgba(255, 59, 48, 0.8)",
              }}
              animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.2, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              <FaRegDotCircle /> LIVE
            </motion.div>
            <motion.div
              className="position-absolute"
              style={{
              top: "10px",
              left:"100px",
              background: "rgba(0, 0, 0, 0.7)",
              color: "white",
              padding: "6px 12px",
              borderRadius: "20px",
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.8)",
              }}
            >
              <IoIosPeople /> 71
            </motion.div>
            <motion.div
              className="w-100 h-100"
              style={{
              background: "#E0E0E0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              }}
              animate={{ background: ["#E0E0E0", "#F0F0F0", "#E0E0E0"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <img
              src={teamMeeting}
              alt="LiveStreamer"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </motion.div>
            <div className="position-absolute p-3 w-100 d-flex align-items-center" style={{ bottom: "0", color: "white", textAlign: "left", background: "rgba(0, 0, 0, 0.6)" }}>
              <motion.img
              src={Profile}
              alt="Profile"
              className="rounded-circle me-3"
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              />
              <div>
              <motion.h5
              className="mb-1"
              style={{ fontWeight: "bold", fontSize: "26px" }}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              >
              Zoe Wilson
              </motion.h5>
              <motion.p
              className="mb-2"
              style={{ fontSize: "22px" }}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              >
              Founder
              </motion.p>
              </div>
            </div>
          </div>
        </div>

        {/* <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '24px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#1e293b',
            marginBottom: '24px'
          }}>
            Annual Recurring Revenue
          </h3>

          <div style={{ height: '200px' }}>
            <LineChart width={400} height={200} data={chartData}>
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#4f46e5" 
                strokeWidth={2} 
                dot={{ fill: '#4f46e5', r: 4 }}
              />
              <XAxis dataKey="month" hide={true} />
              <YAxis hide={true} />
            </LineChart>
          </div>

          <div style={{
            marginTop: '24px',
            borderTop: '1px solid #e2e8f0',
            paddingTop: '16px',
            color: '#94a3b8',
            fontSize: '14px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>Payment processing integration</div>
            <img 
              src="/api/placeholder/60/24" 
              alt="Stripe"
              style={{
                opacity: 0.5
              }}
            />
          </div>
        </div> */}
      </div>

    </div>

    </div>


{/* mobileeee viewwwww */}

          <div
          className="mobile-view"
          >
          <div
      style={{
        display: "flex",
       
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "48px",
        margin: "0 auto",
        // marginBottom: "208px",
        // marginTop: "100px",
        gap: "48px",
        height: "100vh",
        overflow: "hidden",
          zIndex: "100",
        backgroundColor: "white",
       
      }}
    className="mobile-view"

    >
      {/* Left Content */}
      <div
        style={{
         

          marginTop: "300px",
          flex: "1",
          paddingLeft: "150px",
          // backgroundColor:"YELLOw",
        marginLeft:"-2rem",
        }}
        className="mobile-view"
      >
        <h1
          style={{
            fontSize: "40px",
            fontWeight: "700",
            color: "#1e293b",
            marginBottom: "24px",
            lineHeight: "1.2",
            padding: "2px",
            
            // backgroundColor:"yellow"
          }}
        >
          {/* Discover your dream startup */}Businessroom Live
        </h1>

        <div
        className="p-[2px]"
        >
        <p
          style={{
            fontSize: "24px",
            color: "#475569",
            marginBottom: "32px",
            lineHeight: "1.6",
            margin:"auto",
            
          }}
        >
          Pitch your idea to a global community and build meaningful
          connections.
        </p>

        </div>

     
        <button
          style={{
            backgroundColor: "#1e293b",
            color: "white",
            padding: "12px 24px",
            borderRadius: "8px",
            border: "none",
            fontSize: "16px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
          }}
        >
          Start with Us
          <span style={{ fontSize: "20px" }}>→</span>
        </button>
      </div>


      {/* Right Content - Graph Card */}
      <div
        style={{
          flex: "1",
          marginLeft: "100px",
        }}
        className="mobile-view"
      >
        {/* <div style={{ height: '790px', display: 'flex', justifyContent: 'center'}}> */}
        {/* <img 
    src={Img}
    alt="Revenue Chart"
    style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '8px' }}
  /> */}
        {/* </div> */}
        <div
          className="d-flex align-items-center vh-100  "
          style={{ padding: "20px", backgroundColor:"white" }}
        >
          {/* Live Stream Container */}


            <div
            className="shadow-lg  rounded-4 overflow-hidden flex justify-content-left"
            style={{
              width: "390px",
              height: "400px",
             marginRight:"100px",
                           background: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              position: "relative",
              cursor: "pointer",
              marginTop:"-30em",

            }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ rotate: 1, scale: 1.02 }}
            transition={{ duration: 0.8 }}
            onClick={() => window.location.href = "/your-live-project"}
            >
            {/* Live Indicator (Inside the Card) */}
            <motion.div
              className="position-absolute"
              style={{
            top: "10px",
            left: "10px",
            background: "#FF3B30",
            color: "white",
            padding: "6px 12px",
            borderRadius: "20px",
            fontSize: "14px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            boxShadow: "0px 0px 8px rgba(255, 59, 48, 0.8)",
              }}
              animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.2, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              <FaRegDotCircle /> LIVE
            </motion.div>
            <motion.div
              className="position-absolute"
              style={{
              top: "10px",
              left:"100px",
              background: "rgba(0, 0, 0, 0.7)",
              color: "white",
              padding: "6px 12px",
              borderRadius: "20px",
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.8)",
              }}
            >
              <IoIosPeople /> 71
            </motion.div>
            <motion.div
              className="w-100 h-100"
              style={{
              background: "#E0E0E0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
             
              }}
              animate={{ background: ["#E0E0E0", "#F0F0F0", "#E0E0E0"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <img
              src={teamMeeting}
              alt="LiveStreamer"
              style={{ width: "100%", height: "100", objectFit: "auto" }}
              />
            </motion.div>
            <div className="position-absolute p-3 w-100 d-flex align-items-center" style={{ bottom: "0", color: "white", textAlign: "left", background: "rgba(0, 0, 0, 0.6)" }}>
              <motion.img
              src={Profile}
              alt="Profile"
              className="rounded-circle me-3"
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              />
              <div>
              <motion.h5
              className="mb-1"
              style={{ fontWeight: "bold", fontSize: "26px" }}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              >
              Zoe Wilson
              </motion.h5>
              <motion.p
              className="mb-2"
              style={{ fontSize: "22px" }}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              >
              Founder
              </motion.p>
              </div>
            </div>
          </div>



        </div>

     
      </div>

    </div>
          </div>
    </div>
  );
};

export default StartupLanding;
