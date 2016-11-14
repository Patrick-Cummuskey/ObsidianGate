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
	'Chantry': xy(382, 550),
	'Latherondian Ruins': xy(407, 560),
	'Estate NE extent': xy(393, 554),
	'Estate SE extent': xy(395, 530),
	'Estate SS extent': xy(380, 530)
};

// http://leafletjs.com/reference.html#circle
L.circle(points['Chantry'], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.2,
	radius: 35,
	weight: 1

}).addTo(map).bindPopup('Zone of Terror');

// http://leafletjs.com/reference.html#polygon
L.polygon([
	xy(370, 563), // northwest road
	xy(378, 561), // north west bend
	xy(386, 554), // north bend
	points['Estate NE extent'],
	points['Estate SE extent'],
	points['Estate SS extent'],
	xy(373, 545), // west bend

], {
	// http://leafletjs.com/reference.html#path-options
	color: 'blue'

}).addTo(map).bindPopup('Lands of [Ben]');

// http://leafletjs.com/reference.html#polygon
L.polygon([
	points['Estate SE extent'],
	points['Estate NE extent'],
	xy(402, 569),
	xy(405, 570),
	xy(413, 570),
	xy(418, 566),
	xy(418, 562),
	xy(427, 551),
	xy(419, 533),
	xy(414, 525),
	xy(411, 521)

], {
	// http://leafletjs.com/reference.html#path-options
	color: 'yellow'

}).addTo(map).bindPopup('Lands of [Douche]');

// http://leafletjs.com/reference.html#marker
L.marker(points['Chantry'], {
	// http://leafletjs.com/reference.html#marker-options
	color: 'purple'

}).addTo(map).bindPopup('Chantry');

// http://leafletjs.com/reference.html#marker
L.marker(points['Latherondian Ruins'], {
	color: 'purple'

}).addTo(map).bindPopup('Latherondian Ruins');

// ======= END DEFINITION SECTION =========

map.fitBounds(bounds);
