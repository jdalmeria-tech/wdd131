document.addEventListener("DOMContentLoaded", () => {
  const temperature = 10; // Static temperature value in °C
  const windSpeed = 8; // Static wind speed value in km/h
  const conditions = "Partly Cloudy"; // Static conditions value

  const temperatureElement = document.querySelector(".weather ul li:nth-child(1)");
  const conditionsElement = document.querySelector(".weather ul li:nth-child(2)");
  const windElement = document.querySelector(".weather ul li:nth-child(3)");
  const windChillElement = document.querySelector(".weather ul li:nth-child(4)");

  function calculateWindChill(temp, speed) {
    return (
      13.12 +
      0.6215 * temp -
      11.37 * Math.pow(speed, 0.16) +
      0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(2);
  }

  function displayWeather() {
    temperatureElement.innerHTML = `<span>Temperature:</span> <span>${temperature} °C</span>`;
    conditionsElement.innerHTML = `<span>Conditions:</span> <span>${conditions}</span>`;
    windElement.innerHTML = `<span>Wind:</span> <span>${windSpeed} km/h</span>`;

    if (temperature <= 10 && windSpeed > 4.8) {
      const windChill = calculateWindChill(temperature, windSpeed);
      windChillElement.innerHTML = `<span>Wind Chill:</span> <span>${windChill} °C</span>`;
    } else {
      windChillElement.innerHTML = "<span>Wind Chill:</span> <span>N/A</span>";
    }
  }

  displayWeather();
});
