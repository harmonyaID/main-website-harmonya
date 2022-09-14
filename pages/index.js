import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../sections/Header';
import Services from '../components/Services';
import Animation from '../components/Animation';
import About from '../sections/About';
import ProductShowCase from '../sections/ProductShowCase';
import Data from './api/ProjectsData';
import Footer from '../sections/Footer';
import Bottom from '../components/Bottom';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Harmonya</title>
        <meta name="description" content="Digital Agency" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Services />

      <main className="items-center justify-center z-0">
        <section>
          <ProductShowCase Data={Data} />
        </section>
       
        <section className="py-[4rem]">
          <About />
        </section>
      </main>

      <footer className="flex flex-col justify-center">
        <Footer />
      </footer>
    </div>
  );
}
