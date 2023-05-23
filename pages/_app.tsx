import "@/styles/globals.css";
import "../styles/DragAndDropArea.css";
import "../styles/Board.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
