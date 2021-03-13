const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=5669b37006ecb1bc65edc9fbf8775403`;

fetch(apiURL)
  .then((resp) => resp.json())
  .then((jsObject) => {
    console.log(jsObject);
    let day = 0;
    const dayofWeek = ["SUN", "MON", "TUES", "WEDS", "THURS", "FRI", "SAT"];

    //loop thru each of the forecast days
    // thefive.array.forEach((x) => {});

    let d = new Date(jsObject.list[4].dt_txt);
    document.getElementById(`dayofweek${day + 1}`).textContent = dayofWeek[d.getDay()];
    document.getElementById(`forecast${day + 1}`).textContent = jsObject.list[4].main.temp

    dayofWeek.slice(-5).forEach((x, idx) => {
      document.getElementById(`dayofweek${idx}`).textContent = dayofWeek[idx];
      document.getElementById(`forecast${idx}`).textContent = jsObject.list[idx].main.temp
    });
  });

  //Weather Summary
  //

const currentApiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=5669b37006ecb1bc65edc9fbf8775403";
fetch(currentApiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

   
    let prestonTemp = jsObject.main.temp;
    let prestonHigh = jsObject.main.temp_max;

    document.getElementById('current-desc').textContent = jsObject.weather[0].description;
    document.getElementById('current').textContent = prestonTemp.toFixed(0);
    document.getElementById('high').textContent = prestonHigh.toFixed(0);

    var speed = jsObject.wind.speed;
    var chill = 35.74 + (0.6215 * prestonTemp) - (35.75 * Math.pow(speed,0.16)) + (0.4275 * prestonTemp * Math.pow(speed,0.16));

    document.getElementById('windChill').textContent = chill.toFixed(0);
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windSpeed').textContent = jsObject.wind.speed;

  
  });
// fetch(apiURL)
// .then((response => response.json())
// .then((jsObject) => {
// console.log(jsObject);
// let day = 0;
// const dayofWeek = ["SUN", "MON", "TUES", "WEDS", "THURS", "FRI", "SAT"];

// //loop thru each of the forecast days
// // thefive.array.forEach((x) => {});
// let d = new Date(jsObject.list[4].dt_txt);
// console.log("D***", d);
// document.getElementById(`dayofweek${day + 1}`).textContent =
//   dayofWeek[d.getDay()];
// document.getElementById(`forecast${day + 1}`).textContent =
//   jsObject.list[4].main.temp;
//   })
// );
