import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Bottom from '../components/Bottom';
import Blob from '../components/Blob';

function Footer() {
  return (
    <div className="h-100 max-w-xl px-[2rem] items-center flex flex-col justify-center">
      <div className="flex flex-col text-center mt-[6rem] mb-10">
        <h2 className="font-bold section-title text-gray-900">
          Need Help With Your Projects?
        </h2>
        <p className="text-2xl text-gray-600 mt-4 mb-10 tracking-widest">
          No need to worry! we are here to help you out!
        </p>
        <div className="mt-2 flex gap-4 items-center justify-center max-w-md z-10">
          <Link href="">
            <a className="border-2 font-bold border-gray-600 bg-transparent text-gray-600 py-4 px-6 rounded-xl hover:bg-blue-700 hover:text-white hover:shadow-md hover:scale-90 hover:border-blue-700 transition duration-500 tracking-wide uppercase text-sm lg:text-lg">
              Get in Touch
            </a>
          </Link>
        </div>
      </div>
      <Bottom />
    </div>
  );
}

export default Footer;
