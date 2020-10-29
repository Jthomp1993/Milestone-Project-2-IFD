    
    function initMap() {
        var map1 = new google.maps.Map(document.getElementById("maps-api-1"), {
            zoom: 15,
            center: {
                lat: 53.4742028,
                lng: -2.2447486
            }
        });

        var map2 = new google.maps.Map(document.getElementById("maps-api-2"), {
            zoom: 15,
            center: {
                lat: 53.809866,
                lng: -1.5729377
            }
        });

        var map3 = new google.maps.Map(document.getElementById("maps-api-3"), {
            zoom: 15,
            center: {
                lat: 51.5235754,
                lng: -0.0806693
            }
        });

        var map4 = new google.maps.Map(document.getElementById("maps-api-4"), {
            zoom: 15,
            center: {
                lat: 51.5235754,
                lng: -0.0806693
            }
        });

    }


