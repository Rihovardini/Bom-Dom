window.onload=function() {
        navigator.geolocation.getCurrentPosition(showPosition);
}

    function showPosition(position) {
        let latLon = position.coords.latitude + "," + position.coords.longitude;
        let imgUrl = "https://maps.googleapis.com/maps/api/staticmap?center="
        +latLon+"&zoom=18&size=400x300&key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU";
        let img=document.createElement('img');
        img.setAttribute('src',imgUrl);
        document.getElementById("mapholder").appendChild(img);
    }



