// an globe with HERE vector tiles

const canvas = document.getElementById("map");
const map = new harp.MapView({
  canvas,
  theme: "https://unpkg.com/@here/harp-map-theme@latest/resources/berlin_tilezen_night_reduced.json",
  maxVisibleDataSourceTiles: 40,
  tileCacheSize: 100,
  projection: harp.sphereProjection
});

map.setCameraGeolocationAndZoom(new harp.GeoCoordinates(38.736946, -9.142685), 16);

const mapControls = new harp.MapControls(map);
const ui = new harp.MapControlsUI(mapControls);
canvas.parentElement.appendChild(ui.domElement);

window.onresize = () => map.resize(window.innerWidth, window.innerHeight);



// add some vector tiles

const omvDataSource = new harp.OmvDataSource({
  baseUrl: "https://xyz.api.here.com/tiles/herebase.02",
  apiFormat: harp.APIFormat.XYZOMV,
  styleSetName: "tilezen",
  authenticationCode: "AFtI2oC2WEe2pZN2MOmD0j4"
});
map.addDataSource(omvDataSource);



// add some roads

/* This is the same as above */
const globalRailroads = new harp.OmvDataSource({
  baseUrl: "https://xyz.api.here.com/hub/spaces/hUJ4ZHJR/tile/web",
  apiFormat: harp.APIFormat.XYZSpace,
  authenticationCode: "AAX7b-ZLTxOfEin2AWCbHQA" //Use this token!
});

map.addDataSource(globalRailroads).then(() => {
  const styles = [
    {
      when: "$geometryType ^= 'line'",
      renderOrder: 1000,
      technique: "solid-line",
      attr: {
        color: "#FAA8FF",
        transparent: true,
        opacity: 1,
        metricUnit: "Pixel",
        lineWidth: 1
      }
    }
  ];
  globalRailroads.setStyleSet(styles);
  map.update();
});
