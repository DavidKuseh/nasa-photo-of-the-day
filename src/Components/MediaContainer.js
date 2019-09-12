import React from "react";
import ShowMedia from "./ShowMedia";
import Description from "./Description";

function MediaContainer({ title, description, mediaURL, mediaType }) {
    return (
        <div className = "container">
            <h4>{title}</h4>
            <ShowMedia mediaType={mediaType} mediaURL={mediaURL} />
            <Description className = "description" description={description} />
        </div> 
        
    )
}

export default MediaContainer;