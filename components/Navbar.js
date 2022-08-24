import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import NextLink from 'next/link';
import { useState } from 'react';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const handleClick = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="flex justify-between items-center shadow-md w-100 p-0 m-0 bg-white">
      <div className="relative backdrop-blur-xl bg-white/60 py-2 px-[2rem] md:fixed md:px-[2rem] xl:px-[4rem] top-0 left-0 w-full flex justify-between items-center z-50">
        <Image
          src="/assets/images/harmonya-digital-agency-logo.svg"
          width="150"
          height="77.94"
          alt="logo"
          className="cursor-pointer items-center"
        />
        <div
          className="flex items-end flex-col hamburger justify-center cursor-pointer h-[40px] w-[40px] lg:hidden"
          onClick={handleClick}
        >
          <span></span>
          <span></span>
        </div>
        <div className="gap-6 hidden lg:inline-flex items-center">
          <NextLink href="/">
            <a className="transition duration-500 text-gray-600 font-semibold border-b-2 border-transparent hover:border-b-2 hover:border-blue-700">
              Home
            </a>
          </NextLink>
          <NextLink href="/about">
            <a className="transition duration-500 text-gray-600 font-semibold border-b-2 border-transparent hover:border-b-2 hover:border-blue-700">
              About
            </a>
          </NextLink>
          <NextLink href="/works">
            <a className="transition duration-500 text-gray-600 font-semibold border-b-2 border-transparent hover:border-b-2 hover:border-blue-700">
              Works
            </a>
          </NextLink>
          <NextLink href="/contact">
            <a className="font-semibold tracking-wide border-2 border-gray-600 text-gray-600 py-2 px-4 rounded-xl hover:bg-blue-700 hover:border-blue-700 hover:text-white transition duration-500">
              Get in Touch
            </a>
          </NextLink>
        </div>
      </div>

      {/* Sidebar */}
      <div className="absolute z-50">
        <div
          className={
            sidebar
              ? 'bg-black cursor-pointer fixed inset-0 opacity-20 visible'
              : 'hidden opacity-0'
          }
          onClick={handleClick}
        ></div>
        <div
          className={
            sidebar
              ? 'bg-white fixed duration-500 inset-y-0 py-4 right-0 w-64 z-50'
              : 'bg-white fixed duration-500 inset-y-0 py-4 -right-full w-64 z-0'
          }
        >
          <ul>
            <li>
              <a className="inline-flex px-6 py-2 mb-10 flex-end cursor-pointer">
                <FontAwesomeIcon
                  icon={faXmark}
                  width={30}
                  height={30}
                  className="hover:rotate-180"
                  onClick={handleClick}
                />
              </a>
            </li>
            <li onClick={handleClick}>
              <NextLink href="/">
                <a className="font-semibold text-2xl inline-flex px-6 py-2 transition hover:bg-gray-100 w-full text-gray-600">
                  Home
                </a>
              </NextLink>
            </li>
            <li onClick={handleClick}>
              <NextLink href="/about">
                <a className="font-semibold text-2xl inline-flex px-6 py-2 transition hover:bg-gray-100 w-full text-gray-600">
                  About
                </a>
              </NextLink>
            </li>
            <li onClick={handleClick}>
              <NextLink href="/works">
                <a className="font-semibold text-2xl inline-flex px-6 py-2 transition hover:bg-gray-100 w-full text-gray-600">
                  Works
                </a>
              </NextLink>
            </li>
            <li className="mt-[6rem]" onClick={handleClick}>
              <NextLink href="/contact">
                <a
                  className="flex-end font-normal ml-6 px-6 py-2 transition hover:bg-indigo-500 hover:border-indigo-500 hover:text-white w-full border-2 border-gray-600 rounded-xl text-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GET IN TOUCH
                </a>
              </NextLink>
            </li>
            <li className="mt-10 px-6">
              <ul className="flex space-x-4 items-center">
                <li>
                  <NextLink href="https://github.com/beinawair">
                    <a target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="w-7 hover:text-indigo-500 text-gray-600"
                      />
                    </a>
                  </NextLink>
                </li>
                <li>
                  <NextLink href="https://www.linkedin.com/in/bayu-starrhiawan/">
                    <a target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className="w-7 hover:text-indigo-500 text-gray-600"
                      />
                    </a>
                  </NextLink>
                </li>
                <li>
                  <NextLink href="https://www.instagram.com/beinawair/">
                    <a target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="w-7 hover:text-indigo-500 text-gray-600"
                      />
                    </a>
                  </NextLink>
                </li>
                <li>
                  <NextLink href="https://twitter.com/beinawair">
                    <a target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        className="w-7 hover:text-indigo-500 text-gray-600"
                      />
                    </a>
                  </NextLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
