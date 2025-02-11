"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./home.module.css";
import Image1 from "../../image/isk.png";
import Image2 from "../../image/motherhood.png";
import Image4 from "../../image/ping4sms-client1.webp";
import Image5 from "../../image/ping4sms-client5.webp";

const Video = () => {
  return (
    <div className={`${styles["video-container"]} position-relative`}>
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        src="/videos/video.mp4" // Path relative to the public directory
        alt="background"
        className="w-100"
      />

      {/* Black Overlay */}
      <div className={`${styles["video-overlay"]}`}></div>

      {/* Content Overlay */}
      <div className="container">
        <div className={`${styles["video-content"]} text-white`}>
          <h1 className="fw-bold">
            Boost Your Business Revenue by{" "}
            <span className={styles.highlight}>5X with WhatsApp Marketing</span>
          </h1>
          <p className={`${styles.description}`}>
            Unlock the full potential of WhatsApp to connect with your audience
            in real-time. Deliver personalized promotions, build stronger
            customer relationships, and drive unmatched engagement rates.
            Transform your marketing strategy with a platform that guarantees
            results.
          </p>
          <div className="d-flex gap-3 w-100">
            <Link
              href="/blogs/"
              className="btn btn-outline-light px-4 me-2 mb-2"
            >
              Learn More
            </Link>
            <Link
              href="/contact/"
              className="btn btn-primary px-4 ms-2"
            >
              Set Up Discovery Call
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container">
        <div className="bottom-logos text-center mt-5">
          <h3 className="text-white fw-bold">Our Trusted Brands</h3>
          <div className="d-flex justify-content-around">
            <Image
              src={Image2}
              alt="MotherHood"
              className="m-2 logo-img"
              width={120}
              height={60}
            />
            <Image
              src={Image1}
              alt="Isckon"
              className="ms-2 p-3"
              width={120}
              height={60}
            />
            <Image
              src={Image4}
              alt="Yamaha"
              className="m-2 logo-img"
              width={120}
              height={60}
            />
            <Image
              src={Image5}
              alt="Dunzo"
              className="me-2 logo-img"
              width={120}
              height={60}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
