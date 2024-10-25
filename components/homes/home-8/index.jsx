import Image from "next/image";
import Service from "./Service";
import Portfolio from "./Portfolio";
import PortfolioTwo from "./PortfolioTwo";
import Blog from "./Blog";
//import Marquee from "./Marquee";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Link from "next/link";
//import Accordion from "./Accordion";
import About from "./About";
//import Achievement from "./Achievement";

export default function Home8({
  onePage = false,
  dark = false,
  eadge2 = false,
}) {
  return (
    <>
      <section
        className={`page-section scrollSpysection  pt-0 pb-0  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="portfolio"
      >
        <div className="container">
          <div className="row">
            <div className="col-10 col-sm-9 mt-40">
              {/* <h3 className="hs-title-5 font-alt overflow-hidden mb-100 mb-md-40">
                <span className="d-block wow fadeRotateIn"> Selected </span>
                <span className="d-block text-end wow fadeRotateIn">
                  {" "}
                  Works{" "}
                </span>
              </h3> */}
              <h2 className="section-title mb-40 mb-xs-30">Our Projects</h2>
              <p
                className="section-descr dark-white mb-40"
                style={{ textTransform: "capitalize" }}
              >
                Be part of Kerala&apos;s first{" "}
                <span style={{ color: "#119D60", fontWeight: "500" }}>
                  Sports-themed
                </span>{" "}
                2&3BHK flats, DD Sports City at Pallipuram, near Technocity by
                Desai Homes.
              </p>
            </div>
          </div>
          <Portfolio />
          {/* End Portfolio Grid */}
        </div>{" "}
      </section>

      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="services"
        style={{
          background: " #fef5e7",
          borderTop: "1px solid lightgreen",
          borderBottom: "1px solid lightgreen",
          marginTop: "130px",
        }}
      >
        {" "}
        <Service />{" "}
      </section>
      {/* <hr className={` ${dark ? "white opacity-1" : "black"}  mt-3 mb-40`} /> */}
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="portfoliotwo"
      >
        {" "}
        <PortfolioTwo />
      </section>
      <section
        className={`page-section mt-5 pt-5 scrollSpysection  bg-scroll ${
          dark
            ? "bg-dark-1 bg-gradient-gray-dark-2 light-content"
            : "bg-gradient-gray-light-2 pt-8 "
        }`}
        id="about"
      >
        <About />
      </section>

      <section
        className="d-flex align-items-center"
        style={{
          background: "black",
          color: "white",
          marginTop: "20px",
        }}
      >
        <div className="container" style={{ paddingTop: "30px" }}>
          <div className="row">
            {/* Left Column */}
            <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center">
              <h1
                className="mb-4"
                style={{ fontSize: "3rem", fontWeight: "bold" }}
              >
                Best Builders In Kerala
              </h1>
              <a href="#contact" className="btn btn-light btn-lg mb-sm-20">
                Contact Now
              </a>
            </div>

            {/* Right Column - 2x2 Grid */}
            <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
              <div className="row text-center w-100">
                <div className="col-6 mb-4">
                  <h2 className="display-4">32+</h2>
                  <p>Years Of Experience</p>
                </div>
                <div className="col-6">
                  <h2 className="display-4">6500+</h2>
                  <p>Satisfied Clients</p>
                </div>
                <div className="col-6 mb-4">
                  <h2 className="display-4">61+</h2>
                  <p>Ongoing / Completed Projects</p>
                </div>
                <div className="col-6">
                  <h2 className="display-4">8.5 Million</h2>
                  <p>Sq.Ft Construction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`page-section scrollSpysection  pb-0  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="blog"
      >
        <div className="container">
          <div className="mb-100 mb-md-40">
            <div className="row">
              <div className="col-sm-6">
                {/* <h2 className="section-caption mb-0 mb-xs-10 black">
                  Our Customer
                </h2> */}
              </div>
            </div>
          </div>
          <Blog />
          {/* End Newsletter Form */}
        </div>
      </section>
      <section
        className={` scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : "mb-5"
        } `}
        id="contact"
      >
        <div className="bg-line-3 opacity-025 mb-n90 mb-lg-n70 mb-md-n60 mb-sm-n40">
          <Image
            src="/assets/images/demo-corporate/decoration-4.svg"
            width={1600}
            height={206}
            alt=""
          />
        </div>
        {/* End Decorative Line */}
        <div className="container position-relative">
          <div className="row mb-80 mb-sm-60">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              <h2 className="section-title mb-40 mb-xs-30">
                Contact Desai Homes
              </h2>
              <p className="section-descr dark-white mb-0">
                Get in touch with Desai Homes to get guidance on finding the
                best residential apartment.
              </p>
            </div>
          </div>{" "}
          <Contact />
        </div>
      </section>
    </>
  );
}
