
/* Stephen from tutor assistance advised me to move my varibles outside of the function to prevent timed interference */
const mylatLng1 = { lat: 53.4742028, lng: -2.2447486 };
const mylatLng2 = { lat: 53.809866, lng: -1.5729377};
const mylatLng3 = { lat: 51.5235754, lng: -0.0806693};

function initMap() {
  
    // Renders the map location for Gorilla, Manchester
  var map = new google.maps.Map(document.getElementById("maps-api-1"), {
    zoom: 15,
    center: mylatLng1,
  });
  // Creates marker which will display location of venue 
  new google.maps.Marker({
    position: mylatLng1,
    map,
    title: "A",
  });
  
  // Renders the map location for Brudenell Community Rooms, Leeds
  var map = new google.maps.Map(document.getElementById("maps-api-2"), {
    zoom: 15,
    center: mylatLng2,
  });
  new google.maps.Marker({
    position: mylatLng2,
    map,
    title: "A",
  });
  
  // Renders the map location for Village Underground, London
  var map = new google.maps.Map(document.getElementById("maps-api-3"), {
    zoom: 15,
    center: mylatLng3,
  });
  new google.maps.Marker({
    position: mylatLng3,
    map,
    title: "A",
  });
  
  // Renders the map location for Village Underground, London
  var map = new google.maps.Map(document.getElementById("maps-api-4"), {
    zoom: 15,
    center: mylatLng3,
  });
  new google.maps.Marker({
    position: mylatLng3,
    map,
    title: "A",
  });
}

/* Sources used to create this code 
https://developers.google.com/maps/documentation/javascript/adding-a-google-map
https://developers.google.com/maps/documentation/javascript/markers
https://github.com/mkthewlis/Milestone-Project-2
*/