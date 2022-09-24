import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../sections/Footer";

import portofolioList from "../../lib/portofolioList.json";
import { portoData } from "../../lib/portofolioList";

export default function Portofolio({ porto }) {
    return (
        <div className="m-auto">
            <Head>
                <title>Harmonya | {porto.title}</title>
                <meta name="description" content="Digital Agency" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className="mt-[5rem] items-center justify-center z-0">
                <div className='h-100 w-100 flex flex-col justify-center mb-10 max-w-[1000px] mx-auto'>
                    <div className='py-10 px-12'>
                        <h1>{porto.title}</h1>
                        <p>{ porto.desc }</p>
                    </div>
                </div>
            </main>


            <footer className="flex flex-col justify-center">
                <Footer />
            </footer>
        </div>
    )
}


export async function getStaticProps({ params }) {
    const portofolioItem = params.portofolio;
    const index = portofolioList.findIndex(item => {
        if(item.path == portofolioItem){
            return true
        }
    })
    return {
      props: {
        porto: portofolioList[index]
      }
    }
}

export async function getStaticPaths() {
    const porto = portoData;
    return {
        paths: porto.map(porto => {
            const portofolio = porto.title.toLowerCase().replace(/ /g, '-');
            console.log(portofolio)
            return {
                params: {
                    portofolio
                }
            }
        }),
        fallback: false
    }
}