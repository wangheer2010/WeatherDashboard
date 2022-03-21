var submitbutton = document.querySelector('.submitbutton');
var inputValue = document.querySelector('.inputValue');
var city = document.querySelector('.city');
var temp = document.querySelector('.temp');
var humi = document.querySelector('.humi');
var wind = document.querySelector('.wind');
var uvIndex = document.querySelector('#uvIndex');
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

        // var date = dateValue.getDate();
        // var month = dateValue.getMonth(); //Be careful! January is 0 not 1
        // var year = dateValue.getFullYear();

        // var dateString = date + "-" +(month + 1) + "-" + year;

        city.innerHTML = cityValue + dateValue;
        temp.innerHTML = tempValue+"\u00B0"+"F";
        wind.innerHTML = windValue + ' MPH';
        humi.innerHTML = humiValue +'%';
        uvIndex.innerHTML = uvIndexValue;
        let lonValue = data['coord']['lon'];
        let latValue = data['coord']['lat'];

    })
.catch(err => alert("Wrong city name!"))
});

// Add event for city buttons
// define a function
var getCity = function(event) {
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+event.target.value+'&appid=6e61be1535f6225a901edf5250e2ae2f')
    .then(response => response.json())
    .then(data => {
        var cityValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
        city.innerHTML = cityValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;

    })
.catch(err => alert("Wrong city name!"))
}

var bigcitybuttons = document.getElementsByClassName('button');
for (let i=0; i<bigcitybuttons.length; i++) {
    var bigcitybutton = bigcitybuttons[i];
    
    bigcitybutton.addEventListener('click', getCity);
    
}


