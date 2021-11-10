import { sliderUnstyledClasses } from "@mui/core";
import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import styles from "./HomePage.module.css";

function HomePage(): JSX.Element {
  return (
    <div className={styles.wrapperHome}>
      <div className={styles.homePage}>
        <Header />
        <h1 className={styles.pageTitle}>HomePage</h1>
        <Footer />
      </div>
    </div>
  );
}
export default HomePage;
