import { FaFacebook } from "react-icons/fa6";
import Logo from "../../../assets/logo.png";
import { BsTwitterX, BsYoutube } from "react-icons/bs";
import { ImInstagram } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-[#001931] items-center py-10">
      <div className="w-11/12 mx-auto grid-cols-12 grid gap-10 text-white">
        <div className="col-span-full md:col-span-6 lg:col-span-4 space-y-5">
          <div className="flex items-center gap-1">
            <img src={Logo} alt="Hero Apps Logo" className="w-8" />
            <h2 className="text-xl font-semibold">Hero Apps</h2>
          </div>
          <p className="text-gray-300 text-sm text-justify">
            Hero Apps provides innovative productivity solutions for individuals
            and teams. Our platform helps you organize tasks, track progress,
            and achieve more with less effort, all in one centralized app.
          </p>
        </div>
        <div className="col-span-full md:col-span-6 lg:col-span-2 space-y-5">
          <h2 className="font-semibold">Company</h2>
          <ul className="text-gray-400 space-y-2">
            <li>
              <a href="#">Newsroom</a>
            </li>
            <li>
              <a href="#">Leadership</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="col-span-full md:col-span-6 lg:col-span-2 space-y-5">
          <h2 className="font-semibold">Resources</h2>
          <ul className="text-gray-400 space-y-2">
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Guides</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="col-span-full md:col-span-6 lg:col-span-2 space-y-5">
          <h2 className="font-semibold">Follow Us</h2>
          <ul className="text-white flex gap-4 text-xl">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsYoutube />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTwitterX />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
