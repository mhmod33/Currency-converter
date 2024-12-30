fetch(
  "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=ca404907763b46278180db41967fd052"
)
  .then((result) => {
    let myData = result.json();
    return myData;
  })
  .then((currency) => {
    let btn = document.querySelector(".btn");

    btn.addEventListener("click", () => {
      let amount = document.querySelector(".amount");
      let EGP = document.querySelector(".EGP span");
      let SAR = document.querySelector(".SAR span");
      EGP.innerHTML = Math.round(amount.value * currency.rates["EGP"]);
      SAR.innerHTML = Math.round(amount.value * currency.rates["SAR"]);
    });
  });
