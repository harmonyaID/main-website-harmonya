import Head from 'next/head';
import Navbar from '../components/Navbar';

import ContactForm from '../components/contact/contactForm';
import { ContactDetails } from '../config/const';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEnvelope, faMapLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import Bottom from '../components/Bottom';
import Image from 'next/image';

function contact() {
    return (
      <div className="overflow-hidden m-auto">
        <Head>
          <title>Harmonya | Contact Us</title>
          <meta name="description" content="Digital Agency" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <Navbar />
        
        <main className="mt-[5rem] items-center justify-center z-0">
          <div className='h-100 w-100 flex flex-col justify-center mb-10 max-w-[1000px] mx-auto'>
            <div className='py-10 px-12'>
              <h1 className="text-blue-700 section-title uppercase font-bold leading-tight">
                GET IN TOUCH
              </h1>
              <p className="pt-5 text-gray-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
                exercitationem qui earum doloribus natus, in at maiores dolorum saepe
                porro harum libero sapiente assumenda incidunt voluptates a quibusdam
                recusandae voluptatem.
              </p>
            </div>

            <div className='w-100 py-10 md:px-12 flex-col md:flex-row gap-6'>
              <div className='grow block p-6 rounded-lg shadow-lg bg-white'>
                <ContactForm />
              </div>

              <div className='flex flex-wrap mt-12 p-6'>
                <ul className='flex flex-col p-6'>
                  <li>
                  <Image
                    src="/assets/images/harmonya-digital-agency-logo.svg"
                    width="150"
                    height="77.94"
                    alt="logo"
                    className="cursor-pointer items-center"
                  />
                  </li>
                  <li className='flex mb-6 items-center gap-6'>
                    <a className="flex gap-5" target="_blank" rel="noreferrer noopener" href="https://wa.me/6282145999059">
                      <FontAwesomeIcon icon={faPhone} className="w-5" /> {ContactDetails.phone}
                    </a>
                  </li>
                  <li className='flex mb-6 items-center gap-7'>
                    <a className='flex gap-5' target="_blank" rel="noreferrer noopener" href="mailto:hello@hamonya.id">
                      <FontAwesomeIcon icon={faEnvelope} className="w-5" /> {ContactDetails.email}
                    </a>
                  </li>
                  <li className='flex mb-6 items-center gap-7'>
                    <a className='flex gap-5' target="_blank" rel="noreferrer noopener" href="https://goo.gl/maps/UBr69tA71fs5Ttrx6">
                      <FontAwesomeIcon icon={faMapLocationDot} className="w-5" />{ContactDetails.addres}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>

        <footer className="flex flex-col justify-center">
          <Bottom />
        </footer>
      </div>
    );
  }
  
  export default contact;
  