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
	  		<p className="footer">Note: Parks were selected based on location and a minumium number of visitors per year. Blackcomb, Cypress and Goldstream were excluded because 2018 attendance figures were not available.</p>
	  	</div>
	);
}

export default App;
