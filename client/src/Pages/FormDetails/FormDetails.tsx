import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./style.module.css";

import Middle from "../../Assets/Images/Middle.png";
import Mobile_Middle from "../../Assets/Images/Mobile_Middle.png";
import Footer from "../../Assets/Images/Footer.png";
import Mobile_Footer from "../../Assets/Images/Mobile_Footer.png";
import FormDetailsContainer from "../../Components/FormDetailsContainer/FormDetailsContainer";
import FormDetailsHeader from "../../Components/FormDetailsHeader/FormDetailsHeader";
import FormDetailsNavbar from "../../Components/FormDetailsNavbar/FormDetailsNavbar";
import neww from "../../Assets/Images/newww.png";
import { isMobile } from "react-device-detect";
function FormDetails() {
  const location = useLocation();
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isAtTop = window.scrollY === 0;

      // Update isScroll based on scroll position
      setIsScroll(!isAtTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScroll]);

  return (
    <div className={styles.container}>
      {isScroll ? <FormDetailsNavbar /> : isMobile ? <img src={neww} alt="" className={styles.new_img} /> : <FormDetailsHeader />}

      <FormDetailsContainer id={location.pathname.split("/")[3]} isMobile={isMobile} />
      <div className={styles.middle}>
        {isMobile ? <img src={Mobile_Middle} alt="" className={styles.img} /> : <img src={Middle} alt="" className={styles.img} />}
      </div>
      <div className={styles.footer}>
        {isMobile ? <img src={Mobile_Footer} alt="" className={styles.img} /> : <img src={Footer} alt="" className={styles.img} />}
      </div>
    </div>
  );
}

export default FormDetails;
