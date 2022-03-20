var submitbutton = document.querySelector('.submitbutton');
var inputValue = document.querySelector('.inputValue');
var city = document.querySelector('.city');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

// Create a function to reuse

submitbutton.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=6e61be1535f6225a901edf5250e2ae2f')
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
});

// Add event for city buttons
// define a function
var getCity = function(event) {
    console.log(event.target);
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+event.target.value+'&appid=6e61be1535f6225a901edf5250e2ae2f')
    .then(response => response.json())
    .then(data => {
        var cityValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
        console.log(bigcitybutton);
        console.log(cityValue);
        city.innerHTML = cityValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;

    })
.catch(err => alert("Wrong city name!"))
}

var bigcitybuttons = document.getElementsByClassName('button');
console.log(bigcitybuttons.length);
for (let i=0; i<bigcitybuttons.length; i++) {
    var bigcitybutton = bigcitybuttons[i];
    
    bigcitybutton.addEventListener('click', getCity);
    

}


