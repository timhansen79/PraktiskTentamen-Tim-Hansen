/* Skriv din kod här */
const url = `https://restcountries.eu/rest/v2/all`;

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //loopa random
    for (let i = 0; i < 3; i++) {
      let rand = Math.floor(Math.random() * data.length);
      console.log(rand);
      let country = new Land(
        data[rand].name,
        data[rand].timezones[0],
        data[rand].flag
      );

      country.displayCountryName();
      country.displayTimeZone();
      country.displayFlag();
    }
  });

//Country-mall

function Land(name, timeZone, url) {
  this.name = name;
  this.timeZone = timeZone;
  this.flaggaUrl = url;
}
//visa land
Land.prototype.displayCountryName = function () {
  let body = document.querySelector("body");
  let name = document.querySelector("h1");
  name.innerText = this.name;
  body.appendChild(name);
};
//visa tid
Land.prototype.displayTimeZone = function () {
  let body = document.querySelector("body");
  let tid = document.querySelector("h3");
  tid.innerText = this.timeZone;
  body.appendChild(tid);
  //visa tid
  let UTC = this.timeZone;
  console.log(typeof UTC);
  console.log(UTC);
  let subStringUTC = UTC.substr(4, 2);
  console.log(subStringUTC);
  let operatorUTC = UTC.substr(3, 1);
  let UTCnumber = parseInt(subStringUTC);

  let showDate = new Date();

  if (operatorUTC === "+") {
    tid.textContent = `${
      showDate.getUTCHours() + UTCnumber
    } : ${showDate.getUTCMinutes()}`;
  } else if (operatorUTC === "-") {
    tid.textContent = `${
      showDate.getUTCHours() - UTCnumber
    }:${showDate.getUTCMinutes()}`;
  } else {
    tid.textContent = `${showDate.getUTCHours()}:${showDate.getUTCMinutes()}`;
  }
};
//visa flagga
Land.prototype.displayFlag = function () {
  let body = document.querySelector("body");
  let img = document.querySelector("img");
  img.src = this.flaggaUrl;
  body.appendChild(img);
};
