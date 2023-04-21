const temp = document.getElementById('temp');
const loc = document.getElementById('loc');

const background = document.getElementById('background');

let temperature = 0;
let tempType = 'F';

async function getWeather(location) {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=dff399d6b771362d56ab860c2e3a3bfe', { mode: 'cors' });
    const weatherData = await response.json();
    // console.log(weatherData);

    const weatherTemp = weatherData.main.temp;
    temperature = weatherTemp;

    if (tempType == 'F') {
        temp.innerHTML = Math.round((temperature - 273.15) * (9 / 5) + 32) + ' &deg;F';
    } else if (tempType == 'C') {
        temp.innerHTML = Math.round(weatherTemp - 273.15) + ' &deg;C';
    }

    let tempColor;

    if (weatherTemp < 240) {
        tempColor = '#1D0D55'
    } else if (weatherTemp >= 240 && weatherTemp < 245) {
        tempColor = '#1B2267'
    } else if (weatherTemp >= 245 && weatherTemp < 250) {
        tempColor = '#183779'
    } else if (weatherTemp >= 250 && weatherTemp < 255) {
        tempColor = '#12619D'
    } else if (weatherTemp >= 255 && weatherTemp < 260) {
        tempColor = '#0C8BC1'
    } else if (weatherTemp >= 260 && weatherTemp < 265) {
        tempColor = '#06B5E5'
    } else if (weatherTemp >= 265 && weatherTemp < 270) {
        tempColor = '#45C8EC'
    } else if (weatherTemp >= 270 && weatherTemp < 275) {
        tempColor = '#83DAF2'
    } else if (weatherTemp >= 275 && weatherTemp < 280) {
        tempColor = '#C1EDF9'
    } else if (weatherTemp >= 280 && weatherTemp < 285) {
        tempColor = '#E0F6FC'
    } else if (weatherTemp >= 285 && weatherTemp < 290) {
        tempColor = '#FFF4D0'
    } else if (weatherTemp >= 290 && weatherTemp < 300) {
        tempColor = '#FFE8A1'
    } else if (weatherTemp >= 300 && weatherTemp < 305) {
        tempColor = '#FFD042'
    } else if (weatherTemp >= 305 && weatherTemp < 310) {
        tempColor = '#F4A13A'
    } else if (weatherTemp >= 310 && weatherTemp < 315) {
        tempColor = '#E87131'
    } else if (weatherTemp >= 315 && weatherTemp < 320) {
        tempColor = '#D45532'
    } else if (weatherTemp >= 320 && weatherTemp < 325) {
        tempColor = '#BF3932'
    } else if (weatherTemp >= 325 && weatherTemp < 330) {
        tempColor = '#AB1D32'
    } else if (weatherTemp >= 330 && weatherTemp < 335) {
        tempColor = '#A10F32'
    } else if (weatherTemp > 340) {
        tempColor = '#960032'
    }

    loc.innerHTML = weatherData.name;

    background.style.background = `linear-gradient(blue 0%, ${tempColor} 100%)`
}

getWeather('bengaluru');

const searchCity = () => {
    const search = document.getElementById('search')
    const newCity = search.value;

    getWeather(newCity);

    search.value = '';
}

const switchTemp = type => {
    tempType = type

    const F = document.getElementById('F');
    const C = document.getElementById('C');

    if (tempType == 'F') {
        temp.innerHTML = Math.round((temperature - 273.15) * (9 / 5) + 32) + ' &deg;F';
        F.classList.remove('disabled')
        C.classList.add('disabled')
    } else if (tempType == 'C') {
        temp.innerHTML = Math.round(temperature - 273.15) + ' &deg;C';
        C.classList.remove('disabled')
        F.classList.add('disabled')
    }
}