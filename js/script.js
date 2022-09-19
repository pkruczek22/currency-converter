{
  const calculateResult = currency => {
    const rateElement = document.querySelector(".js-rateElement");
    let rate = undefined;
    const amountElement = document.querySelector(".js-amountElement");
    const amount = amountElement.value;

    switch (currency) {

      case "EUR":
        rate = 4.7643;
        rateElement.value = String(rate).replace(".", ",");
        return amount / rate;

      case "USD":
        rate = 4.6921;
        rateElement.value = String(rate).replace(".", ",");
        return amount / rate;

      case "GBP":
        rate = 5.6103;
        rateElement.value = String(rate).replace(".", ",");
        return amount / rate;

      case "CZK":
        rate = 0.1942;
        rateElement.value = String(rate).replace(".", ",");
        return amount / rate;
    };
  };

  const switchCurrency = currency => {
    const currencySymbol = document.querySelectorAll(".js-currencySymbol");

    currencySymbol.forEach((e) => {
      e.innerText = currency;
    });
  };

  const showResult = () => {
    const currencyElement = document.querySelector(".js-currencyElement");
    const currency = currencyElement.value;
    const resultElement = document.querySelector(".js-resultElement");
    const hiddenFieldset = document.querySelector(".js-hiddenFieldset");

    switchCurrency(currency);
    resultElement.value = calculateResult(currency).toFixed(2);
    hiddenFieldset.classList.add("form__fieldset--result");
  }

  const formElement = document.querySelector(".js-formElement");

  formElement.addEventListener("submit", (event) => {
    const button = document.querySelector(".js-button");

    event.preventDefault();
    showResult();
    button.innerText = "Przelicz na nowo";
  });
}