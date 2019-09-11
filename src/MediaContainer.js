import React from "react";
import ShowMedia from "./ShowMedia";
import Description from "./Description";

function MediaContainer({ title, description, mediaURL, mediaType }) {
    return (
        <div className = "container">
            <ShowMedia mediaType={mediaType} mediaURL={mediaURL} />
            <Description className = "description" title={title} description={description} />
        </div> 
    )
}

export default MediaContainer;