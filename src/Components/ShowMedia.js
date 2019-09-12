import React from "react";

function ShowMedia({mediaURL}){
    return (
        <>
            <img src={mediaURL} alt="NASA photo of the day" width="300px" height="300px" />
        </>
    )
}

export default ShowMedia;