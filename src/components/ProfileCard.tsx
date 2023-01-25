import React from 'react';
import '../styles/profile-card.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

type ProfileCardProps = {
    image: any,
    title: string
}

function ProfileCard(props: ProfileCardProps){
    return (
        <div className={'profile-card hoverable'} onClick={() => console.log("Clicked!")}>
            <div className="profile-card-left">
                <h1>{props.title}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur nec enim.</p>
            </div>
            <div className="profile-card-right">
                <div className="profile-card-image">
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