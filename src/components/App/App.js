import React from 'react';
import Map from '../Map/Map';
import './App.css';


// get lat/lon/zoom params from the URL
const params = new URLSearchParams(window.location.search);


function App() {
	return (
	  	<div className="App">
	  		<h1>B.C.’s most Instagrammed parks</h1>
	  		<p className="subhead">Circles are sized by the rate of “likes” received on Instagram per 1,000 park visits in 2018.</p>
	  		<Map params={params}></Map>
	  		<p className="footer">Note: Parks were selected based on location and a minumium number of visitors per year. Blackcomb and Cypress parks were excluded because of issues with attendance data for 2018.</p>
	  	</div>
	);
}

export default App;
