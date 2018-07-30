
function getCurrentLocation() {
        navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
    let latLon = position.coords.latitude + "," + position.coords.longitude;
    let imgUrl = "https://maps.googleapis.com/maps/api/staticmap?center="
    +latLon+"&zoom=18&size=400x300&key=AIzaSyAOK1yMMCD-xdJL8BaVpgTO6TwMXNtKX3A";
    document.getElementById("mapholder").innerHTML = "<img src='"+imgUrl+"'>";
}


