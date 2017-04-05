function initMap(){
  var monks_loc = {lat: 40.8054491, lng: -73.9654415}
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 14,
    center: monks_loc
  });
  var marker = new google.maps.Marker({
    position: monks_loc,
    map: map
  });
}
