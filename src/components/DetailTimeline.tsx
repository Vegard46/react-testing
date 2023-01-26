import React from 'react';
import '../styles/project-page.css';
import TimelineArtefact from "./TimelineArtefact";

function DetailTimeline() {
    return (
        <div className="detail-timeline">
            <TimelineArtefact date={"2020-06"}/>
        </div>
    )
}

export default DetailTimeline;