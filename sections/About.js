import Image from 'next/image';
import Link from 'next/link';
import Animation from '../components/Animation';

function Solution() {
  return (
    <div className="px-[2rem] min-h-screen text-center items-center flex justify-center z-0">
      <div className="relative w-full max-w-lg -mb-2 flex flex-col items-center gap-10">
        <div className="w-full max-w-lg">
          <h2 className="section-title mt-10 font-bold text-2xl md:text-4xl lg:text-[10rem] text-blue-700 uppercase mb-10">
            About Us
          </h2>
          <p className="mt-4 text-center text-xl text-gray-600 w-full max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error modi
            optio, ipsum ullam eligendi nemo quis odit iste quasi voluptatem
            veniam, nam doloribus officiis hic.
          </p>
        </div>
        <div className="mt-4 w-full max-w-md">
          <Animation />
        </div>
      </div>
    </div>
  );
}

export default Solution;
