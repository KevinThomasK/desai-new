import React from "react";

export default function Footer4() {
  return (
    <div className="container position-relative py-3">
      <div className="row justify-content-between align-items-center">
        {/* Left Side - Copyright */}
        <div className="col-md-6 mb-sm-40">
          All Rights Reserved © Desai Homes {new Date().getFullYear()}.
        </div>

        {/* Right Side - Privacy Policy */}
        <a
          href="https://www.desaihomes.com/privacy-policy"
          className="col-md-6 text-md-end text-sm-start"
        >
          Privacy Policy
        </a>
      </div>
    </div>
  );
}
