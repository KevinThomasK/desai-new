"use client";
import { useState } from "react";
import { blogs8 } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import VideoModal from "@/components/VideoModal";
import { Navigation } from "swiper/modules";

export default function Blog() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const openModal = (url) => {
    // Extract video ID from the YouTube URL
    const videoId = url.split("v=")[1]; // This extracts the part after 'v='
    const embedUrl = `https://www.youtube.com/embed/${videoId}`; // Construct the embed URL
    setVideoUrl(embedUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoUrl("");
  };
  return (
    <>
      <div className="row">
        <div className="col-8 col-sm-7">
          {/* <h3 className="hs-title-5 font-alt overflow-hidden mb-100 mb-md-40">
            <span className="d-block wow fadeRotateIn"> Latest </span>
            <span className="d-block text-end wow fadeRotateIn"> News </span>
          </h3> */}
          <h2 className="section-title mb-40 mb-xs-30">Happy Customers</h2>
        </div>
      </div>
      {/* Blog Grid */}
      <div className="row gy-4">
        {/* Post Item */}
        {blogs8.map((post, index) => (
          <div
            key={index}
            className={`post-prev-2 col-md-6 col-lg-4`}
            data-rellax-y={post.rellaxY}
            data-rellax-speed={post.rellaxSpeed}
            data-rellax-percentage={post.rellaxPercentage}
          >
            <div
              className={`
              ${index == 0 ? "mt-140 mt-md-0" : ""}
              ${index == 2 ? "mt-n140 mt-md-0" : ""}
            `}
            >
              <button
                onClick={() => openModal(post.id)}
                className="post-prev-2-img"
                style={{ border: "none" }}
              >
                <Image
                  src={post.imageSrc}
                  width={700}
                  height={479}
                  alt="Image Description"
                />
              </button>
              <h3 className="post-prev-2-title">{post.title}</h3>
              <div className="post-prev-2-info">{post.date}</div>
            </div>
          </div>
        ))}
        {/* End Post Item */}
      </div>
      <VideoModal isOpen={isModalOpen} onClose={closeModal}>
        <div className="video-container">
          <iframe
            width="100%"
            height="400"
            src={videoUrl} // The URL for the iframe is the constructed YouTube embed URL
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video player"
          ></iframe>
        </div>
      </VideoModal>
      {/* End Blog Grid */}
      {/* Newsletter Form */}
    </>
  );
}
