// an empty flat map

const map = new harp.MapView({
   canvas: document.getElementById("map"),
   theme: "https://unpkg.com/@here/harp-map-theme@latest/resources/berlin_tilezen_night_reduced.json",
});
const controls = new harp.MapControls(map);
const omvDataSource = new harp.OmvDataSource({
   baseUrl: "https://xyz.api.here.com/tiles/herebase.02",
   apiFormat: harp.APIFormat.XYZOMV,
   styleSetName: "tilezen",
   authenticationCode: "AFtI2oC2WEe2pZN2MOmD0j4",
});
map.addDataSource(omvDataSource);
