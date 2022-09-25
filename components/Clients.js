import Image from 'next/image';
import ClientLogo from '../config/clientLogo';
import Carousel from '../helper/Carousel';

function Clients() {
  return (
    // <div className="mb-[4rem] flex justify-center items-center w-100 px-[2rem] z-0">
    <div className="flex justify-between items-center">
      <div className="mx-auto w-[900px]">
      {/* <div className="flex gap-2 lg:gap-10 justify-between w-[900px] items-center"> */}
        <Carousel>
          <div className="flex justify-center items-center mx-auto">
              <img
                src="/assets/images/clients/Blublub-Logo.png"
                width={150}
                height={99.75}
                alt="Logo Client 2"
                className="flex justify-center items-center mx-auto"
              />
          </div>
          <div className="flex justify-center items-center mx-auto">
            <img
              src="/assets/images/clients/Armory-Reborn-Logo.png"
              width={150}
              height={99.75}
              alt="Logo CLient 1"
              className="flex justify-center items-center mx-auto"
            />
          </div>
          <div className="flex justify-center items-center mx-auto">
            <img
              src="/assets/images/clients/Casa-Blanca-Resto-Bar-Bali-Logo.png"
              width={150}
              height={99.75}
              alt="Logo CLient 3"
              className="flex justify-center items-center mx-auto"
            />
          </div>
          <div className="flex justify-center items-center mx-auto">
            <img
              src="/assets/images/clients/Phalani-Fabric-Printing-Logo.png"
              width={150}
              height={99.75}
              alt="Logo Client 4"
              className="flex justify-center items-center mx-auto"
            />
          </div>
          <div className="flex justify-center items-center mx-auto">
              <img
                src="/assets/images/clients/Armory-Reborn-Logo.png"
                width={150}
                height={99.75}
                alt="Logo Client 2"
                className="flex justify-center items-center mx-auto"
              />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Clients;
