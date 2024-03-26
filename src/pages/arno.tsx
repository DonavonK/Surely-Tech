// import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
// import styles from "./index.module.css";
import styles from "~/styles/styles.module.css";

import { boolean } from "zod";
import { useState } from "react";

export default function Arno() {
  // const hello = api.post.hello.useQuery({ text: "from tRPC" });

  const [buttonWasClicked, setButtonWasClicked] = useState(false);

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <Link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.navbar}>
      </div>
        
      <main className={styles.main}>



        <div className={styles.container_center}>
          <h1 className={styles.title}>arno</h1>
          <div className={styles.cardRow}></div>
        </div>
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
