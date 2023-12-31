import store from "@/redux/store";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Roboto } from "next/font/google";
import Head from "next/head";
import { Provider } from "react-redux";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <title>Pixel Wise</title>
      </Head>

      <div className={roboto.className}>
        <Provider store={store}>
          <SessionProvider session={pageProps.session}>
            {getLayout(<Component {...pageProps} />)}
          </SessionProvider>
        </Provider>
      </div>
    </>
  );
}

