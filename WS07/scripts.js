const text = '{ "employees" : [' +
  '{ "firstName":"John" , "lastName":"Doe" },' +
  '{ "firstName":"Anna" , "lastName":"Smith" },' +
  '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const data = JSON.parse(text);


function showNames() {
  let html = "<ul>";
  for (let i = 0; i < data.employees.length; i++) {
    html += `<li>${data.employees[i].firstName} ${data.employees[i].lastName}</li>`;
  }
  html += "</ul>";
  document.getElementById("jsondata").innerHTML = html;
}


function showAll() {
  let html = "<ul>";
  for (let i = 0; i < data.employees.length; i++) {
    html += `<li>Etunimi: ${data.employees[i].firstName}, Sukunimi: ${data.employees[i].lastName}</li>`;
  }
  html += "</ul>";
  document.getElementById("jsondata").innerHTML = html;
}



function loadRawJSON() {
  const url = "https://www.omdbapi.com/?s=star+wars&apikey=cbbc6750";
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.getElementById("rawdata").textContent = xhr.responseText;
    }
  };
}


function loadAndParseJSON() {
  const url = "https://www.omdbapi.com/?s=star+wars&apikey=cbbc6750";
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      let html = "<table border='1'><tr><th>Elokuvan nimi</th><th>Vuosi</th><th>Kuva</th></tr>";

      for (let i = 0; i < data.Search.length; i++) {
        html += `<tr>
                    <td>${data.Search[i].Title}</td>
                    <td>${data.Search[i].Year}</td>
                    <td><img src="${data.Search[i].Poster}" width="80"></td>
                 </tr>`;
      }

      html += "</table>";
      document.getElementById("rawdata").innerHTML = html;
    }
  };
}





const apiKey = "ff64c247a136f706923d1ee0d55d71e2";

function getWeather() {
  const city = document.getElementById("city").value;
  fetchWeather(city);
}


function changeCity() {
  const city = document.getElementById("city").value;
  fetchWeather(city);
}


function searchCity() {
  const city = document.getElementById("citysearch").value;
  fetchWeather(city);
}

function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&mode=JSON&APPID=${apiKey}`;

  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      const weatherDiv = document.getElementById("weatherdata");

      const name = data.name;
      const temp = data.main.temp;
      const humidity = data.main.humidity;
      const clouds = data.clouds.all;
      const description = data.weather[0].description;

      weatherDiv.innerHTML = `
        <h3>${name}</h3>
        <p>Lämpötila: ${temp} °C</p>
        <p>Kosteus: ${humidity} %</p>
        <p>Pilvisyys: ${clouds} %</p>
        <p>Kuvaus: ${description}</p>
      `;
    }
  };
}
