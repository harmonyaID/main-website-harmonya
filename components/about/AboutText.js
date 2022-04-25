import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AboutText() {
  return (
    <div className="h-100 w-100 flex flex-col justify-center md:flex-row mb-10 max-w-[1000px] mx-auto">
      <div className="flex-1 py-10 px-12">
        <h1 className="text-blue-700 section-title uppercase font-bold leading-tight">
          Who We Are
        </h1>
        <p className="pt-5 text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          exercitationem qui earum doloribus natus, in at maiores dolorum saepe
          porro harum libero sapiente assumenda incidunt voluptates a quibusdam
          recusandae voluptatem.
        </p>
      </div>
      <div className="flex-1 py-10 px-12">
        <FontAwesomeIcon
          icon={faQuoteLeft}
          className="w-20 top-0 text-blue-300"
        />
        <p className="text-gray-400 font-bold text-xl tracking-wider">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
          voluptates.
        </p>
      </div>
    </div>
  );
}

export default AboutText;
