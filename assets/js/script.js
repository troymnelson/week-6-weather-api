// DECLARE VARIABLES
var city = 'New York'
var num = 1;
var keyCR = '1c7678c4ad5b20142575d1c39ea0b6dc';
var $submitBtn = $('.submit');
var $cityHeader = $('.city-name')
var $searchBtn = $('.search');
var $cityTemp = $('#temp')
var $cityWind = $('#wind')
var $cityHumidity = $('#humidity')
var $cityUVIndex = $('#uvIndex')

var $cityTemp1 = $('.temp1')
var $cityWind1 = $('#wind1')
var $cityHumidity1 = $('#humidity1')
var $cityUVIndex1 = $('#uvIndex1')

var $cityTemp2 = $('.temp2')
var $cityWind2 = $('#wind2')
var $cityHumidity2 = $('#humidity2')
var $cityUVIndex2 = $('#uvIndex2')

var $cityTemp3 = $('.temp3')
var $cityWind3 = $('#wind3')
var $cityHumidity3 = $('#humidity3')
var $cityUVIndex3 = $('#uvIndex3')

var $cityTemp4 = $('.temp4')
var $cityWind4 = $('#wind4')
var $cityHumidity4 = $('#humidity4')
var $cityUVIndex4 = $('#uvIndex4')

var $cityTemp5 = $('.temp5')
var $cityWind5 = $('#wind5')
var $cityHumidity5 = $('#humidity5')
var $cityUVIndex5 = $('#uvIndex5')

var $weatherImg0 = $('#weatherImg0');
var $weatherImg1 = $('#weatherImg1');
var $weatherImg2 = $('#weatherImg2');
var $weatherImg3 = $('#weatherImg3');
var $weatherImg4 = $('#weatherImg4');
var $weatherImg5 = $('#weatherImg5');

// var count = 0;
var $day1El = $('.day1');
var $day2El = $('.day2');
var $day3El = $('.day3');
var $day4El = $('.day4');
var $day5El = $('.day5');

var $newHistory = $('.collection')
var userInput = '';
$(document).ready(function () {
  localStorage.getItem(userInput)
})


// const researchBtn = document.createElement('button');
// const newHistory = document.querySelector('.collection');
$submitBtn.click(function (e) {
  e.preventDefault();
  console.log('first click');
  var $cityInput = $('.city-name')
  userInput = $cityInput.val();
  localStorage.setItem(userInput, userInput)
  $newHistory.append(`<button class="search" id=${userInput}>${userInput}</button>` + '<hr>');
  // console.log($newHistory.children().attr('.search'));
  // console.log($(`#${userInput}`).text())
  refetchData($(`#${userInput}`).text())
  // console.log($newHistory.children())
})


function refetchData(text) {
  $newHistory.children('button').click(function() {
    console.log('clicked');
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${text},&limit=${num}&appid=${keyCR}`)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    // Do something with the data
    console.log(data[0].name);
    $cityHeader.text('');
    $cityHeader.text(data[0].name)
    openWeather(data[0].lat, data['0'].lon)
    // console.log(data);
  });
  })

}

$submitBtn.click(function (e) {
  e.preventDefault();
  console.log('second click');
  var $cityInput = $('.city-name')
  userInput = $cityInput.val();
  // localStorage.setItem(userInput, userInput)
  // $newHistory.append(`<button class="search">${userInput}</button>` + '<hr>');
  // console.log($newHistory.children().attr('.search'));
  // console.log($('.search').text())
  // researchBtn.textContent = userInput;
  // researchBtn.classList.add('search');
  // new  History.appendChild(researchBtn);
  fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${userInput},&limit=${num}&appid=${keyCR}`)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      // Do something with the data
      console.log(data);
      $cityHeader.append(convertDate(data[0].dt));
      $cityHeader.text(data['0'].name)
      openWeather(data['0'].lat, data['0'].lon)
      // console.log(data);
    });
    userInput = '';
})

