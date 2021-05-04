
const weather = document.querySelector('.js-weather');
const COORDS = "coords";
const API_KEY = "95bec00444a0aa9a241d1fe54629ac81";


function getWeather(lat, lon) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        ).then(function(response){
           return response.json(body);
        }).then(function(json) {
            console.log(json);
            const temp = json.main.temp;
            const place = json.name;
            weather.innerHTML = `${temp} @${place}`;

        })
}

function saveCoords(coordobj) {
    localStorage.setItem(COORDS, JSON.stringify(coordobj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordobj = {
        latitude:latitude,
        longitude:longitude
    }
    saveCoords(coordobj);
    getWeather(latitude, longitude);

}

function handleGeoError(){
    console.log("Can't access geo location");
}

function askForCoord(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}

function loadedCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null){
        askForCoord();
    } else {
        //get weather
        const parseCoords = JSON.parse(loadedCords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}


function init() {
    loadedCoords();
}


init();