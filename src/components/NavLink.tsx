import React from 'react';
import '../styles/navbar.css';
import {Link} from "react-router-dom";

type NavLinkProps = {
    name: string,
    path: string
    key: number
}


function NavLink (props: NavLinkProps) {

    return (
        <div className="navlink">
            <p>/</p>
            <Link to={props.path} type={"button"} className="navlink-link">{props.name}</Link>
        </div>
    )
}

export default NavLink;