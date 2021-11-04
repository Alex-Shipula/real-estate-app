import { HeaderProps } from "./Header.props";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import BellBadge from "../../UI/Badge";

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.logoHead}>
        <div className={styles.logo}></div>
        <div className={styles.logoText}>
          <div className={styles.agency}> </div>
          <div className={styles.without}> </div>
        </div>
      </div>
      <div className={styles.headerNav}>
        <NavLink className={styles.headerNavEl} to="/marketplace">Marketplace</NavLink>
        <NavLink className={styles.headerNavEl}to="/dashboard">Dashboard</NavLink>
        <NavLink className={styles.headerNavEl}to="/wallet">Wallet</NavLink>
        <NavLink className={styles.headerNavEl}to="/mytokens">My Tokens</NavLink>
        <NavLink className={styles.headerNavEl} to="/blog">Blog</NavLink>
      </div>
      <div>
        <div className={styles.message}> <BellBadge /></div>
        <div className={styles.lang}> </div>
        <div className={styles.userImg}> </div>
        <div className={styles.headerMenu}> </div>
      </div>
    </header>
  );
};
