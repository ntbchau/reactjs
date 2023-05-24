import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Nav.scss'
class Navigation extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" activeClassName="active">
                    Home
                </NavLink>
                <NavLink to="/todos" activeClassName="active">
                    ToDo
                </NavLink>
                <NavLink to="/about" activeClassName="active">
                    About
                </NavLink>
                {/* <Link to="/">Home</Link>
                <Link to="/todos">ToDos</Link>
                <Link to="/about">About</Link> */}
            </div>
        )
    }
}
export default Navigation;