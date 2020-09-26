import Link from "next/link";
import Layout from "./components/Layout/Layout";
import { Paragraph } from "../styles/title";

export default function Home() {
  return (
    <Layout headTitle="Home page">
      <Paragraph>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit
        blanditiis ipsa quibusdam unde deserunt debitis ipsum distinctio nisi,
        soluta, cum recusandae sit nihil, ex voluptas maxime sunt dolores
        nostrum alias quas iure facere maiores corrupti? Adipisci illum libero
        sunt labore dignissimos? Eligendi nam eaque commodi, sapiente vel
        laboriosam quis quos!
      </Paragraph>
      <Link href="/about-us">go to about</Link>
    </Layout>
  );
}
