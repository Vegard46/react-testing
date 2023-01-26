import React from 'react';
import {Link, Outlet, useLocation} from "react-router-dom";
import NavLink from "./NavLink";
import '../styles/navbar.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";

const useCurrentPath = () => {
    const location = useLocation();
    const locationArray = location.pathname.split("/");
    locationArray.shift();
    locationArray.shift();
    return locationArray;
}

function NavBar() {

    const pathArray = useCurrentPath();
    var pathBuild = "";

    return (
        <div className="navbar">
            <div className="navbar-items">
                <div className="navlink">
                    <Link to={"/"} type={"button"} className="navlink-link">
                        <FontAwesomeIcon icon={solid('home')} className="home-icon" size={'sm'}/>
                    </Link>
                </div>
                {pathArray.map((name: string, index: number) => {
                    pathBuild += index > 0 ? "/" : "";
                    pathBuild += name;
                    return <NavLink name={name} path={pathBuild} key={index}/>
                })}
            </div>
            <Outlet/>
        </div>
    )
}

export default NavBar;