let formElement = document.querySelector(".js-formElement");
let amountElement = document.querySelector(".js-amountElement");
let currencyElement = document.querySelector(".js-currencyElement");
let resultElement = document.querySelector(".js-resultElement");
let rateElement = document.querySelector(".js-rateElement");
let button = document.querySelector(".js-button");
let hiddenFieldset = document.querySelector(".js-hiddenFieldset");
let currencySymbol = document.querySelectorAll(".js-currencySymbol");


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let currency = currencyElement.value;
    let rate = undefined;

    switch (currency) {
        case "EUR":
            rate = 4.7643;
            currencySymbol.forEach((e) => {
                e.innerText = "EUR";
            });
            break;

        case "USD":
            rate = 4.6921;
            currencySymbol.forEach((e) => {
                e.innerText = "USD";
            });
            break;

        case "GBP":
            rate = 5.6103;
            currencySymbol.forEach((e) => {
                e.innerText = "GBP";
            });
            break;

        case "CZK":
            rate = 0.1942;
            currencySymbol.forEach((e) => {
                e.innerText = "CZK";
            });
            break;
    }

    let result = amount / rate;


    resultElement.value = result.toFixed(2);
    rateElement.value = String(rate).replace(".", ",");


    hiddenFieldset.classList.add("form__fieldset--result");
    button.innerText = "Przelicz na nowo";
});