import React from 'react';
import '../styles/card-menu.css';
import ProfileCard from "./ProfileCard";
import local_images_tr from "../local_images";

function CardMenu(){
    return (
        <div className={'card-menu center'}>
            <ProfileCard title={"Javascript"} image={local_images_tr.javascript_logo1}/>
            <ProfileCard title={"Java"} image={local_images_tr.java_logo1}/>
            <ProfileCard title={"Python"} image={local_images_tr.python_logo1}/>
            <ProfileCard title={"Kotlin"} image={local_images_tr.kotlin_logo1}/>
            <ProfileCard title={"HTML 5"} image={local_images_tr.html_logo1}/>
            <ProfileCard title={"C#"} image={local_images_tr.csharp_logo1}/>
        </div>
    );
}


export default CardMenu;