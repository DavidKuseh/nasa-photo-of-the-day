import React from "react";
import styled from "styled-components";

const ImageStyle = styled.div`
 img{
    width: 400px;
    height: 400px;
}
`
function ShowMedia({mediaURL}){
    return (
        <ImageStyle className="img">
            <img src={mediaURL} alt="NASA photo of the day" />
        </ImageStyle>
    )
}

export default ShowMedia;