export default function renderMap(lng, lat){ 
    mapboxgl.accessToken = 'pk.eyJ1IjoicmljaDgxNSIsImEiOiJja2lyNmcxbW0wZWV2MzBvYjNvbnNpMzM1In0.Mn1ckk4LKKx4dqD8P13HbQ';
    var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [lng, lat], // starting position [lng, lat]
    zoom: 12 // starting zoom
    });
}