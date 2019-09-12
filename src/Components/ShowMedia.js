import React from "react";
import styled from "styled-components";

const ImageStyle = styled.div`
    
`

function ShowMedia({mediaURL}){
    return (
        <div className="img">
            <img src={mediaURL} alt="NASA photo of the day" />
        </div>
    )
}

export default ShowMedia;