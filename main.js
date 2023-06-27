const mykey = config.APIkey;
const APIurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function getWeatherData(city){
    const response = await fetch(APIurl + city + `&appid=${mykey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".feels_like").innerHTML = Math.round(data.main.feels_like) + "°C";
        document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) + "%";
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/h";
        
        if(data.weather[0].main == "Clouds"){
            weathericon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weathericon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weathericon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Haze"){
            weathericon.src = "images/haze.png";
        }
        else if(data.weather[0].main == "Rain"){
            weathericon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Snow"){
            weathericon.src = "images/snow.png";
        }
        else if(data.weather[0].main == "Thunderstorm"){
            weathericon.src = "images/thunderstorm.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
    
}   

searchBtn.addEventListener("click", ()=>{
    getWeatherData(searchBox.value);
})
