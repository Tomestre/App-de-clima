const formInput = document.querySelector('[data-js="change-location"]');
const formCity = document.querySelector('[data-js="city-name"]');
const formWheather = document.querySelector('[data-js="city-wheater"]');
const formTemperature = document.querySelector('[data-js="city-temperature"]');
const formCard = document.querySelector('[data-js="city-card"]');
const formImg = document.querySelector('[data-js="time"]');
const formIcon = document.querySelector('[data-js="time-icon"]');

formInput.addEventListener("submit", async (event) => {
  event.preventDefault();

  const inputValue = event.target.city.value;
  const [{ Key, LocalizedName }] = await getCityData(inputValue);
  const [{ Temperature, WeatherText, IsDayTime, WeatherIcon }] =
    await getCityWeather(Key);
  const typeIcon = `<img src="./src/icons/${WeatherIcon}.svg" />`;

  formCity.textContent = LocalizedName;
  formWheather.textContent = WeatherText;
  formTemperature.textContent = Temperature.Metric.Value;
  formIcon.innerHTML = typeIcon;
  formInput.reset;

  if (formCard.classList.contains("d-none")) {
    formCard.classList.remove("d-none");
  }

  if (IsDayTime) {
    formImg.src = "./src/day.svg";
  } else {
    formImg.src = "./src/night.svg";
  }
});
