import Head from 'next/head';
import Footer from '../sections/Footer';
import Navbar from '../components/Navbar';

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
        Our Works
      </main>

      <footer className="flex flex-col justify-center">
        <Footer />
      </footer>
    </div>
  );
}

export default works;
