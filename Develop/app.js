var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var city = document.querySelector('.city');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
button.addEventListener('click',function(){
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

})

