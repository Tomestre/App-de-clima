const APIKey = "eYgcZLV8CEWJFzEeQMG9C5aHqBa4SJxh";

const getCityUrl = (cityName) =>
  `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`;

const cityWheather = (cityKey) =>
  `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${APIKey}&language=pt-br`;

const requestAPI = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Não foi possivel obter os dados");
    }

    return response.json();
  } catch ({ name, message }) {
    alert(`${name}: ${message}`);
  }
};

const getCityData = (cityName) => requestAPI(getCityUrl(cityName));

const getCityWeather = (cityKey) => requestAPI(cityWheather(cityKey));
