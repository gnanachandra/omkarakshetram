import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { BsWhatsapp, BsYoutube } from "react-icons/bs";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <footer className="bg-black text-white  ">
      <div className="w-full mx-auto p-2 flex flex-col gap-4 items-center md:flex-row md:flex md:items-center md:justify-around">
        <span className="text-sm  sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()} ఓంకార క్షేత్రం . All Rights Reserved.
        </span>
        <div className="text-center tracking-wider md:tracking-normal">
          
        </div>
        <div className="flex flex-col items-center md:flex-row justify-between p-2 gap-4">
          <div>
            <p className="text-gray-500 text-sm mb-2">
              Connect with us on social media
            </p>
            <div className="flex justify-between mt-2">
              <a href="/" target="_blank" rel="noreferrer" className="mr-4">
                <BsWhatsapp className="text-3xl cursor-pointer" />
              </a>
              <a href="/" target="_blank" rel="noreferrer" className="mr-4">
                <FaInstagram className="text-3xl cursor-pointer" />
              </a>
              <a href="/" target="_blank" rel="noreferrer" className="mr-4">
                <BsYoutube className="text-3xl cursor-pointer" />
              </a>
              <a href="/" target="_blank" rel="noreferrer">
                <FaFacebookF className="text-3xl cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
