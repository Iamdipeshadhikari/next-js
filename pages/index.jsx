import Link from "next/link";
import Layout from "./components/Layout/Layout";
import { Paragraph } from "../styles/title";

export default function Home() {
  return (
    <Layout headTitle="Home page">
      <Paragraph>Hi i am home</Paragraph>
      <Link href="/about-us">go to about</Link>
    </Layout>
  );
}
