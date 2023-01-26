import React from 'react';
import local_images_tr from "../local_images";
import '../styles/detail-header.css';
import SmallSkill from "./SmallSkill";

function DetailHeader () {
    return (
        <div className="detail-header">
            <div className="header-left header-section">
                <h1 className="header-title">Web development</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida faucibus vehicula.
                    Integer aliquam nisl eu metus luctus vulputate.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida faucibus vehicula.
                    Integer aliquam nisl eu metus luctus vulputate. </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida faucibus vehicula.
                    Integer aliquam nisl eu metus luctus vulputate. </p>
            </div>
            <div className="header-right header-section">
                <h1 className="header-title">Skills</h1>
                <div className="skill-items">
                    <SmallSkill name={"JavaScript"} image={local_images_tr.javascript_logo1} id={"js"}/>
                    <SmallSkill name={"Java"} image={local_images_tr.java_logo1} id={"java"}/>
                    <SmallSkill name={"Python"} image={local_images_tr.python_logo1} id={"py"}/>
                    <SmallSkill name={"Kotlin"} image={local_images_tr.kotlin_logo1} id={"kt"}/>
                    <SmallSkill name={"HTML5"} image={local_images_tr.html_logo1} id={"html"}/>
                    <SmallSkill name={"C#"} image={local_images_tr.csharp_logo1} id={"cs"}/>
                </div>
            </div>
        </div>
    )
}

export default DetailHeader;