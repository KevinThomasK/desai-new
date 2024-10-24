import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import React from "react";

export default function Service() {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-lg-6 mb-md-60 mb-sm-30">
          <h2 className="section-caption mb-xs-10">Amenities</h2>
          {/* <h3 className="section-title mb-30">
            <AnimatedText text="Experience Luxury Amenities at DD Sports City" />
          </h3> */}
          <div className="row">
            <div className="col-lg-10">
              <p
                className="section-descr mb-50 mb-sm-30 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                Experience Luxury{" "}
                <span style={{ color: "#1BB170", fontWeight: "500" }}>
                  Amenities{" "}
                </span>
                at DD Sports City
              </p>
            </div>
          </div>
          <ul
            className="nav nav-tabs services-tabs wow fadeInUp"
            data-wow-delay="0.55s"
            role="tablist"
          >
            <li role="presentation">
              <a
                href="#services-item-1"
                className="active"
                aria-controls="services-item-1"
                role="tab"
                aria-selected="true"
                data-bs-toggle="tab"
              >
                Football Court <span className="number">01</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-2"
                aria-controls="services-item-2"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Swimming Pool <span className="number">02</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-3"
                aria-controls="services-item-3"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Badminton Court <span className="number">03</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-4"
                aria-controls="services-item-4"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Basketball Court <span className="number">04</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-5"
                aria-controls="services-item-5"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Gym <span className="number">05</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-6"
                aria-controls="services-item-6"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Jogging Track <span className="number">06</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-7"
                aria-controls="services-item-6"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Table Tennis <span className="number">07</span>
              </a>
            </li>
          </ul>
        </div>
        <div
          className="col-lg-6 d-flex wow fadeInLeft"
          data-wow-delay="0.55s"
          data-wow-offset={275}
        >
          <div className="tab-content services-content">
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item show fade active"
              id="services-item-1"
              role="tabpanel"
            >
              <div className="services-text">
                <div
                  className="services-text-container"
                  style={{ background: "#e6f7e6" }}
                >
                  <h4 className="services-title">Football Court (FIFA Size)</h4>
                  <p className="text-gray mb-0">
                    We have a Fifa-Size Football Court available for everyone to
                    enjoy. It&apos;s perfect for playing matches or practicing
                    your skills with plenty of space to move.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/dd/c9.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-2"
              role="tabpanel"
            >
              <div className="services-text">
                <div
                  className="services-text-container"
                  style={{ background: "#e6f7e6" }}
                >
                  <h4 className="services-title">Swimming Pool</h4>
                  <p className="text-gray mb-0">
                    We have an Olympic-size swimming pool for those who enjoy
                    serious swimming, along with a separate pool designed
                    specifically for women and kids. It&apos;s the perfect setup
                    for both fitness and family fun.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/dd/a6.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-3"
              role="tabpanel"
            >
              <div className="services-text">
                <div
                  className="services-text-container"
                  style={{ background: "#e6f7e6" }}
                >
                  <h4 className="services-title">Badminton Court</h4>
                  <p className="text-gray mb-0">
                    In our flat, we have a dedicated badminton court for
                    residents to enjoy. It&apos;s a great space for fitness and
                    recreation right at home.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/dd/a7.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-4"
              role="tabpanel"
            >
              <div className="services-text">
                <div
                  className="services-text-container"
                  style={{ background: "#e6f7e6" }}
                >
                  <h4 className="services-title">Basketball Court</h4>
                  <p className="text-gray mb-0">
                    We have a full-size basketball court available for
                    residents. It&apos;s ideal for games, practice, or just
                    shooting some hoops with friends.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/dd/c3.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-5"
              role="tabpanel"
            >
              <div className="services-text">
                <div
                  className="services-text-container"
                  style={{ background: "#e6f7e6" }}
                >
                  <h4 className="services-title">Gym</h4>
                  <p className="text-gray mb-0">
                    We have a fully equipped gym for residents, offering
                    everything you need for a great workout. It&apos;s a
                    convenient and well-maintained space for fitness
                    enthusiasts.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/dd/a4.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-6"
              role="tabpanel"
            >
              <div className="services-text">
                <div
                  className="services-text-container"
                  style={{ background: "#e6f7e6" }}
                >
                  <h4 className="services-title">Jogging Track</h4>
                  <p className="text-gray mb-0">
                    We have a dedicated jogging track, perfect for morning runs
                    or evening strolls. It&apos;s a great way to stay active in
                    a peaceful, outdoor setting.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/dd/c1.jpg"
                alt="Image Description"
              />
            </div>
            <div
              className="tab-pane services-content-item fade"
              id="services-item-7"
              role="tabpanel"
            >
              <div className="services-text">
                <div
                  className="services-text-container"
                  style={{ background: "#e6f7e6" }}
                >
                  <h4 className="services-title">Table Tennis</h4>
                  <p className="text-gray mb-0">
                    We have a table tennis area available for residents to enjoy
                    some fun and competitive games. It&apos;s a great spot for
                    friendly matches and improving your skills.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/dd/c2.jpg"
                alt="Image Description"
              />
            </div>

            {/* End Tab Content */}
          </div>
        </div>
      </div>
    </div>
  );
}
