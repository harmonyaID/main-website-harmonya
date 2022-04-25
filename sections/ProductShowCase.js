import Image from 'next/image';
import NextLink from 'next/link';
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
            title="Casa Blanca Restaurant"
            desc="A luxury restaurant website with menu page and reservation features"
            img="https://source.unsplash.com/IyaNci0CyRk"
          />
          <Cards
            title="Koonekin"
            desc="One stop connect. Connecting all your social networks with 1 link"
            img="https://source.unsplash.com/fg7J6NnebBc"
          />
          <Cards
            title="VBM System"
            desc="Real Estate Company Web app"
            img="https://source.unsplash.com/FeuEg-8XlA8"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductShowCase;
