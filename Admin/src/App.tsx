import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes/routes";
import ProgressBar from "./Layouts/ProgressBar";
import Preloader from "./Layouts/PreLoader";
import AOS from "aos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/css/plugins/bootstrap.min.css"
import "./assets/css/plugins/fontawesome.css"
import "./assets/css/plugins/mobile.css"
// import './assets/css/main.css'
import './assets/scss/main.scss'
import "./App.css";

const App: React.FC = () => {
  useEffect(() => {
    AOS.init();
    AOS.init({
      disable: "mobile",
    });
  }, []);

  document.body.className = "homepage1-body";

  return (
    <Router>
      <AppRoutes />
      <ProgressBar />
      <Preloader />
    </Router>
  );
};

export default App;
