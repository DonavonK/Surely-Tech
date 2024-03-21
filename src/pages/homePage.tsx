// import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";
// import styles from "./index.module.css";
import styles from "~/styles/styles.module.css";
import { boolean } from "zod";
import { useState } from "react";

export default function HomePage() {
  // const hello = api.post.hello.useQuery({ text: "from tRPC" });

  const [buttonWasClicked, setButtonWasClicked] = useState(false);

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>

      {/* ================== Nav Bar =================================== */}

      {/* ===================================================== */}
      
        <div className={styles.container}>
          <h1 className={styles.title}>Home Page</h1>
          <div className={styles.cardRow}>
            {/* =============== */}

            <ul>
              <li>adasd</li>
              <li>adasd</li>
              <li>adasd</li>
              <li>adasd</li>
              <li>adasd</li>
              <li>adasd</li>
              <li>adasd</li>
              <li>adasd</li>
            </ul>

            <Link className={styles.card} href="">
              <h3 className={styles.cardTitle}>First Steps →</h3>

              <div className={styles.cardText}>
                Just the basics - Everything you need to know to set up your
                database and authentication.
              </div>
            </Link>

            {/* =============== */}
          </div>
        </div>

        <div className={styles.testDiv} />

        {/* ================================================================================================ */}
      </main>
    </>
  );
}

// Please remove the below authentication code (Arno)

// function AuthShowcase() {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.post.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className={styles.authContainer}>
//       <p className={styles.showcaseText}>
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className={styles.loginButton}
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// }
