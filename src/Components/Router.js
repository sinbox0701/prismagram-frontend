//Routes directory에는 page별 js파일이 들어있고 이를 불러오는것이 Router.js
import React from "react";
import PropTypes from "prop-types";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Auth from "../Routes/Auth";
import Feed from "../Routes/Feed";

//Login시 
const LoggedInRoutes = () => (
    <>
        <Route exact path="/" component={Feed}/>
    </>
);
//Login X
const LoggedOutRoutes = () => (
    <>
        <Route exact path="/" component={Auth}/>
    </>
);

//Router has only one prob => isLoggedIn
const AppRouter = ({isLoggedIn}) => (
    <Router>
        <Switch>{isLoggedIn ? <LoggedInRoutes/>:<LoggedOutRoutes/>}</Switch>
    </Router>
);

AppRouter.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;