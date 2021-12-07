
import { useState } from "react";
import { HeaderProps } from "./Header.props";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../../img/logoProj.svg";
import Avatar from "@mui/material/Avatar";
import AvatarTest from "../../img/testAvatar.png";
import logInButton from "../../img/buttons/loginButton.svg";
import AccountMenu from "../../UI/AccountMenu/AccountMenu";
import Notification from "../../UI/Notification/Notification";
import Language from "../../UI/Language";

const headStr = {
  logoAg: "AGENCY",
  logoWB: "WITHOUT BORDERS",
  mark: "Marketplace",
  dash: "Dashboard",
  wall: "Wallet",
  mytok: "My Tokens",
  blog: "Blog",
  reg: "REGISTER"
}

export const Header = ({ ...props }: HeaderProps): JSX.Element => {

  const [isAuth, setIsAuth] = useState(true);
  const handlerLogIn = () => {
    setIsAuth(true)
  };

  return (
    <header className={styles.wraperHeader}>
      <div className={styles.header}>
        <div className={styles.logoHead}>
          <NavLink className={styles.logo} to="/">
            <img className={styles.logoBig} src={Logo}></img>
          </NavLink>
          <div className={styles.logoText}>
            <div className={styles.agency}>{headStr.logoAg}</div>
            <div className={styles.without}>{headStr.logoWB}</div>
          </div>
        </div>
        <div className={styles.headerNav}>
          <NavLink className={styles.headerNavEl} to="/marketplace">
            {headStr.mark}
          </NavLink>
          <NavLink className={styles.headerNavEl} to="/dashboard">
            {headStr.dash}
          </NavLink>
          <NavLink className={styles.headerNavEl} to="/wallet">
            {headStr.wall}
          </NavLink>
          <NavLink className={styles.headerNavEl} to="/mytokens">
            {headStr.mytok}
          </NavLink>
          <NavLink className={styles.headerNavEl} to="/blog">
            {headStr.blog}
          </NavLink>
        </div>
        {isAuth ? (
          <div className={styles.headerRight}>
            <div className={styles.message}>
              <Notification />
            </div>
            <Language />
             <div className={styles.userImg}>
              <Avatar alt="Test" src={AvatarTest} />
            </div>
            <div className={styles.headerMenu}>
              <AccountMenu logOut={setIsAuth} />
            </div>
          </div>
        ) : (
          <div className={styles.headerRight}>
            <Language />
            <NavLink className={styles.register} to="/register">{headStr.reg}</NavLink>
            <NavLink className={styles.logIn} to="/login" onClick={handlerLogIn}>
              <img src={logInButton}></img>  
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
};
