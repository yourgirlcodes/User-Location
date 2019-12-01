import React, {useEffect, useState} from 'react';
import './App.css';
import Map from '../map';
import axios from 'axios';

function App() {

  const [location, setLocation] = useState([]);

  useEffect(() => {
    console.log('use effect')
    axios
    .get("https://api.ipdata.co?api-key=866f14bacc59aac91d16699a0e1da7edd60f3f4939767f01faa5f4cc")
    .then(res => setLocation(res.data))
  }, [])


  return (
	<div className="App">
		<h1>
			You are here: &nbsp;
			{location.city}, &nbsp;
			{location.country_name} &nbsp;
			{location.emoji_flag}
		</h1>
		<Map 
			city={location.city}
			country={location.country_name}
		/>
	</div>
  );
}

export default App;
