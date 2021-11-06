import { HeaderProps } from "./Header.props";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../../img/icons/logoProj.svg";
import Avatar from "@mui/material/Avatar";
import AvatarTest from "../../img/avatarTest.png";
import logoEN from "../../img/icons/ENdown.svg";
import AccountMenu from "../../UI/AccountMenu/AccountMenu";
import Notification from "../../UI/Notification/Notification";

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={styles.wraperHeader}>
      <div className={styles.header}>
        <div className={styles.logoHead}>
          <NavLink className={styles.logo} to="/">
            <img className={styles.logoBig} src={Logo}></img>
          </NavLink>
          <div className={styles.logoText}>
            <div className={styles.agency}>AGENCY</div>
            <div className={styles.without}>WITHOUT BORDERS</div>
          </div>
        </div>
        <div className={styles.headerNav}>
          <NavLink className={styles.headerNavEl} to="/marketplace">
            Marketplace
          </NavLink>
          <NavLink className={styles.headerNavEl} to="/dashboard">
            Dashboard
          </NavLink>
          <NavLink className={styles.headerNavEl} to="/wallet">
            Wallet
          </NavLink>
          <NavLink className={styles.headerNavEl} to="/mytokens">
            My Tokens
          </NavLink>
          <NavLink className={styles.headerNavEl} to="/blog">
            Blog
          </NavLink>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.message}>
            <Notification />
          </div>
          <div className={styles.lang}>
            <div>EN</div>
            <img src={logoEN}></img>
          </div>
          <div className={styles.userImg}>
            <Avatar alt="Test" src={AvatarTest} />
          </div>
          <div className={styles.headerMenu}>
            <AccountMenu />
          </div>
        </div>
      </div>
    </header>
  );
};
