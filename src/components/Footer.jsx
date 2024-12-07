import React from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="rounded-lg shadow z-10">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/public/netflix.png"
              className="h-8"
              alt="Flowbite Logo"
            />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="#" className="hover:underline me-4 md:me-6">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline me-4 md:me-6">
                Gizlilik
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline me-4 md:me-6">
                Lisanslar
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                İletişim
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex justify-between">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            © 2024{" "}
            <Link to="https://github.com/cengo14" className="hover:underline">
              Netflix™ (Clone)
            </Link>
            . All Rights Reserved.
          </div>
          <div className="flex gap-2 text-gray-500 ">
            <FaFacebook
              size={26}
              cursor={"pointer"}
              className="hover:text-white"
            />
            <FaInstagram
              size={26}
              cursor={"pointer"}
              className="hover:text-white"
            />
            <FaXTwitter
              size={26}
              cursor={"pointer"}
              className="hover:text-white"
            />
            <FaGithub
              size={26}
              cursor={"pointer"}
              className="hover:text-white"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
