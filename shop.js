"use strict";

const shopTable = document.getElementById("store-table");

const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function shop(shopName, minCustPerHour, maxCustPerHour, avgCookiesPerHour) {
  this.shopName = shopName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerHour = avgCookiesPerHour;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailyCookies = 0;
  this.calcCustomersEachHour();
  this.calcCookiesEachHour();
  this.render();
}

shop.prototype.calcCustomersEachHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.customersEachHour.push(randomNum(this.minCustPerHour, this.maxCustPerHour));
  }
};

shop.prototype.calcCookiesEachHour = function () {
  for (let i = 0; i < hours.length; i++) {
    let oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerHour);
    this.cookiesEachHour.push(oneHour);
    this.totalDailyCookies += oneHour;
  }
};

shop.prototype.render = function () {
  this.calcCustomersEachHour();
  this.calcCookiesEachHour();

  
  const tr = document.createElement("tr");

  
  const th = document.createElement("th");
  th.textContent = this.shopName;


  tr.appendChild(th);


  for (let i = 0; i < hours.length; i++) {
    const td = document.createElement("td");
    td.textContent = this.cookiesEachHour[i];
    tr.appendChild(td);
  }

  
  const shopTotal = document.createElement("th");
  shopTotal.textContent = this.totalDailyCookies;
  tr.appendChild(storeTotal);

  
  shopTable.appendChild(tr);
};

const seattle = new shop("seattle", 23, 65, 6.3);
const dubai = new shop("dubai", 23, 65, 6.3);
console.log(seattle);