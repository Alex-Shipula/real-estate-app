
import { GetStarted } from "../../components/GetStarted/GetStarted";
import styles from "./HomePage.module.css";

function HomePage(): JSX.Element {
  return (
    <div className={styles.wrapperHome}>
      <div className={styles.homePage}>
        <GetStarted />
      </div>
    </div>
  );
}
export default HomePage;
