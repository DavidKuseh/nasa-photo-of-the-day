import React, { useState, useEffect }from "react";
import "./App.css";
import axios from "axios";
import MediaContainer from "./Components/MediaContainer";
import styled from "styled-components";

//Styling
const BackColor = styled.div`
  background-color:#FFE1A8;
`

function App() {
  const [mediaURL, setMediaUrl] = useState();
  const [description, setDescription] = useState();
  const [title, setTitle] = useState();
  const [mediaType, setMediaType] = useState();
  const [date, setDate] = useState("");

  useEffect(()=> {
   axios.get(`https://api.nasa.gov/planetary/apod?api_key=h6gk8qlDpi9XRYbLiuRoagS4u6yAbIv0CxNm64Td&date=${date}`)
      .then(response => {
        setMediaUrl(response.data.url);
        setDescription(response.data.explanation);
        setTitle(response.data.title);
        setMediaType(response.data.media_type);
        setDate(response.data.date);
      })
      .catch(error => {
        console.log(error);
      })
  }, [mediaURL, date])

  return (
    <>
      <BackColor className="App">
        <div>
          <h3>NASA Photo of the Day</h3>
        </div>
        <MediaContainer
          date={date}
          mediaType={mediaType}
          title={title}
          description={description}
          mediaURL={mediaURL}
          setDate={setDate}
        />
      </BackColor>
    </>
  );
}

export default App;
