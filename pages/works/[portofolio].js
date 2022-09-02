import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../sections/Footer";

import { portoData } from "../../lib/portofolioList";
import ShowList from "../../components/works/ShowList";

const Portofolio = () => {
    return (
        <div className="m-auto">
            <Head>
                <title>Harmonya | {portoData.title}</title>
                <meta name="description" content="Digital Agency" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            {/* <h1>{ portoData.title }</h1>
            <p>{ portoData.desc }</p> */}

            <footer className="flex flex-col justify-center">
                <Footer />
            </footer>
        </div>
    )
}

export default Portofolio;