async function getWeather() {
    const city = document.getElementById("city").value;
    if (!city) {
    alert("Please enter a city name.");
    return;
    }
    const response = await fetch(`/api/weather?city=${city}`);
    const data = await response.json();
    if (data.error) {
    document.getElementById("result").innerHTML = `<p>${data.error}</p>`;
    } else {
    document.getElementById("result").innerHTML = `
    <h2>${data.city}</h2>
    <p>Temperature: ${data.temperature}°C</p>
    <p>Weather: ${data.weather}</p>
    `;
    }
    }