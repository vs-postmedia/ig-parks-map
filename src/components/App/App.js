import React from 'react';
import Map from '../Map/Map';
import './App.css';


// get lat/lon/zoom params from the URL
const params = new URLSearchParams(window.location.search);


function App() {
	return (
	  	<div className="App">
	  		<h1>React Leaflet GL template</h1>
	  		<Map params={params}></Map>
	  	</div>
	);
}

export default App;
