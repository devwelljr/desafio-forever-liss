import React from "react";
import FooterAbout from "./FooterAbout";
import FooterInfos from "./FooterInfos";
import Newsletter from "./Newsletter";

function Footer() {
  return (
    <footer>
      <Newsletter />
      <FooterInfos />
      <FooterAbout />
    </footer>
  );
}

export default Footer;
