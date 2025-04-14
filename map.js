// Initialize and add the map
let map;

async function initMap() {
  const position = { lat: 41.83300336533221, lng: -87.62450057900963 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapId: "map",
  });
const contentString =
    "<div>" +
    "<h1>Alpha Sigma Phi</h1>" +
    "<div>" +
    "<p><b>Alpha Sigma Phi</b>, known as <b>A Sigs</b> on campus, is a national " +
    "fraternity with five cores values. Silence, Honor, Charity, Purity, and Patriotism." +
    " We have chapters of the fraternity all over the United States and have been around since 1845.</p>" +
    '<p>Visit the link to learn more about <a href="https://alphasig.org/">' +
    "Alpha Sigma Phi </a> "
    "</div>" +
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Alpha Sigma Phi Fraternity House",
  });
	
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Alpha Sigma Phi",
  });
	marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
}

initMap();
