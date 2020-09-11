const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 18) {
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}
function getResults(query){
    fetch('http://api.openweathermap.org/data/2.5/weather?q=London&appid={7e5c11ce235632d1904f971e6e2899c0}')
  .then(response => response.json())
  .then(data => console.log(data));
}

function displayResults (weather)  {
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = ' ${weather.name}, ${weather.sys.country}' ;
    let now =new Date();
    let date= document.querySelector(' .location .date');
    date.innerText =dateBuilder(now);
    let temp = document.querySelector(' .current .temp');
    temp.innerHTML =  '${Math.round(weather.main.temp)<span>°c</span>';
    
    let weather_el = document.querySelector(' .current .weather');
    weather_el.innerText = weather.weather[0].main;

    let hihigh =document.querySelector('.hi-high');
    hihigh.innerHTML = '${Math.round(weather.main.temp_min)}°c/ ${Math.round(weather.main.temp_max)}°c';
}
function dateBuilder (d) {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let days =["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
       
       let day = days[d.getDay()];
        let date = d.getDate();
        let month =months[d.getMonths()];
        let year = d.getFullYear();
        return '${day}  ${date}  ${month} ${year}';
}
