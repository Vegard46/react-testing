import React from 'react';
import DetailHeader from "./DetailHeader";
import DetailPadding from "./DetailPadding";
import DetailTimeline from "./DetailTimeline";
import DetailSkills from "./DetailSkills";

function WebDevDetail () {
    return(
        <div className="detail-page center hidden-container">
            <DetailHeader/>
            {/*<DetailPadding />
            <DetailSkills />
            <DetailPadding />
            <DetailTimeline />*/}
        </div>
    )
}

export default WebDevDetail;