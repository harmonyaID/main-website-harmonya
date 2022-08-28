import Head from 'next/head';
import Footer from '../sections/Footer';
import Navbar from '../components/Navbar';

import ShowList from '../components/works/ShowList';

function works() {
  return (
    <div className="overflow-hidden m-auto">
      <Head>
        <title>Harmonya | Our Works</title>
        <meta name="description" content="Digital Agency" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      
      <main className="mt-[5rem] items-center justify-center z-0">
        <div className='h-100 w-100 flex flex-col justify-center mb-10 max-w-[1000px] mx-auto'>
          <div className='py-10 px-12'>
            <h1 className="mt-4 text-blue-700 section-title uppercase font-bold leading-tight">
              Recent Works
            </h1>
            <p className="pt-5 text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
              exercitationem qui earum doloribus natus, in at maiores dolorum saepe
              porro harum libero sapiente assumenda incidunt voluptates a quibusdam
              recusandae voluptatem.
            </p>
          </div>

          <div className='py-10 px-12'>
            LIST
          </div>
        </div>
      </main>

      <footer className="flex flex-col justify-center">
        <Footer />
      </footer>
    </div>
  );
}

export default works;
