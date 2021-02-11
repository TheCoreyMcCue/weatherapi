const locationInput = document.querySelector('#locationInput');
const userRequest = document.querySelector('#userRequest');
const cityName = document.querySelector('#cityName');
const dateTime = document.querySelector('#dateTime');
const currentTemp = document.querySelector('#currentTemp');

userRequest.addEventListener('submit', (event) => {
  event.preventDefault();
  // console.log(locationInput.value);
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${locationInput.value}&appid=faa1c9174e51f96f351ab41d1c7d35a9`)
    .then(response => response.json())
    .then((data) => {
      console.log(data.name);
      cityName.innerHTML = data.name;
      currentTemp.innerHTML = `${Math.round((data.main.temp - 272.15))}˚`;
      const d = new Date();
      const options = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
      };
      const readableDate = d.toLocaleDateString('en-US', options);
      dateTime.innerHTML = readableDate;
    });
});
