// Initialize and add the map
let map;

async function initMap() {
  const position = { lat: 41.83300336533221, lng: -87.62450057900963 };
	const centerPoint = { lat: 41.83384002739911, lng: -87.62426491188228};
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 18,
    center: centerPoint,
    disableDefaultUI: true,
		gestureHandling: "none",
    zoomControl: false,
    mapId: "map",
  });
  const description =
    "<div>" +
    "<h1>Alpha Sigma Phi</h1>" +
    "<div>" +
    "<p><b>Alpha Sigma Phi</b>, known as <b>A Sigs</b> on campus, is a national " +
    "fraternity with five cores values. Silence, Honor, Charity, Purity, and Patriotism." +
    " We have chapters of the fraternity all over the United States and have been around since 1845." +
		" Proud winners of IIT Greek Week for two consecutive years.</p>" +
    '<p>Visit the link to learn more about <a href="https://alphasig.org/">' +
    "Alpha Sigma Phi </a> "
    "</div>" +
    "</div>";

  const infowindow = new google.maps.InfoWindow({
    content: description,
    ariaLabel: "Alpha Sigma Phi Fraternity House",
  });
	const pin = new PinElement({
		scale: 1.25,
    glyphColor: "black",
  });
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Alpha Sigma Phi",
		content: pin.element,
  });
	// Define a symbol using SVG path notation, with an opacity of 1.
  var lineSymbol = {
    path: 'M 0,-1 0,1',
    strokeOpacity: 1,
    scale: 4
  };
	const topLeft = {lat: 41.83469136832822, lng: -87.62504275246695};
  const topRight = {lat: 41.83471534959869, lng: -87.62340124063776};
	const bottomLeft = {lat: 41.83288475344129, lng: -87.6250856678092};
	const bottomRight = {lat: 41.83292872033792, lng: -87.62333686762516};
  var topLine = new google.maps.Polyline({
    path: [topLeft, topRight],
    strokeOpacity: 0,
    icons: [{
      icon: lineSymbol,
      offset: '0',
      repeat: '20px'
    }],
    map: map
  });
	var leftLine = new google.maps.Polyline({
    path: [topLeft, bottomLeft],
    strokeOpacity: 0,
    icons: [{
      icon: lineSymbol,
      offset: '0',
      repeat: '20px'
    }],
    map: map
  });
	var bottomLine = new google.maps.Polyline({
    path: [bottomLeft, bottomRight],
    strokeOpacity: 0,
    icons: [{
      icon: lineSymbol,
      offset: '0',
      repeat: '20px'
    }],
    map: map
  });
	var rightLine = new google.maps.Polyline({
    path: [topRight, bottomRight],
    strokeOpacity: 0,
    icons: [{
      icon: lineSymbol,
      offset: '0',
      repeat: '20px'
    }],
    map: map
  });
	marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
}

initMap();
