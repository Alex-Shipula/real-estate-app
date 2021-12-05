//import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Blog from "./pages/Blog/Blog";
import Error404 from "./pages/404/Error404";
import Dashboard from "./pages/Dashboard/Dashboard";
import Marketplace from "./pages/Marketplace/Marketplace";
import MyTokens from "./pages/MyTokens/MyTokens";
import Wallet from "./pages/Wallet/Wallet";
import LogIn from "./pages/LogIn/LogIn";
import Register from "./pages/Register/Register";
import { Layout } from "./components/Layout/Layout";
import MarketSinglePage from "./pages/MarketSinglePage/MarketSinglePage";

function App(): JSX.Element {
  return (
    <Layout >
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/marketplace" component={Marketplace} />
        <Route path="/market-single-page/:slotid" component={MarketSinglePage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/wallet" component={Wallet} />
        <Route exact path="/mytokens" component={MyTokens} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/register" component={Register} />
        <Route path="/404" component={Error404} />
        <Redirect to="/404" />
      </Switch>
    </Layout>
  );
}
export default App;
