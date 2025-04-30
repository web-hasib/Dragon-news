import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us on</h2>
      <div className="join join-vertical w-full">
        <a target="_blank" href="https://www.facebook.com/web.hasibul"  className="btn join-item  bg-base-100 justify-start"><FaFacebook></FaFacebook> Facebook</a>
        <a target="_blank" href="https://x.com/Hasibul9285" className="btn join-item  bg-base-100 justify-start"><FaTwitter></FaTwitter> Twitter</a>
        <a target="_blank" href="https://www.instagram.com/__md_hasibul_islam__/?hl=en" className="btn join-item  bg-base-100 justify-start"><FaInstagram></FaInstagram> Instagram</a>
      </div>
    </div>
  );
};

export default FindUs;
