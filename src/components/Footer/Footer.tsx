
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../../img/logoProj.svg";

const headStr = {
  logoAg: "AGENCY",
  logoWB: "WITHOUT BORDERS",
  reg: "REGISTER"
};

export const Footer = (): JSX.Element => {
  const main = [
    { name: "Marketplace", to: "/marketplace" },
    { name: "Dashboard", to: "/dashboard" },
    { name: "Wallet", to: "/wallet" },
    { name: "My Tokens", to: "/mytokens" },
    { name: "Blog", to: "/blog" }
  ];

  return (
    <footer className={styles.wraperFooter}>
      <div className={styles.backgroundFooter}>
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
            {main.map((val, i) => (
              <div>
                <NavLink key={i} className={styles.footerNavEl} to={val.to} >
                  {val.name}
                </NavLink>
              </div>))}
          </div>
        </div>
      </div>
    </footer>
  );
};
