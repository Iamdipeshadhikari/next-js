import Link from "next/link";
import Layout from "./components/Layout/Layout";
import { Paragraph } from "../styles/title";

export default function Home() {
  return (
    <Layout headTitle="Home page">
      <Paragraph>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt nulla
        ipsam, sed dolorem vero debitis eaque atque, omnis dolores nam, facere
        cumque voluptatem? Perspiciatis ipsa ut optio unde reiciendis quos? Non
        doloremque consequuntur sapiente laudantium ex temporibus ducimus
        voluptatem repellat beatae modi ullam nobis reiciendis inventore amet,
        ab quia alias illo doloribus maxime animi porro nostrum nihil.
        Architecto at eaque minima quasi, modi accusantium eveniet. Sit
        sapiente, facere aut quisquam provident odio aperiam? Quaerat voluptate
        dignissimos harum ipsa temporibus commodi quo molestiae eius quis
        quibusdam accusamus at saepe aut, blanditiis non ratione similique
        placeat alias sed? Sapiente blanditiis accusamus nostrum non! Illum
        libero dolores debitis a inventore voluptatibus eos eum numquam,
        voluptas alias placeat porro impedit id dolorem totam nemo cum adipisci
        quasi! Omnis ex fugit blanditiis, quo explicabo harum nesciunt
        exercitationem et fugiat mollitia error animi veritatis incidunt
        accusamus vero culpa ipsam odio, possimus ratione debitis! Reprehenderit
        quae, rem tempora eveniet asperiores quisquam commodi ab earum minus ad
        aliquid nesciunt nobis saepe reiciendis expedita facere. Sunt sequi,
        odio recusandae dolor in vitae quis. Maiores ratione vel est molestias
        numquam laboriosam, facilis explicabo asperiores iusto magni! Illo
        voluptatibus, corporis earum soluta, cum nemo autem doloremque labore et
        rerum, ratione similique? Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Incidunt nulla ipsam, sed dolorem vero debitis eaque
        atque, omnis dolores nam, facere cumque voluptatem? Perspiciatis ipsa ut
        optio unde reiciendis quos? Non doloremque consequuntur sapiente
        laudantium ex temporibus ducimus voluptatem repellat beatae modi ullam
        nobis reiciendis inventore amet, ab quia alias illo doloribus maxime
        animi porro nostrum nihil. Architecto at eaque minima quasi, modi
        accusantium eveniet. Sit sapiente, facere aut quisquam provident odio
        aperiam? Quaerat voluptate dignissimos harum ipsa temporibus commodi quo
        molestiae eius quis quibusdam accusamus at saepe aut, blanditiis non
        ratione similique placeat alias sed? Sapiente blanditiis accusamus
        nostrum non! Illum libero dolores debitis a inventore voluptatibus eos
        eum numquam, voluptas alias placeat porro impedit id dolorem totam nemo
        cum adipisci quasi! Omnis ex fugit blanditiis, quo explicabo harum
        nesciunt exercitationem et fugiat mollitia error animi veritatis
        incidunt accusamus vero culpa ipsam odio, possimus ratione debitis!
        Reprehenderit quae, rem tempora eveniet asperiores quisquam commodi ab
        earum minus ad aliquid nesciunt nobis saepe reiciendis expedita facere.
        Sunt sequi, odio recusandae dolor in vitae quis. Maiores ratione vel est
        molestias numquam laboriosam, facilis explicabo asperiores iusto magni!
        Illo voluptatibus, corporis earum soluta, cum nemo autem doloremque
        labore et rerum, ratione similique?
      </Paragraph>
      <Link href="/about-us">go to about</Link>
    </Layout>
  );
}
