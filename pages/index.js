import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Diethyl 0601</title>
        <meta
          name='description'
          content='Is the Akamig Blog Project Done Yet?'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Diethyl<sup>*</sup>
        </h1>

        <p className={styles.description}>
          Akamig's Maximalist Wiki-ish Personal Content Manager Project
        </p>

        <div>
          <h1>Release Date: </h1>
          <h2 className={styles.strike}>
            <div>Late 2018</div>
            <div>2019 March</div>
            <div>2019 Summer Break</div>
            <div>2019 Winter Break</div>
            <div>Late 2019**</div>
            <div>2020 End of July</div>
            <div>2020 Christmas</div>
            <div>2020/12/31</div>
            <div>2020MANFUCKTHIS</div>
            <div>2021 March</div>
            <div>Last Month</div>
          </h2>
          <h1>2021 / 06 / 01, Probably.</h1>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>What is Diethyl?</h2>
            <p>
              Diethyl is a traditional blogging service with flexible document
              and metadata model, it's basically mix of Notion, MediaWiki, and
              Tistory, made out of Next.js, PostgreSQL, Prisma.
            </p>
          </div>

          <div className={styles.card}>
            <h2>Is it done yet?</h2>
            <p>No.</p>
          </div>
        </div>
        <div className={styles.footnote}>
          <p>* The name "Diethyl" for this project is not fixed yet. </p>
          <p>
            ** Was finished with Gatsby, not satisfied, so scraped and restarted
            with Next.js.
          </p>
        </div>
      </main>
    </div>
  );
}
