
// Fonction appelée lors du click du bouton
function start() {
  //Get element of input box
  var city = document.getElementById('city-input').value;
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(city);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.list[0].weather[0].main;
      const description = data.list[0].weather[0].description;
      const temp = data.list[0].temp.day;
      const icon = apiWeather.getHTMLElementFromIcon(data.list[0].weather[0].icon);
      //Day One
      const mainOne = data.list[1].weather[0].main;
      const descriptionOne = data.list[1].weather[0].description;
      const tempOne = data.list[1].temp.day;
      const iconOne = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);
      //Day Two
      const mainTwo = data.list[2].weather[0].main;
      const descriptionTwo = data.list[2].weather[0].description;
      const tempTwo = data.list[2].temp.day;
      const iconTwo = apiWeather.getHTMLElementFromIcon(data.list[2].weather[0].icon); 
       //Day Three
      const mainThree = data.list[3].weather[0].main;
      const descriptionThree = data.list[3].weather[0].description;
      const tempThree = data.list[3].temp.day;
      const iconThree = apiWeather.getHTMLElementFromIcon(data.list[3].weather[0].icon);
      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      // Modifier le DOM One
      document.getElementById('dayone-forecast-main').innerHTML = mainOne;
      document.getElementById('dayone-forecast-more-info').innerHTML = descriptionOne;
      document.getElementById('icon-weather-containerone').innerHTML = iconOne;
      document.getElementById('dayone-forecast-temp').innerHTML = `${tempOne}°C`;
      // Modifier le DOM One
      document.getElementById('daytwo-forecast-main').innerHTML = mainTwo;
      document.getElementById('daytwo-forecast-more-info').innerHTML = descriptionTwo;
      document.getElementById('icon-weather-containertwo').innerHTML = iconTwo;
      document.getElementById('daytwo-forecast-temp').innerHTML = `${tempTwo}°C`;
      // Modifier le DOM One
      document.getElementById('daythree-forecast-main').innerHTML = mainThree;
      document.getElementById('daythree-forecast-more-info').innerHTML = descriptionThree;
      document.getElementById('icon-weather-containerthree').innerHTML = iconThree;
      document.getElementById('daythree-forecast-temp').innerHTML = `${tempThree}°C`;
    })

    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}