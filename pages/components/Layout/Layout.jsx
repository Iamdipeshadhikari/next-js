import Head from "next/head";
import GlobalStyles from "../../../styles/global";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import theme from "../../theme";
import { ThemeProvider } from "styled-components";

export default function Layout({ children, headTitle }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{headTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
