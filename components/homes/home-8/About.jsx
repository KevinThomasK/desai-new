import React from "react";
import Image from "next/image";
export default function About() {
  return (
    <>
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <div className="wow fadeInUp">
              <h2 className="section-caption-gradient mb-20 mb-xs-10">
                About Us
              </h2>
              <div className="section-line-gradient mx-auto mb-20" />
              <h3 className="section-title mb-40 mb-sm-30">
                Together we make a Perfect Home
              </h3>
            </div>
            <div className="row text-start text-gray mb-80 mb-sm-60">
              <div
                className="col-md-6 mb-sm-20 wow linesAnimInLong"
                data-splitting="lines"
              >
                Desai Group was founded in the early 1950s by Mr. R M Desai and
                started its business as an outlet for retail sale of paper and
                boards. Now the leader in the distribution of paper and boards
                in South India, the group commenced its construction division in
                the early 90s.
              </div>
              <div
                className="col-md-6 wow linesAnimInLong"
                data-splitting="lines"
              >
                Our 32+ year old legacy run on strong values of trust, quality
                and commitment has been shaping the real estate industry in
                Kerala since 1992. We understand what a 1st home means to an
                owner, hence we strive to deliver on time with utmost care. 61+
                projects and 6000+ satisfied customers are a testimony to the
                quality of work we deliver.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Images Composition */}
      <div className="possition-relaive">
        {/* Decorative Line */}
        <div className="bg-line-1 z-index-1">
          <Image
            src="/assets/images/demo-gradient/decoration-2.png"
            width={1920}
            height={616}
            alt=""
          />
        </div>
        {/* End Decorative Line */}
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="composition-7">
                <div className="composition-7-image-1">
                  <div className="composition-7-border" />
                  <div className="composition-7-inner">
                    <Image
                      src="/assets/images/dd/d-2.webp"
                      alt="Image Description"
                      width={238}
                      height={296}
                    />
                  </div>
                </div>
                <div className="composition-7-image-2">
                  <div className="composition-7-border" />
                  <div className="composition-7-inner">
                    <Image
                      src="/assets/images/dd/d-park.png"
                      alt="Image Description"
                      width={398}
                      height={482}
                    />
                  </div>
                </div>
                <div className="composition-7-image-3">
                  <div className="composition-7-border" />
                  <div className="composition-7-inner">
                    <Image
                      src="/assets/images/dd/dd-2.webp"
                      alt="Image Description"
                      width={460}
                      height={308}
                    />
                  </div>
                </div>
                <div className="composition-7-image-4">
                  <div className="composition-7-border" />
                  <div className="composition-7-inner">
                    <Image
                      src="/assets/images/dd/d-3.webp"
                      alt="Image Description"
                      width={368}
                      height={456}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
