"use client";
import { footerLinks2, navigationLinks, socialMediaLinks } from "@/data/footer";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ModalTrigger } from "@/components/Modal";

export default function Footer4() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      {" "}
      <ModalTrigger isOpen={isModalOpen} onClose={closeModal} />
      <div className="container position-relative">
        {/* Back to Top Link */}
        <div className="local-scroll position-relative z-index-1">
          <a
            href="#top"
            className="link-to-top color position-absolute top-0 end-0 translate-middle-y"
          >
            <i className="mi-arrow-up size-24" />
            <span className="visually-hidden">Scroll to top</span>
          </a>
        </div>
        {/* End Back to Top Link */}
        <div className="page-section">
          <div className="row">
            <div className="col-lg-6 mb-md-60">
              <h2 className="section-title mb-60 mb-sm-40">
                Discover your dream apartment today!
              </h2>
              <div className="local-scroll">
                <button
                  onClick={openModal}
                  className="btn btn-mod btn-color btn-large btn-round btn-hover-anim"
                >
                  <span>Enquire Now</span>
                </button>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1 pt-10">
              <div className="row">
                <div className="col-md-6 mb-sm-40">
                  <ul className="fw-menu-large clearlist local-scroll">
                    {navigationLinks.map((elm, i) => (
                      <li key={i}>
                        <a href={elm.href}>{elm.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="fw-menu-large clearlist">
                    {footerLinks2.map((elm, i) => (
                      <li key={i}>
                        <a href={elm.href}>{elm.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Text */}
        <div className="row">
          <div className="col-md-6 mb-sm-40">
            All Rights Reserved <br />© Desai Homes {new Date().getFullYear()}.
          </div>
          {/* Social Links */}

          {/* End Social Links */}
        </div>
        {/* End Footer Text */}
      </div>
    </>
  );
}
