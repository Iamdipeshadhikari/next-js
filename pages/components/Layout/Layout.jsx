import Head from "next/head";
import GlobalStyles from "../../../styles/global";
import Header from "../Header/Header";

export default function Layout({ children, headTitle }) {
  return (
    <>
      <Head>
        <title>{headTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <Header />
      {children}
      <h1>I am footer</h1>
    </>
  );
}
