import { manrope } from "@/styles/fonts";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { store } from "stores/store";
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ToastContainer />
      <main className={`${manrope.className}`}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
