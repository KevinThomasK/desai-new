"use client";
import { contactItems } from "@/data/contact";
import React from "react";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <div className="row wow fadeInUp">
        {/* Left Column */}
        <div className="col-lg-5 mb-md-50 mb-sm-30 d-flex align-items-strech">
          <div
            className="bg-color-primary-1 bg-color-alpha-90 bg-image bg-scroll light-content w-100 round overflow-hidden px-4 px-sm-5 py-5"
            style={{
              backgroundImage:
                "url(/assets/images/demo-corporate/section-bg-4.jpg)",
            }}
          >
            {/* Address */}
            {contactItems.map((item, index) => (
              <React.Fragment key={index}>
                <div
                  className={`contact-item ${
                    index !== 3 ? "mb-40 mb-sm-20" : ""
                  }`}
                >
                  <div className="ci-icon">
                    <i className={item.iconClass} />
                  </div>
                  <h4 className="ci-title">{item.title}</h4>
                  <div className="ci-text large">{item.text}</div>
                  <div className="ci-link">
                    <a
                      href={item.link.url}
                      target={item.link.target}
                      rel={item.link.rel}
                    >
                      {item.link.text}
                    </a>
                  </div>
                </div>{" "}
                {index !== contactItems.length - 1 && (
                  <hr className="mt-0 mb-40 mb-sm-20 opacity-02" />
                )}
              </React.Fragment>
            ))}
            {/* End Address */}
          </div>
        </div>
        {/* End Left Column */}

        {/* Right Column */}
        <div className="col-lg-7 d-flex align-items-strech">
          <div className="border-color-primary-1 round w-100 px-4 px-sm-5 py-5">
            <h3 className="section-title-small mt-n10 mb-40 mb-sm-30">
              We love to hear from you
            </h3>

            {/* Contact Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="form contact-form"
              id="contact_form"
            >
              <div className="row">
                <div className="col-md-6">
                  {/* Name */}
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="input-lg round form-control"
                      placeholder="Enter your name"
                      pattern=".{3,100}"
                      required
                      aria-required="true"
                    />
                  </div>
                  {/* End Name */}
                </div>
                <div className="col-md-6">
                  {/* Email */}
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="input-lg round form-control"
                      placeholder="Enter your email"
                      pattern=".{5,100}"
                      required
                      aria-required="true"
                    />
                  </div>
                  {/* End Email */}
                </div>
              </div>

              {/* Phone Number */}
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="input-lg round form-control pl-10 ml-20" // Add margin left to input for spacing
                    required
                    aria-required="true"
                    placeholder="+91"
                  />
                </div>
              </div>
              {/* End Phone Number */}

              {/* Project Selection Dropdown */}
              <div className="form-group">
                <label htmlFor="project">Choose Project</label>
                <div className="relative">
                  <select
                    name="project"
                    id="project"
                    className="input-lg round form-control appearance-none"
                    required
                  >
                    <option value="" disabled selected>
                      Select a project
                    </option>
                    <option value="hippodrome">Hippodrome</option>
                    <option value="galleria">Galleria</option>
                    <option value="pavilion">Pavilion</option>
                  </select>
                </div>
              </div>
              {/* End Project Selection */}

              <div className="row">
                <div className="col-md-6 col-xl-7 d-flex align-items-center">
                  {/* Inform Tip */}
                </div>
                <div className="col-md-6 col-xl-5 mt-sm-20">
                  {/* Send Button */}
                  <div className="pt-3 text-md-end">
                    <button
                      type="submit"
                      className="submit_btn btn btn-mod btn-color btn-large btn-round btn-hover-anim"
                      id="submit_btn"
                      aria-controls="result"
                    >
                      <span>Send Message</span>
                    </button>
                  </div>
                  {/* End Send Button */}
                </div>
              </div>
              <div
                id="result"
                role="region"
                aria-live="polite"
                aria-atomic="true"
              />
            </form>
            {/* End Contact Form */}
          </div>
        </div>
        {/* End Right Column */}
      </div>
    </>
  );
}
