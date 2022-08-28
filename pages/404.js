import Link from 'next/link';

const Oops = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center h-[100vh]">
        <h1 className="font-semibold text-5xl md:text-[5em] lg:text-[6em] xl:text-[7em] text-gray-300">
          404
        </h1>
        <h2 className="font-bold text-8xl md:text-[7em] lg:text-[8em] xl:text-[13em] text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          OOPS!
        </h2>
        <p className="text-lg text-gray-600">The page is not found!</p>
        <p className="text-lg text-gray-600">Please go back!</p>
        <div className="mt-10">
          <Link href="/">
            <a className="border-2 py-2 px-4 rounded-xl border-gray-600 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition duration-150">
              Go Back
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Oops;
