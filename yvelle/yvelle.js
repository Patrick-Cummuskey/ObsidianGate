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

const name_chantry = 'Emberhill';
const name_latherondian_ruins = 'Zahradan';

// Define named/reused points here, then reference them later
const points = {
	[name_chantry]: xy(382, 550),
	[name_latherondian_ruins]: xy(407, 560),
	'Estate NE extent': xy(393, 554),
	'Estate SE extent': xy(395, 530),
	'Estate SS extent': xy(380, 530)
};

// http://leafletjs.com/reference.html#circle
L.circle(points[name_chantry], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.2,
	radius: 35,
	weight: 1

}).addTo(map).bindPopup('Zone of Terror');

L.circle(points[name_latherondian_ruins], {
	color: 'purple',
	fillColor: '#f03',
	fillOpacity: 0.2,
	radius: 6,
	weight: 1
}).addTo(map).bindPopup(name_latherondian_ruins);

// http://leafletjs.com/reference.html#marker
L.marker(points[name_chantry], {
	// http://leafletjs.com/reference.html#marker-options
	color: 'purple'

}).addTo(map).bindPopup(name_chantry);

L.marker(points[name_latherondian_ruins], {
	color: 'purple'

}).addTo(map).bindPopup(name_latherondian_ruins);

// ======= END DEFINITION SECTION =========

map.fitBounds(bounds);
