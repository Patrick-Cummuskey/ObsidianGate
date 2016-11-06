/* globals L */

const map = L.map('map', {
	crs: L.CRS.Simple
});

const bounds = [ [ 0, 0 ], [ 1000, 1000 ] ];
L.imageOverlay('./yvelle.jpg', bounds).addTo(map);

function xy(x, y) {
	return L.Util.isArray(x)
			? L.latLng(x[1], x[0]) // When doing xy([x, y]);
			: L.latLng(y, x);      // When doing xy(x, y);
}

// http://leafletjs.com/reference.html
// ====== BEGIN DEFINITION SECTION ========

// Define named/reused points here, then reference them later
const points = {
	'Chantry': xy(382, 550)
};

// http://leafletjs.com/reference.html#marker
L.marker(points['Chantry'], {
	// http://leafletjs.com/reference.html#marker-options
	color: 'purple'

}).addTo(map).bindPopup('Chantry');

// http://leafletjs.com/reference.html#polyline
L.polyline([
		xy(5, 20),
		points['Chantry']

], {
	// http://leafletjs.com/reference.html#path-options
	color: 'black'

}).addTo(map).bindPopup('Ugh');

// http://leafletjs.com/reference.html#polygon
L.polygon([
		xy(150, 150),
		xy(155, 150),
		xy(150, 100)

], {
	// http://leafletjs.com/reference.html#path-options
	color: 'blue'

}).addTo(map).bindPopup('Bah');

// http://leafletjs.com/reference.html#circle
L.circle(points['Chantry'], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 35,
	weight: 1

}).addTo(map).bindPopup('Zone of Terror');

// ======= END DEFINITION SECTION =========

map.fitBounds(bounds);
