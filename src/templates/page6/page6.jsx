import React, { useEffect } from "react";
import "./slider.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./slider";
import Page from "./page";

export default function Page5() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div>
      <div className="hero-container">
        <Hero />
      </div>
      <div className="page-container">
        <Page />
      </div>

      <div className="additional-content">
        <center>
          <div className="additional-content-para"></div>
        </center>
      </div>
    </div>
  );
}
