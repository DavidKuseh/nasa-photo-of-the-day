import React from "react";
import { deflate } from "zlib";

function ShowMedia({mediaURL}){
    return (
        <div>
            <img src={mediaURL} alt="NASA photo of the day" width="400px" height="400px" />
        </div>
    )
}

export default ShowMedia;