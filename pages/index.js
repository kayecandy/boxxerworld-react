import Head from "next/head";
import Configurator from "../components/configurator/Configurator";

const mode = process.env.MODE;

export default function Home() {
  return (
    <div>
      <Head>
        <title>{mode == "dev" ? "[REACT]" : ""}Boxxerworld Configurator</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://cdn2.boxxerworld.com/favicon.ico"
        />
      </Head>

      <Configurator></Configurator>
    </div>
  );
}
