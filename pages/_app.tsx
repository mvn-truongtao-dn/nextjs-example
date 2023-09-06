import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppPropsWithLayout } from "../model";
import EmptyLayout from "@/components/layout/empty";
import { Inter } from "@next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
