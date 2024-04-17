import { Helmet } from "react-helmet-async";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function ConnectUs() {
  return (
    <>
      <Helmet>
        <title>vix-villa | connect-us</title>
      </Helmet>
      <div data-aos="fade-down">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center p-4">
          <div className="lg:w-1/3">
            <h2 className="text-4xl text-center lg:text-left lg:text-6xl mt-5 font-bold text-black">
              Connect with us
            </h2>
            <p className="text-gray-600 mt-5">
              We are thrilled to connect with you! Whether you have inquiries
              about our properties, want to schedule a viewing, or simply want
              to share your feedback, we are here to assist you every step of
              the way. There are several ways to get in touch with us
            </p>
          </div>
          <div className="lg:w-2/3">
            <img
              src="https://i.ibb.co/RHcNv6B/undraw-Contact-us-re-4qqt.png'"
              alt=""
            />
          </div>
        </div>
        <div className="mt-12">
          <p className="text-2xl lg:text-4xl font-medium text-center">
            JOIN OUR COMMIUNTY
          </p>
          <div className="flex flex-col lg:flex-row justify-center gap-4 mt-10 px-10 lg:px-0">
            <button className="px-7 py-1 bg-[#7289d9] rounded-3xl text-white flex gap-2 items-center justify-center">
              <FaDiscord size={18} /> Discord
            </button>
            <button className="px-7 py-1 bg-[#1DA1F2] rounded-3xl text-white flex gap-2 items-center justify-center">
              <FaTwitter size={18} /> Twitter
            </button>
            <button className="px-7 py-1 bg-[#5B51D8] rounded-3xl text-white flex gap-2 items-center justify-center">
              <FaInstagram size={18} /> Instagram
            </button>
            <button className="px-7 py-1 bg-[#1DB954] rounded-3xl text-white flex gap-2 items-center justify-center">
              <FaSpotify size={18} /> Spotify
            </button>
            <button className="px-7 py-1 bg-[#2b3137] rounded-3xl text-white flex gap-2 items-center justify-center">
              <FaGithub size={18} /> Github
            </button>
            <button className="px-7 py-1 bg-[#0077b5] rounded-3xl text-white flex gap-2 items-center justify-center">
              <FaLinkedin size={18} /> LinkedIn
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConnectUs;
