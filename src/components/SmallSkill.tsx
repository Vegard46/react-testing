import React from 'react';
import '../styles/small-skill.css';

type SmallSkillProps = {
    name: string,
    image: any,
    id: string
}

function SmallSkill (props: SmallSkillProps) {
    return (
        <div className="small-skill">
            <div className="small-skill-left">
                <div className="small-skill-image">
                    <img src={props.image} alt={props.name} className={"image-" + props.id}/>
                </div>
            </div>
            <div className="small-skill-right">
                <h1>{props.name}</h1>
            </div>
        </div>
    )
}

export default SmallSkill;