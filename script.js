const apiKey = 'YOUR_API_KEY';
const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const weatherInfo = document.getElementById('weather-info');

searchBtn.addEventListener('click', () => {
  const cityName = cityInput.value.trim();
  if (cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => {
        displayWeatherInfo(data);
      })
      .catch(error => {
        console.error(error);
        alert('Error fetching weather data. Please try again.');
      });
  }
});

function displayWeatherInfo(data) {
  const { name, main, weather, wind } = data;
  const cityNameElement = document.getElementById('city-name');
  const temperatureElement = document.getElementById('temperature');
  const descriptionElement = document.getElementById('description');
  const humidityElement = document.getElementById('humidity');
  const windElement = document.getElementById('wind');

  cityNameElement.textContent = name;
  temperatureElement.textContent = `${main.temp}°C`;
  descriptionElement.textContent = weather[0].description;
  humidityElement.textContent = `Humidity: ${main.humidity}%`;
  windElement.textContent = `Wind: ${wind.speed} m/s`;

  weatherInfo.style.display = 'block';
}