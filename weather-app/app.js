const form = document.querySelector(".form");
const display = document.querySelector(".weatherInfo");

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
form.addEventListener("submit", async event => {
    event.preventDefault();
    const city = form.firstElementChild.value;

    if (city) {
        try {
            const data = await getWeatherData(city);
            displayWeather(data);

        }
        catch(error) {
            displayError("Cannot Retrieve Weather Info")
        }

    }
    else {
        displayError("You must provide a city name");
    }


})

function convertToCelcius(temp) {
    return Math.floor(temp - 273);
}




function displayWeather(data) {
    const {name: city, main: {temp, humidity}, weather : [{id, description}]} = data;

    const cityElement = document.createElement('h1');
    const tempElement = document.createElement('p');
    const humidityElement = document.createElement('p');
    const descElement = document.createElement('p');

    cityElement.textContent = city;
    tempElement.textContent = `${convertToCelcius(temp)}°C`;
    humidityElement.textContent = `Humidity: ${humidity}%`;
    descElement.textContent = description;

    cityElement.classList.add("cityDisplay");
    tempElement.classList.add("tempDisplay");
    humidityElement.classList.add("humidityDisplay");
    descElement.classList.add("desc");

    display.textContent = '';
    display.appendChild(cityElement);
    display.appendChild(tempElement);
    display.appendChild(humidityElement);
    display.appendChild(descElement);

}


async function getWeatherData(city) {
    const weaterURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`

    const data = await fetch(weaterURL);

    if (!data.ok) {
        throw new Error("No Data Found for the Provided City");
    }

    return await data.json();
}

function displayError(message) {

    display.textContent = "";
    const errorMsg = document.createElement('p');
    errorMsg.textContent = message;
    errorMsg.classList.toggle("errorMsg");
    display.appendChild(errorMsg);
}

