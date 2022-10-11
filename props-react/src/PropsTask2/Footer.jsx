import React from "react";

function Footer({ siteName }) {
  return (
    <div>
      <p></p> {siteName} {new Date().getFullYear()}
    </div>
  );
}

export default Footer;
