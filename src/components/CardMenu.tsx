import React from 'react';
import '../styles/card-menu.css';
import ProfileCard from "./ProfileCard";

function CardMenu(){
    return (
        <div className={'card-menu'}>
            <ProfileCard/>
        </div>
    );
}


export default CardMenu;