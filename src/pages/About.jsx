import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { useNavigate } from "react-router";
import { IoIosArrowBack } from "react-icons/io";
// import NavBar from "../components/NavBar";

export default function About() {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center py-20 flex-col relative">
        <button
          onClick={() => navigate(-1)}
          className="mt-4 mb-4 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600 transition-colors duration-300 absolute top-4 left-4"
        >
          <IoIosArrowBack size={30}/>
        </button>
        <div className="w-9/12 mx-auto text-center animate-fadeIn ">
          <h1 className="text-4xl text-orange-300 md:text-5xl font-bold mb-4">
            👋 Hello, I'm Hasibul Islam
          </h1>
          <p className="text-lg text-gray-300 mb-4">
            {/* I'm a passionate web developer who loves to build interactive user experiences. */}
            I'm a passionate web developer with a focus on building interactive,
            user-friendly applications. I love crafting elegant code and turning
            creative ideas into real products.
          </p>

          {showMore && (
            <p className="text-sm text-accent my-10 leading-relaxed text-justify transition-all duration-300">
              Hi, I’m Hasibul Islam — a passionate and self-driven web developer
              with a strong love for building beautiful, functional, and
              interactive user experiences on the web. Ever since I discovered
              my interest in coding, I’ve been on a constant journey to learn,
              create, and improve. My curiosity led me to explore various web
              technologies, and over time, I’ve developed a deep understanding
              of HTML, CSS, JavaScript, and modern frameworks like React. I love
              how coding allows me to turn imagination into reality — building
              websites and apps that are not only visually engaging but also
              meaningful and helpful for users.
              <br />
              <br />
              While front-end development is where I thrive, I’m also steadily
              expanding my skillset toward full-stack development. I believe a
              good developer is one who can continuously learn and adapt, and I
              always challenge myself to push boundaries, break things, and
              rebuild with better solutions. Whether it’s creating an animated
              UI or optimizing performance for faster loading, I enjoy sweating
              the small details that make digital experiences smooth and
              delightful.
              <br />
              <br />
              Beyond code, I’m an active member of the tech community. I
              frequently engage with fellow developers through platforms like
              GitHub and LinkedIn, sharing projects and ideas. I also use social
              media like Facebook, Instagram, and Twitter to stay connected with
              like-minded creators and keep up with industry trends. I find joy
              in collaborating, exchanging knowledge, and helping others grow,
              just as I continue to grow myself.
              <br />
              <br />
              Outside of tech, I enjoy exploring design inspiration, learning
              about digital products, and occasionally diving into photography
              and content creation. I believe having a creative mindset is just
              as important as technical skills when it comes to building truly
              impactful products. My personal projects often reflect a blend of
              technical execution and visual storytelling — something I take
              pride in.
              <br />
              <br />
              Looking ahead, my mission is to continue developing projects that
              solve real problems, contribute to open-source, and eventually
              work with teams and clients who value quality, innovation, and
              clean design. I'm not just chasing a career; I'm crafting a
              journey filled with code, creativity, and continuous improvement.
              Every project I touch, every piece of feedback I receive, and
              every lesson I learn adds a new layer to the developer — and
              person — I’m becoming.
              <br />
              <br />
              Thanks for taking the time to learn a bit about me. If you’re ever
              up for a collaboration, have feedback on my work, or just want to
              say hello, feel free to connect with me on any of my social
              platforms. Let’s build something amazing together!
            </p>
          )}

          {/* <button
          onClick={() => setShowMore(!showMore)}
          className="bg-white text-gray-900 px-6 py-3 mb-8 rounded-2xl shadow-lg hover:bg-gray-200 transition-all duration-300"
        >
          {showMore ? "Show Less" : "More About Me"}
        </button> */}
          <a
            href="#_"
            onClick={() => setShowMore(!showMore)}
            class="mb-10 mt-5 relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-blue-500 rounded-xl group"
          >
            <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-blue-600 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-blue-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              {" "}
              {showMore ? "Show Less" : "More About Me"}
            </span>
          </a>

          <div className="flex justify-center gap-6">
            <a
              href="https://www.facebook.com/web.hasibul/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-125 transition-transform duration-300 text-blue-500"
            >
              <FaFacebookF size={28} />
            </a>
            <a
              href="https://www.instagram.com/__md_hasibul_islam__/?hl=en"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-125 transition-transform duration-300 text-pink-500"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://github.com/web-hasib"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-125 transition-transform duration-300 text-gray-200"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://x.com/Hasibul9285"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-125 transition-transform duration-300 text-sky-400"
            >
              <FaTwitter size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/-hasibul-islam-/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-125 transition-transform duration-300 text-blue-400"
            >
              <FaLinkedinIn size={28} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
