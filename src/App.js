import React, { useState, useEffect }from "react";
import "./App.css";
import axios from "axios";
import MediaContainer from "./MediaContainer";

function App() {
  const [mediaURL, setMediaUrl] = useState();
  const [description, setDescription] = useState();
  const [title, setTitle] = useState();
  const [mediaType, setMediaType] = useState();
  const [date, setDate] = useState("");

  useEffect(()=> {
   axios.get("https://api.nasa.gov/planetary/apod?api_key=h6gk8qlDpi9XRYbLiuRoagS4u6yAbIv0CxNm64Td")
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
      <div className="App">
        <div>
          <h3>NASA Photo of the Day</h3>
        </div>
        {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀! 
        </p> */}

        <MediaContainer
          date={date}
          mediaType={mediaType}
          title={title}
          description={description}
          mediaURL={mediaURL}
        />
      </div>
    </>
  );
}

export default App;
