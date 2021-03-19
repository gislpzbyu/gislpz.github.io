const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=5669b37006ecb1bc65edc9fbf8775403`;

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

const currentApiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=5669b37006ecb1bc65edc9fbf8775403";
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

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    const townsA = [0]
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p_1 = document.createElement('p');
        let p_2 = document.createElement('p');
        let p_3 = document.createElement('p');

        h2.textContent = towns[townsA].name + " Upcoming Events";
        p_1.textContent = towns[townsA].events[0];
        p_2.textContent = towns[townsA].events[1];
        p_3.textContent = towns[townsA].events[2];

        card.appendChild(h2);
        card.appendChild(p_1);
        card.appendChild(p_2);
        card.appendChild(p_3);

        document.querySelector('div.events').appendChild(card);
  });