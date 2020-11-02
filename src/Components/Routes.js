//Routes directory에는 page별 js파일이 들어있고 이를 불러오는것이 Router.js
import React from "react";
import PropTypes from "prop-types";
import {Route, Switch, Redirect} from "react-router-dom";
import Auth from "../Routes/Auth";
import Feed from "../Routes/Feed";
import Explore from "../Routes/Explore";
import Search from "../Routes/Search";
import Profile from "../Routes/Profile";

//Login시 
const LoggedInRoutes = () => (
    <Switch>
        <Route exact path="/" component={Feed}/>
        <Route path="/explore" component={Explore} />
        <Route path="/search" component={Search} />
        <Route path = "/:username" component={Profile}/>
        <Redirect from="*" to="/" />
    </Switch>
);
//Login X
const LoggedOutRoutes = () => (
    <Switch>
        <Route exact path="/" component={Auth}/>
        <Redirect from="*" to="/" />
    </Switch>
);

//Router has only one prob => isLoggedIn
const AppRouter = ({isLoggedIn}) => (
    isLoggedIn ? <LoggedInRoutes/>:<LoggedOutRoutes/>
);

AppRouter.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;