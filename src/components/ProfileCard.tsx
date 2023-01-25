import React from 'react';
import '../styles/profile-card.css';

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
                <img src={props.image} alt="js" />
            </div>
        </div>
    );
}

export default ProfileCard;