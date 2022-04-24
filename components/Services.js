import {
  faGlobe,
  faMobileAndroid,
  faMobileAndroidAlt,
  faObjectUngroup,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

function Services() {
  return (
    <div className="mt-6 bg-gray-100 py-16 px-[2rem] items-center flex justify-center z-0">
      <div className="flex flex-col gap-6 items-center md:flex-row max-w-[1200px]">
        <div className="relative bg-white py-5 px-4 text-center flex flex-col items-center justify-center rounded-lg shadow-md group transition duration-150 hover:shadow-xl h-[200px] md:h-[250px] max-h-[400px] z-0">
          <FontAwesomeIcon
            icon={faGlobe}
            className="h-10 group-hover:opacity-0 transition duration-150"
            color="gray"
          />
          <h2 className="mt-4 font-semibold text-xl text-blue-700 group-hover:opacity-0 transition duration-150">
            Website Development
          </h2>
          <p className="text-sm text-gray-500 group-hover:opacity-0 transition duration-150">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            suscipit hic doloremque.
          </p>
          <div className="absolute items-center my-auto opacity-0 group-hover:opacity-100 transition duration-150">
            <Link href="/">
              <a className="border-2 border-gray-600 text-gray-600 py-2 px-4 rounded-xl hover:border-blue-700 hover:bg-blue-700 hover:text-white">
                More Details
              </a>
            </Link>
          </div>
        </div>
        <div className="relative bg-white py-5 px-4 text-center flex flex-col items-center justify-center rounded-lg shadow-md group transition duration-150 hover:shadow-xl h-[200px] md:h-[250px] max-h-[400px]">
          <FontAwesomeIcon
            icon={faMobileAndroidAlt}
            className="h-10 group-hover:opacity-0 transition duration-150"
            color="gray"
          />
          <h2 className="mt-4 font-semibold text-xl text-blue-700 group-hover:opacity-0 transition duration-150">
            Mobile App Development
          </h2>
          <p className="text-sm text-gray-500 group-hover:opacity-0 transition duration-150">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            suscipit hic doloremque.
          </p>
          <div className="absolute items-center my-auto opacity-0 group-hover:opacity-100 transition duration-150">
            <Link href="/">
              <a className="border-2 border-gray-600 text-gray-600 py-2 px-4 rounded-xl hover:border-blue-700 hover:bg-blue-700 hover:text-white">
                More Details
              </a>
            </Link>
          </div>
        </div>
        <div className="relative bg-white py-5 px-4 text-center flex flex-col items-center justify-center rounded-lg shadow-md group transition duration-150 hover:shadow-xl h-[200px] md:h-[250px] max-h-[400px]">
          <FontAwesomeIcon
            icon={faObjectUngroup}
            className="h-10 group-hover:opacity-0 transition duration-150"
            color="gray"
          />
          <h2 className="mt-4 font-semibold text-xl text-blue-700 group-hover:opacity-0 transition duration-150">
            UI / UX Design
          </h2>
          <p className="text-sm text-gray-500 group-hover:opacity-0 transition duration-150">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            suscipit hic doloremque.
          </p>
          <div className="absolute items-center my-auto opacity-0 group-hover:opacity-100 transition duration-150">
            <Link href="/">
              <a className="border-2 border-gray-600 text-gray-600 py-2 px-4 rounded-xl hover:border-blue-700 hover:bg-blue-700 hover:text-white">
                More Details
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
