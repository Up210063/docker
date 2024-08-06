export const fetchWeatherData = (lat, lon) => {
  const apiKey = "522c5a9475197c7ff05652a755b3b640";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=522c5a9475197c7ff05652a755b3b640&units=metric`;
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      throw error;
    });
};
