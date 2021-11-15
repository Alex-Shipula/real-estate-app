import { NavLink } from "react-router-dom";
import styles from "./GetStarted.module.css";
import buttonGetStarted from "../../img/buttons/buttonGetStarted.svg";
import getImg from "../../img/getStartedFoto.svg";
import getImgBack from "../../img/getStartedBack.svg";

export const GetStarted = (): JSX.Element => {
  return (
    <div className={styles.wrapperGetStarted}>
      <div className={styles.getStarted}>
        <div className={styles.left}>
          <div className={styles.headText}>
          Fractional and frictionless real estate investing
          </div>
          <div className={styles.ownership}>
          Ownership Reinvented
          </div>
          <div className={styles.smallText}>
          For the first time, investors around the globe can buy into the US real estate market through fully-compliant, fractional, tokenized ownership. Powered by blockchain.
          </div>
          <NavLink className={styles.buttonGet} to="/marketplace">
            <img src={buttonGetStarted}></img>
          </NavLink>
        </div>
        <div className={styles.right}>
          <div className={styles.rightImg}>
            <img src={getImg}></img>
          </div>
          <div className={styles.rightImgBack}>
            <img src={getImgBack}></img>
          </div>
        </div>
      </div>
    </div>
  );
};
