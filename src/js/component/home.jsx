import React, {useState, useEffect, useRef} from "react";

//create your first component
const Home = () => {
	const audioElement = useRef(null);
	const [song, setSongs] =useState([]);
	
  function getSongs() {

    fetch("https://assets.breatheco.de/apis/sound/songs")
    .then(response => response.json())
    .then(data => {
    (setSongs(data)) 
      console.log(data);
    })
  
  }

  useEffect(() =>{
    getSongs() 
  
  }, [])

  const playSong = (url) => {
    audioElement.current.src = "https://assets.breatheco.de/apis/sound/" + url
    console.log(audioElement.current.src);
    console.log(url);
  
    
  };

	return (
		<>
		<h1>Spotify</h1>
		<h2>Canciones:</h2>
{/* dibujamos la lista de canciones */}
		<ul>
			{song.map((oneSong, index)=><li onClick={ ()=>  playSong(oneSong.url)} key={oneSong.name}>{oneSong.name}</li>)}
		</ul>
		<div>

		<audio controls src="https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3" ref={audioElement}>
  <source type="audio/ogg"/>
  {/* <source src="horse.mp3" type="audio/mpeg"> */}
  Your browser does not support the audio element.
</audio>


		</div>
		</>
    )
};


export default Home;
