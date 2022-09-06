let weather = {
    paris: {
      temp: 19.7,
      humidity: 80,
      fah: 66
    },
    tokyo: {
      temp: 17.3,
      humidity: 50,
      fah: 62.6
    },
    lisbon: {
      temp: 30.2,
      humidity: 20,
      fah: 86.36
    },
    sanfrancisco: {
      temp: 20.9,
      humidity: 100,
      fah: 69.62
    },
    oslo: {
      temp: -5,
      humidity: 20,
      fah: 23
    }
  };
  
  // write your code here
  
  let inputCity = prompt("Enter your city");
  inputCity = inputCity.trim();
  
  if (inputCity === "paris") {
    alert(
      `It is currently ${Math.round(weather.paris.temp)}°C (${
        weather.paris.fah
      }°F) in paris with a humidity of ${weather.paris.humidity}%`
    );
  } else if (inputCity === "tokyo") {
    alert(
      `It is currently ${Math.round(weather.tokyo.temp)}°C (${Math.round(
        weather.tokyo.fah
      )}°F) in paris with a humidity of ${weather.tokyo.humidity}%`
    );
  } else if (inputCity === "lisbon") {
    alert(
      `It is currently ${Math.round(weather.lisbon.temp)}°C (${Math.round(
        weather.lisbon.fah
      )}°F) in paris with a humidity of ${weather.lisbon.humidity}%`
    );
  } else if (inputCity === "sanfrancisco") {
    alert(
      `It is currently ${Math.round(weather.sanfrancisco.temp)}°C
           (${Math.round(
         weather.sanfrancisco.fah
       )}°F) in San Francisco with a humidity of ${weather.sanfrancisco.temp}%`
    );
  } else if (inputCity === "oslo") {
    alert(
      `It is currently ${weather.oslo.temp}°C (${Math.round(
        weather.oslo.fah
      )}°F) in oslo with a humidity of ${weather.oslo.humidity}%`
    );
  } else {
    alert(
      `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${inputCity}"`
    );
  }
  
  const today = new Date();
  const day = today.getDay();
  
  const weatherDate = document.querySelector(".weather-date");
  const weatherForm = document.querySelector("#weather-form");
  const weatherInput = document.querySelector("#weather-input");
  const city = document.querySelector(".city");
  const celsius = document.querySelector(".num-deg");
  const fahrenHeit = document.querySelector(".fah");
  const numDegree = document.querySelector(".num");
  
  weatherDate.innerHTML = today;
  
  function searchCity(e) {
    e.preventDefault();
    if (weatherInput) {
      city.innerHTML = weatherInput.value;
    }
  }
  
  weatherForm.addEventListener("click", searchCity);
  
  //challenge 3
  function convertToFah() {
    numDegree.innerHTML = 37.4;
  }
  fahrenHeit.addEventListener("click", convertToFah);
  
  function convertToCel() {
    numDegree.innerHTML = 3;
  }
  celsius.addEventListener("click", convertToCel);
  