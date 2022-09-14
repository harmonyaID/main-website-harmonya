import Image from 'next/image';
import Link from 'next/link';
import Cards from '../components/Cards';

function ProductShowCase() {
  return (
    <div className="bg-blue-700 p-10 flex justify-center">
      <div className="flex flex-col items-center justify-center w-full max-w-[1200px]">
        <div>
          <h2 className="section-title mt-10 font-bold text-2xl md:text-4xl lg:text-[6rem] text-white uppercase mb-10">
            Our Works
          </h2>
        </div>
        <div className="flex flex-col gap-2 mt-10 md:flex-row">
          <Cards
            title="Armory Reborn"
            desc="Up to date news portal. Be the first to know what happened curently"
            img="/assets/images/porto/Armory-Reborn.jpg"
          />
          <Cards
            title="Blublub E-Commerce"
            desc="E-commerce for diving spot and accessories. Easy way to enjoy your diving trip"
            img="/assets/images/porto/Blublub.jpg"
          />
          <Cards
            title="Ticket To The Moon"
            desc="E-commerce for Hammock. The best quality Hammock in Bali"
            img="/assets/images/porto/TicketToTheMoon.jpg"
          />
        </div>

        <div className="mt-12 flex gap-4 flex-col md:flex-row items-center">
          <Link href="/works">
            <a className="border-2 border-white-700 bg-white text-blue-700 py-2 px-4 rounded-xl hover:scale-90 hover:shadow-md hover:bg-blue-700 hover:text-white transition duration-500 tracking-wide uppercase text-sm lg:text-lg">
              See More
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductShowCase;
