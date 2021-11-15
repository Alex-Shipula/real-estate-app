/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import styles from "./Layout.module.css";


export const Layout = (props): JSX.Element => {

  return (
    <>
      <Header />
      <main className={styles.mainContent}>{props.children}</main>
      <Footer />
    </>
  );
};
