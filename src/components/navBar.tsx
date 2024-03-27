import React from "react";
import Link from "next/link";
import styles from "~/styles/styles.module.css";

type NavLink = {
  title: string;
  url: string;
};

const Navbar: React.FC = () => {
  const navLinks: NavLink[] = [
    { title: "Home", url: "/" },
    { title: "arno", url: "/arno" },
  ];

  return (
    <nav className={styles.navbar}>
      <Link href={"/"}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="Logo" width="50" height="50" />
        </div>
      </Link>

      <ul className={styles.navList}>
        {navLinks.map((link, index) => (
          <li key={index} className={styles.navItem}>
            <Link href={link.url}>
              <Link href={link.title} className={styles.navLink}>
                {link.title}
              </Link>
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.authButtons}>
        <button className={styles.loginButton}>Login</button>
        <button className={styles.startButton}>Start Now</button>
      </div>
    </nav>
  );
};

export default Navbar;
