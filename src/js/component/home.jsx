import React, {useState, useEffect, useRef} from "react";

//create your first component
const Home = () => {
	
	const [song, setSongs] =useState([]);
  let [psong, setPsong] = useState(0);
  let audioElement = useRef(0);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function pastSong() {

    setPsong(psong --)
    audioElement.current.src=`https://assets.breatheco.de/apis/sound/${song[psong].url}` 
		audioElement.current.play()
  }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function nexttSong() {

  setPsong(psong ++)
  audioElement.current.src=`https://assets.breatheco.de/apis/sound/${song[psong].url}` 
  audioElement.current.play()
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const playSong = (url, index) => {
    audioElement.current.src = "https://assets.breatheco.de/apis/sound/" + url
    console.log(audioElement.current.src);
    console.log(url);
    console.log(index);
    setPsong(index)
  };
  console.log(psong);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	return (
		<>
		<h1>Spotify</h1>
		<h2>Canciones:</h2>
{/* dibujamos la lista de canciones */}
		<ul>
			{song.map((oneSong, index)=><li onClick={ ()=>  playSong(oneSong.url, index)} key={oneSong.name}>{oneSong.name}</li>)}
		</ul>
		<div>
      <button onClick={pastSong} className="btn btn-outline-dark">Atras</button>
		  <audio controls  ref={audioElement}>
      <source type="audio/ogg"/>
      </audio>
      <button onClick={nexttSong} className="btn btn-outline-dark">Adelante</button>
		</div>
		</>
    )
};


export default Home;
