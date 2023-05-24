import React from "react";
import './Nav.scss'
class Navigation extends React.Component {
    render() {
        return (
            <div className="topnav">
                <a className="active" href="/">Home</a>
                <a href="/todos">ToDos</a>

                <a href="/about">About</a>
            </div>
        )
    }
}
export default Navigation;