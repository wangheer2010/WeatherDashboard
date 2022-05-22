var submitbutton = document.querySelector('.submitbutton');
var inputValue = document.querySelector('.inputValue');
var city = document.querySelector('.city');
var temp = document.querySelector('.temp');
var humi = document.querySelector('.humi');
var wind = document.querySelector('.wind');
var uvIndex = document.querySelector('#uvIndex');
var weatherIcon = document.querySelector('.weatherIcon');
// Create a function to reuse

submitbutton.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=6e61be1535f6225a901edf5250e2ae2f')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var cityValue = data['name'];
        var tempValue = data['main']['temp'];
        var windValue = data['wind']['speed'];
        var humiValue = data['main']['humidity'];
        var uvIndexValue = data['weather'][0]['description'];

        var dateValue = Date(data['dt']);
        // Displays Icon
        var icon = data.weather[0].icon;
        var imageValue = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        console.log(imageValue);
        // var date = dateValue.getDate();
        // var month = dateValue.getMonth(); //Be careful! January is 0 not 1
        // var year = dateValue.getFullYear();

        // var dateString = date + "-" +(month + 1) + "-" + year;

        city.innerHTML = cityValue + dateValue;
        temp.innerHTML = tempValue+"\u00B0"+"F";
        wind.innerHTML = windValue + ' MPH';
        humi.innerHTML = humiValue +'%';
        uvIndex.innerHTML = uvIndexValue;
        weatherIcon.innerHTML = '<img src='+imageValue+'></img>';
        // let lonValue = data['coord']['lon'];
        // let latValue = data['coord']['lat'];

    })
.catch(err => alert("Wrong city name!"))
});

// Add event for city buttons
// define a function
// var getCity = function(event) {
    
//     fetch('https://api.openweathermap.org/data/2.5/weather?q='+event.target.value+'&appid=6e61be1535f6225a901edf5250e2ae2f')
//     .then(response => response.json())
//     .then(data => {
//         var cityValue = data['name'];
//         var tempValue = data['main']['temp'];
//         var descValue = data['weather'][0]['description'];
//         city.innerHTML = cityValue;
//         temp.innerHTML = tempValue;
//         desc.innerHTML = descValue;

//     })
// .catch(err => alert("Wrong city name!"))
// }

// var bigcitybuttons = document.getElementsByClassName('button');
// for (let i=0; i<bigcitybuttons.length; i++) {
//     var bigcitybutton = bigcitybuttons[i];
    
//     bigcitybutton.addEventListener('click', getCity);
    
// }

// {   "coord": {"lon":-87.65,"lat":41.85},
//     "weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],
//     "base":"stations",
//     "main":{"temp":286.99,"feels_like":286.54,"temp_min":285.39,"temp_max":288.31,"pressure":1019,"humidity":81},
//     "visibility":10000,
//     "wind":{"speed":2.58,"deg":14,"gust":3.79},
//     "clouds":{"all":100},
//     "dt":1653183890,
//     "sys":{"type":2,"id":2005153,"country":"US","sunrise":1653128713,"sunset":1653181768},
//     "timezone":-18000,
//     "id":4887398,
//     "name":"Chicago",
//     "cod":200
// }

