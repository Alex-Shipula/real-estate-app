import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../../img/logoProj.svg";

const headStr = {
  logoAg: "AGENCY",
  logoWB: "WITHOUT BORDERS",
  mark: "Marketplace",
  dash: "Dashboard",
  wall: "Wallet",
  mytok: "My Tokens",
  blog: "Blog",
  reg: "REGISTER",
};

export const Footer = (): JSX.Element => {
  return (
    <footer className={styles.wraperFooter}>
      <div className={styles.footer}>
        <div className={styles.left}>
          <div className={styles.logoHead}>
            <NavLink className={styles.logo} to="/">
              <img className={styles.logoImg} src={Logo}></img>
            </NavLink>
            <div className={styles.logoName}>
              <div className={styles.agency}>{headStr.logoAg}</div>
              <div className={styles.without}>{headStr.logoWB}</div>
            </div>
          </div>
          <div className={styles.adressText}>Address</div>
          <div className={styles.wraperAdress}>
            <div className={styles.adress}>980 N. Federal Hwy, Suite #110 Boca</div>
            <div className={styles.adress}>Raton, FL 33432</div>
          </div>
          <div className={styles.year}>©2021 REALTOKEN</div>
          <div className={styles.termsPrivacy}>
            <NavLink className={styles.terms} to="/terms">Terms of Service</NavLink>
            <div className={styles.and}>and</div>
            <NavLink className={styles.privacy} to="/privacy">Privacy Policy.</NavLink>
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.phone}>Phone</div>
          <div className={styles.phoneNumber}>(561)  283 - 8800</div>
        </div>
        <div className={styles.right}>
          <div className={styles.siteMap}>Site map</div>
          <NavLink className={styles.footerNavEl} to="/marketplace">
            {headStr.mark}
          </NavLink>
          <NavLink className={styles.footerNavEl} to="/dashboard">
            {headStr.dash}
          </NavLink>
          <NavLink className={styles.footerNavEl} to="/wallet">
            {headStr.wall}
          </NavLink>
          <NavLink className={styles.footerNavEl} to="/mytokens">
            {headStr.mytok}
          </NavLink>
          <NavLink className={styles.footerNavEl} to="/blog">
            {headStr.blog}
          </NavLink>
        </div>
      </div>
    </footer>
  );
};
