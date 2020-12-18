/* Skriv din kod här */
const URL = "https://restcountries.eu/rest/v2/all";

fetch(URL)
  .then(
    // response => response.json()
    function (response) {
      console.log(response);

      return response.json();
    }
  )
  .then(function (data) {
    console.log(data);
    for (let i = 0; i < 3; i++) {
      let random = Math.floor(Math.random() * data.length);

      let name = data[random].name;
      let timezone = data[random].timezones[0];
      let flagUrl = data[random].flag;
      /* let flag2 = new Flag(data[220].flag); */

      let countries = new Country(name, timezone, flagUrl);
      countries.displayLand(name);
      countries.displayTime(timezone);
      countries.displayFlag(flagUrl);
      /* console.log(land);
      console.log(timezone);
      console.log(flag); */
    }
  });

//Constructor
function Country(_name, _time, _flag) {
  this.name = _name;
  this.time = _time;
  this.flag = _flag;
}
/* function Flag(_flag) {
  this.flag = _flag;
} */

let body = document.querySelector("body");

Country.prototype.displayLand = function (land) {
  let h2Land = document.createElement("h2");

  h2Land.innerText = land;

  body.appendChild(h2Land);
};

//uträkningen på time
//visa tid
Country.prototype.displayTime = function (time) {
  let body = document.querySelector("body");
  let tid = document.createElement("h3");
  /* tid.innerText = this.timeZone; */
  tid.innerText = this.time;
  body.appendChild(tid);
  //visa tid
  let UTC = this.time;
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
Country.prototype.displayFlag = function (flag) {
  let img = document.createElement("img");
  /* img.src = this.flag; */
  img.src = flag;
  body.appendChild(img);
  img.style.height = "100px";
};
