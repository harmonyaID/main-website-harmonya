import Head from 'next/head';
import Footer from '../../sections/Footer';
import Navbar from '../../components/Navbar';
import { motion } from 'framer-motion'

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

          <div className='px-12'>
            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-7xl">
                {
                  portoData?.map((item, index) => (
                    <div key={index} className="w-100 mb-24 relative">
                      <motion.h3 initial={{ opacity: 0, x:-100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: "spring", bounce: 0.4, duration: 3 }} viewport={{ once: true }} className="text-3xl text-white shadow-lg absolute top-10 z-10 p-10 bg-blue-600">{item.title}</motion.h3>
                      <Link href={'works/' + item.path}>
                        <a>
                          <motion.img initial={{ opacity: 0, y:-100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ type: "spring", bounce: 0.4, duration: 2 }} viewport={{ once: true }} src={item.img} alt="armory reborn" className='p-20 rounded-xl grayscale hover:grayscale-0 transition duration-500' title='Armory Reborn'/>
                        </a>
                      </Link>
                      <motion.p initial={{ opacity: 0, x:+100 }} whileInView={{ opacity: 1, x: 0, duration: 6 }} transition={{ type: "spring", bounce: 0.4, duration: 4 }} viewport={{ once: true }} className="text-md text-gray-500 p-12 shadow-xl absolute bottom-10 right-0 max-w-sm bg-white">{item.desc}</motion.p>
                    </div>
                  ))
                }
              {/* <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
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
              </div> */}
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
