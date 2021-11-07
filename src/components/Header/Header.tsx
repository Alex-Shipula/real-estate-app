/* eslint-disable @typescript-eslint/semi */
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

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  const [isAuth, setIsAuth] = useState(true);

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
            <NavLink className={styles.register} to="/register">REGISTER</NavLink>
            <NavLink className={styles.logIn} to="/login" onClick={()=>{setIsAuth(true)}}>
              <img src={logInButton}></img>  
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
};
