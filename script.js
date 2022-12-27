const api = {
    key: 'd6669d6c3283f19fb891fe9702edf500',
    baseurl: 'https://api.openweathermap.org/data/2.5/'
}
const searchBox = document.querySelector('header input');
searchBox.addEventListener("keypress", setQuery)

function setQuery(e) {
    if (e.keyCode == 13) {
        getResults(searchBox.value);
        searchBox.value = ''
    }
}
function getResults(query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&appid=${api.key}`)
    .then(weather => weather.json())
    .then(displayResults)
}

function displayResults(weather) {
    let city = document.querySelector('.location .city')
    city.innerHTML = `${weather.name}, ${weather.sys.country}`

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerHTML = `${now.getDay()}/${now.getMonth()}/${now.getFullYear()}`

    let temp = document.querySelector('.temp')
    temp.innerHTML = `${Math.round(weather.main.temp)}°C`
    console.log(weather);

    let weatherEl = document.querySelector(".weather")
    weatherEl.innerHTML = weather.weather[0].main

    let hilow = document.querySelector('.hi-low');
    hilow.innerHTML = `${Math.round(weather.main.temp_min)}°C/${Math.round(weather.main.temp_max)}°C`
}