import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portafolio - JordanDev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1
          className="fw-bold mt-5 text-center"
          style={{ fontSize: "4rem", lineHeight: "1.15" }}
        >
          Jordán Jaramillo
        </h1>

        <p className="text-center fs-3">
          Desarrollador FullStack <code>Js - Php</code>
        </p>

        <div className={styles.grid}>
          <Link href="/proyects">
            <a className={styles.card}>
              <h2>Proyectos 🚀 &rarr;</h2>
              <p>
                Te enseñaré los proyectos que he realizado a lo largo de mi
                carrera.
              </p>
            </a>
          </Link>

          <Link href="/aboutme">
            <a className={styles.card}>
              <h2>Sobre mí 😀 &rarr;</h2>
              <p>
                Te contaré más de como invierto mi tiempo y lo que me gusta
                hacer en mis tiempos libres!
              </p>
            </a>
          </Link>

          <Link href="/blog">
            <a className={styles.card}>
              <h2>Blog 📒 &rarr;</h2>
              <p>
                Te comparto algunas mini-guias sobre técnicas que he aprendido
                en mi carrera de desarrollador
              </p>
            </a>
          </Link>

          <Link href="https://linkedin.com/in/jordanrjdev" target="_blank">
            <a className={styles.card}>
              <h2>Contáctame 📲 &rarr;</h2>
              <p>
                Puedes hablarme por medio de mi perfil de Linkedin será un gusto
                trabajar contigo.
              </p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
