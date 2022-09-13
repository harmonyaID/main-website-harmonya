import Link from 'next/link';
import { useTypeWriter } from './useTypeWriter';
import Blob from './Blob';

const words = ['Website', 'Mobile App', 'Design'];

function Hero() {
  const typeWriter = useTypeWriter(words);
  return (
    <div className="px-[2rem] mt-10">
      <div className="flex flex-col items-center justify-center text-center h-[70vh] md:h-[100vh]">
        <h1 className="font-bold text-4xl md:max-w-md lg:text-6xl lg:max-w-2xl xl:text-7xl xl:max-w-4xl">
          <span className="text-blue-700">BIG</span> changes starts with small
          steps!
        </h1>
        <div className="relative top-5 left-1/4 w-full max-w-sm max-h-screen">
          <div className="absolute -bottom-12 left-7 lg:left-20 w-72 h-72 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 md:animate-blob animation-delay-4000"></div>
        </div>
        <p className="mt-10 text-xl text-gray-600 lg:text-2xl xl:text-3xl flex flex-col">
          What do we do?
          <span className="text-blue-700 font-bold uppercase text-center blinking-cursor">
            {typeWriter}
          </span>
        </p>
        <div className="mt-12 flex gap-4 flex-col md:flex-row items-center">
          <Link href="/contact">
            <a className="border-2 border-blue-700 bg-blue-700 text-white py-2 px-4 rounded-xl hover:scale-90 hover:shadow-md transition duration-500 tracking-wide uppercase text-sm lg:text-lg">
              Contact Us
            </a>
          </Link>
          <Link href="https://www.harmonya.id/file/Portfolio-2022.pdf">
            <a className="border-2 border-gray-600 bg-transparent text-gray-600 py-2 px-4 rounded-xl hover:bg-blue-700 hover:text-white hover:shadow-md hover:scale-90 hover:border-blue-700 transition duration-500 tracking-wide uppercase text-sm lg:text-lg" target="_blank" >
              Portofolio
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
