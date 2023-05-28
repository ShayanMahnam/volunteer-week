import "@/styles/globals.css";
import "../styles/DragAndDropArea.css";
import "../styles/Board.css";
import "../styles/GreenBoard.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Volunteer Week</title>
        <meta name="description" content="Thank you amazing cyf volunteers" />
        <link rel="icon" href="/thanks.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
  
}
  
