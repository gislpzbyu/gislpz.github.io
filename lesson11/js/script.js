/*LESSON 09*/
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];
        const allTowns = [5, 1, 6]
        for (let i = 0; i < allTowns.length; i++) {
            let townCard = document.createElement('section');
            let h2 = document.createElement('h2');
            let h4 = document.createElement('h4');
            let h3_1 = document.createElement('p');
            let h3_2 = document.createElement('p');
            let h3_3 = document.createElement('p');
            let img = document.createElement('img');

            h2.textContent = towns[allTowns[i]].name;
            h4.textContent = '"' + towns[allTowns[i]].motto;
            h3_1.textContent = 'Year Founded:' + towns[allTowns[i]].yearFounded;
            h3_2.textContent = 'Population:' + towns[allTowns[i]].currentPopulation;
            h3_3.textContent = 'Annual Rainfall:' + towns[allTowns[i]].averageRainfall;
            img.setAttribute('src', 'images/' + towns[allTowns[i]].photo);
            img.setAttribute('alt', towns[allTowns[i]].name + 'photo');
            img.setAttribute('loading', 'lazy');

            townCard.appendChild(h2);
            townCard.appendChild(img);
            townCard.appendChild(h4);
            townCard.appendChild(h3_1);
            townCard.appendChild(h3_2);
            townCard.appendChild(h3_3);

            document.querySelector('div.towns').appendChild(townCard);



        }
    });