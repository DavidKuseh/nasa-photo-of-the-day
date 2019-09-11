import React, { useState, useEffect }from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [mediaUrl, setMediaUrl] = useState();
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
  }, [])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀! 
      </p>
    </div>
  );
}

export default App;
