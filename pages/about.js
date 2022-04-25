import Head from 'next/head';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import Navbar from '../components/Navbar';
import AboutText from '../components/about/AboutText';
import Team from '../components/about/Team';
import Cta from '../components/about/Cta';

export default function About() {
  return (
    <div className="overflow-hidden m-auto">
      <Head>
        <title>Harmonya</title>
        <meta name="description" content="Digital Agency" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="mt-[5rem] items-center justify-center z-0">
        <AboutText />
        <Team />
        <Cta />
      </main>

      <footer className="flex flex-col justify-center">
        <Footer />
      </footer>
    </div>
  );
}
