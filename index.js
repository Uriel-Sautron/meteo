const urlWeather = `https://api.weatherbit.io/v2.0/forecast/daily?city=Perpignan&key=7bc152c09b624226978633b7943659b1&days=5&lang=fr`;
const weatherShow = document.getElementById("weather");
const cityShow = document.getElementById("city");

const showWeather = (selector, dateTime, icon, maxTemp, minTemp) => {
    selector.innerHTML += `
        <div class="grid-item">
            <h3>${dateTime}</h3>
            <img class="img" src="https://www.weatherbit.io/static/img/icons/${icon}.png">
            <p>Max: ${maxTemp} °C</p>
            <p>Min: ${minTemp} °C</p>
        </div>
    `
}

fetch(urlWeather)
    .then(response => response.json())
    .then(post => {
        const daysWeather = post.data;
        cityShow.innerHTML = `${post.city_name}`
        daysWeather.forEach(day => {
            const icon = day.weather.icon;
            const dateTime = day.datetime;
            const maxTemp = day.app_max_temp;
            const minTemp = day.app_min_temp;

            showWeather(weatherShow, dateTime, icon, maxTemp, minTemp)

        });
    })