var $searchBtn = $('.search');
$searchBtn.click(function() {
  // console.log('clicked');

    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${this.textContent},&limit=${num}&appid=${keyCR}`)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      // Do something with the data
      // $cityHeader.text(data['0'].name)
      openWeather(data['0'].lat, data['0'].lon)
      // console.log(data);
    });
  
 
})


function openWeather(lat, long) {
  // thanks JD!
  $.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=imperial&appid=${keyCR}`)
    .then(function (data) {


      
      $day1El.text(convertDate(data.daily[1].dt));
      $day2El.text(convertDate(data.daily[2].dt));
      $day3El.text(convertDate(data.daily[3].dt));
      $day4El.text(convertDate(data.daily[4].dt));
      $day5El.text(convertDate(data.daily[5].dt));


      $cityTemp.text("Temp: " + data.current.temp + " F");
      $cityWind.text("Wind: " + data.current.wind_speed + " MPH")
      $cityHumidity.text("Humidity: " + data.current.humidity + " %")
      $cityUVIndex.text("UV Index: " + data.current.uvi);
      $cityUVIndex.addClass(checkUVI(data.current.uvi));
      console.log(data)
      $cityTemp1.text("Temp: " + data.daily[1].temp.day + " F");
      $cityWind1.text("Wind: " + data.daily[1].wind_speed + " MPH");
      $cityHumidity1.text("Humidity: " + data.daily[1].humidity + " %");
      $cityUVIndex1.text("UV Index: " + data.daily[1].uvi);
      $cityUVIndex1.addClass(checkUVI(data.daily[1].uvi));

      $cityTemp2.text(data.daily[2].temp.day + " F");
      $cityWind2.text(data.daily[2].wind_speed + " MPH");
      $cityHumidity2.text(data.daily[2].humidity + " %");
      $cityUVIndex2.text(data.daily[2].uvi);
      $cityUVIndex2.addClass(checkUVI(data.daily[2].uvi));

      $cityTemp3.text(data.daily[3].temp.day + " F");
      $cityWind3.text(data.daily[3].wind_speed + " MPH");
      $cityHumidity3.text(data.daily[3].humidity + " %");
      $cityUVIndex3.text(data.daily[3].uvi);
      $cityUVIndex3.addClass(checkUVI(data.daily[3].uvi));

      $cityTemp4.text(data.daily[4].temp.day + " F");
      $cityWind4.text(data.daily[4].wind_speed + " MPH");
      $cityHumidity4.text(data.daily[4].humidity + " %");
      $cityUVIndex4.text(data.daily[4].uvi);
      $cityUVIndex4.addClass(checkUVI(data.daily[4].uvi));

      $cityTemp5.text(data.daily[5].temp.day + " F");
      $cityWind5.text(data.daily[5].wind_speed + " MPH");
      $cityHumidity5.text(data.daily[5].humidity + " %");
      $cityUVIndex5.text(data.daily[5].uvi);
      $cityUVIndex5.addClass(checkUVI(data.daily[5].uvi));

      var dataTest = data.daily[0].weather[0].icon;
      $weatherImg0.attr('src', `https://openweathermap.org/img/wn/${dataTest}.png`)

      var dataTest = data.daily[1].weather[0].icon;
      $weatherImg1.attr('src', `https://openweathermap.org/img/wn/${dataTest}.png`)

      var dataTest = data.daily[2].weather[0].icon;
      $weatherImg2.attr('src', `https://openweathermap.org/img/wn/${dataTest}.png`)

      var dataTest = data.daily[3].weather[0].icon;
      $weatherImg3.attr('src', `https://openweathermap.org/img/wn/${dataTest}.png`)

      var dataTest = data.daily[4].weather[0].icon;
      $weatherImg4.attr('src', `https://openweathermap.org/img/wn/${dataTest}.png`)

      var dataTest = data.daily[5].weather[0].icon;
      $weatherImg5.attr('src', `https://openweathermap.org/img/wn/${dataTest}.png`)
    });
}

function convertDate(timestamp) {
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  var date = new Date(timestamp * 1000);
  // Hours part from the timestamp
  var day = date.getDate();
  // Minutes part from the timestamp
  var month = date.getMonth() + 1;
  // Seconds part from the timestamp
  var year = date.getFullYear();

  // Will display time in 10:30:23 format
  var formattedTime = month + '/' + day + '/' + year;
  return formattedTime;
}

function checkUVI(uvIndex) {
  uvIndex = Math.round(uvIndex);

  if (uvIndex <= 2) {
    return "green";
  } else if (uvIndex >= 3 && uvIndex <= 5) {
    return "yellow";
  } else if (uvIndex >= 6 && uvIndex <= 7) {
    return "orange";
  } else {
    return "red";
  }
}