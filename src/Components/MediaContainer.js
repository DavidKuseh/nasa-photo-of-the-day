import React from "react";
import ShowMedia from "./ShowMedia";
import Description from "./Description";
import styled from "styled-components";

const FontH4 = styled.h4 `
    font-size: 20px;
    font-family: 'Gayathri', sans-serif;
`
const DescriptionStyle = styled.div`
    font-size: 20px;
    font-family: 'Gayathri', sans-serif;
`

function MediaContainer({ title, description, mediaURL, mediaType, setDate }) {
    return (
        <div className = "container">
            <FontH4>{title}</FontH4>
            <div className="date">
                <label>Date: </label>
                <input type="date" onChange={e=> setDate(e.target.value)}></input>
            </div>
            <ShowMedia mediaType={mediaType} mediaURL={mediaURL} />
            <DescriptionStyle>
            <Description className = "description" description={description} /> 
            </DescriptionStyle>
        </div>  
    )
}

export default MediaContainer;