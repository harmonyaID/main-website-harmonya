import Head from 'next/head';
import Footer from '../../sections/Footer';
import Navbar from '../../components/Navbar';

import ShowList from '../../components/works/ShowList';
import { portoData } from '../../lib/portofolioList';
import Link from 'next/link';

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
            <h2>Portofolio List</h2>
            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-7xl">
              <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {
                portoData?.map((data, index) => (
                  <ShowList key={index}
                    image={data.img}
                    title={data.title}
                    desc={data.desc}
                    tags={data.tags}
                    path={data.path} />
                ))
              }
              </div>
            </div>
            {/* {portoData.map((data, index) => (
                <Link href={'/works' + data.path} key={index}>
                    <a className='text-blue-700'>
                        <h3 className='text-blue-700'>{data.title}</h3>
                    </a>
                </Link>
            ))} */}
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
