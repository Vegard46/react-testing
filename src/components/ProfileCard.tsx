import React from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/profile-card.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

type ProfileCardProps = {
    id: string,
    image: any,
    title: string
}

function ProfileCard(props: ProfileCardProps){

    const navigate = useNavigate();

    return (
        <div className={'profile-card hoverable'} onClick={() => navigate(props.id)}>
            <div className="profile-card-left">
                <h1>{props.title}</h1>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="profile-card-right">
                <div className={"profile-card-image image-" + props.id}>
                    <img src={props.image} alt="js" />
                </div>
                <div className="profile-card-arrow">
                    <FontAwesomeIcon icon={solid('arrow-right-long')} size="5x" className="item-gradient" />
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;