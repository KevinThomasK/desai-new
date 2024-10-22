import React from "react";
import Image from "next/image";
import Service from "./Service";
import Portfolio from "./Portfolio";
import PortfolioTwo from "./PortfolioTwo";
import Blog from "./Blog";
import Marquee from "./Marquee";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Link from "next/link";
import Accordion from "./Accordion";

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
      >
        {" "}
        <hr className={` ${dark ? "white opacity-1" : "black"}  mt-3 mb-40`} />
        <Service />
      </section>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        style={{ marginTop: "-100px" }}
        id="portfoliotwo"
      >
        {" "}
        <hr className={` ${dark ? "white opacity-1" : "black"}  mt-3 mb-40`} />
        <PortfolioTwo />
      </section>
      <section
        className={`page-section scrollSpysection  pb-0  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="blog"
        style={{ marginTop: "-100px" }}
      >
        <div className="container">
          <div className="mb-100 mb-md-40">
            <div className="row">
              <div className="col-sm-6">
                <h2 className="section-caption mb-0 mb-xs-10 black">
                  Our Customer
                </h2>
              </div>
              <div className="col-sm-6 local-scroll mt-n10 mb-n10 text-sm-end">
                {onePage ? (
                  <>
                    <a
                      href="#contact"
                      className="link-hover-anim align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Testimonials
                        <i
                          className="icon-arrow-right2 size-14"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Testimonials
                        <i
                          className="icon-arrow-right2 size-14"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </a>
                  </>
                ) : (
                  <>
                    <Link
                      href={`/modern-blog${dark ? "-dark" : ""}`}
                      className="link-hover-anim align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        All news{" "}
                        <i
                          className="icon-arrow-right2 size-14"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        All news{" "}
                        <i
                          className="icon-arrow-right2 size-14"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </Link>
                  </>
                )}
              </div>
            </div>
            <hr
              className={` ${dark ? "white opacity-1" : "black"}  mt-3 mb-0`}
            />
          </div>
          <Blog />
          {/* End Newsletter Form */}
        </div>
      </section>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
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
                Lets have a conversation
              </h2>
              <p className="section-descr dark-white mb-0">
                We open to talking to good people. Just say hello, and we will
                start productive cooperation. Start your own success story.
              </p>
            </div>
          </div>{" "}
          <Contact />
        </div>
      </section>
    </>
  );
}
