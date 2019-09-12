import React from "react";
import ShowMedia from "./ShowMedia";
import Description from "./Description";

function MediaContainer({ title, description, mediaURL, mediaType, setDate }) {
    return (
        <div className = "container">
            <h4>{title}</h4>
            <div className="date">
                <label>Date: </label>
                <input type="date" onChange={e=> setDate(e.target.value)}></input>
            </div>
            <ShowMedia mediaType={mediaType} mediaURL={mediaURL} />
            <Description className = "description" description={description} />   
        </div>  
    )
}

export default MediaContainer;