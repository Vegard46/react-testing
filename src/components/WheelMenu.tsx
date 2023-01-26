import React from 'react';
import { useNavigate } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import '../styles/wheel-menu.css';

function WheelMenu (props: any) {

    const navigate = useNavigate();

    return (
        <div className={'wheel-menu center'}>
            <button id="up-left-piece" className="wheel-piece" onClick={() => navigate("nav/languages")}>
                <FontAwesomeIcon icon={solid('bar-chart')} size="5x"/>
            </button>
            <button id="up-right-piece" className="wheel-piece">
                <FontAwesomeIcon icon={solid('cubes')} size="5x"/>
            </button>
            <button id="down-left-piece" className="wheel-piece" onClick={() => navigate("nav/projects")}>
                <FontAwesomeIcon icon={solid('sitemap')} size="5x"/>
            </button>
            <button id="down-right-piece" className="wheel-piece">
                <FontAwesomeIcon icon={solid('file-text')} size="5x"/>
            </button>
        </div>
    );
}

export default WheelMenu;