import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import { Router } from "next/router";
import Head from "next/head";

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>Suleiman Msumari|Developer</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="description"
          content="I am Suleiman Msumari.Hard-working web developer with a flair for creating elegant solutions in the least amount of time. Developed an ecommerce webapp, customer web portal get inside to find out more. Passionate about software architecture and cloud computing. Regular attendee of web developer hackathons."
        />
      </Head>
      <div className="grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 sm:px-20 md:px-32">
        <div className="col-span-12 p-4 text-center bg-white dark:bg-black lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-white lg:col-span-9 rounded-2xl dark:bg-black dark:text-white shadow-custom-light dark:shadow-custom-dark">
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
