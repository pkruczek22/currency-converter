{
  const rateEUR = 4.7643;
  const rateUSD = 4.6921;
  const rateGBP = 5.6103;
  const rateCZK = 0.1942;

  const calculateResult = (currencyElement, amountElement) => {
    const amount = amountElement.value;
    const currency = currencyElement.value;

    switch (currency) {

      case "EUR":
      return amount / rateEUR;

      case "USD":
      return amount / rateUSD;

      case "GBP":
      return amount / rateGBP;

      case "CZK":
      return amount / rateCZK;
    };

  };

  const updateResult = (resultElement, currencyElement) => {
    const amountElement = document.querySelector(".js-amountElement");

    resultElement.value = calculateResult(currencyElement, amountElement).toFixed(2);
  };

  const updateRate = (currencyElement, rateElement) => {
    const currency = currencyElement.value;
    let rate; 

    switch (currency) {

      case "EUR":
        rate = rateEUR;

        break;

      case "USD":
        rate = rateUSD;

        break;

      case "GBP":
        rate = rateGBP;

        break;

      case "CZK":
        rate = rateCZK;

        break;
    };

    rateElement.value = String(rate).replace(".", ",");

  };

  const switchCurrencySymbols = currencyElement => {
    const currencySymbol = document.querySelectorAll(".js-currencySymbol");
    const currency = currencyElement.value;

    currencySymbol.forEach((e) => {
      e.innerText = currency;
    });
  };

  const showResultForm = hiddenContainer => {
    hiddenContainer.classList.add("form__container--result");
  };

  const updateResultForm = () => {
    const currencyElement = document.querySelector(".js-currencyElement");
    const hiddenContainer = document.querySelector(".js-hiddenContainer");
    const resultElement = document.querySelector(".js-resultElement");
    const rateElement = document.querySelector(".js-rateElement");

    switchCurrencySymbols(currencyElement);
    updateRate(currencyElement, rateElement);
    updateResult(resultElement, currencyElement);
    showResultForm(hiddenContainer);
  }

  const updateButtonText = button => {
    button.innerText = "Przelicz na nowo";
  };

  const formElement = document.querySelector(".js-formElement");

  formElement.addEventListener("submit", (event) => {
    const button = document.querySelector(".js-button");

    event.preventDefault();
    updateResultForm();
    updateButtonText(button);
  });
}