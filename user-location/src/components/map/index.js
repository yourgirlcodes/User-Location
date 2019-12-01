import React from 'react';
import { GoogleMap } from './styled';

function Map({city, country}) {

	return(
		<div>
		<GoogleMap
			frameBorder="0"
			allowFullScreen
			src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCdQymwSuF0P6Ee-ffX0ZtWjpJdpaT5eLk&q=${city},${country}`}
			>
		</GoogleMap>
	</div>
	)
}
export default Map