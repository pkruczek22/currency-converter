{
    const setCurrencyRate = (currency) => {

        switch (currency) {
            case "EUR":
                return rate = 4.2378;
            case "USD":
                return rate = 3.7804;
            case "GBP":
                return rate = 5.0238;
            case "CHF":
                return rate = 4.5184;
        };
    };

    const calculateExchange = (rate) => {
        const amount = document.querySelector(".js-amountElement").value

        return amount / rate
    };

    const formatResult = (result, currency) => {
        const fixedNumber = result.toFixed(2)

        switch (true) {
            case fixedNumber.includes(".00"):
                return `${parseFloat(fixedNumber).toLocaleString()},00 ${currency}`;

            case fixedNumber.endsWith("0"):
                return `${parseFloat(fixedNumber).toLocaleString()}0 ${currenct}`;

            default:
                return `${parseFloat(fixedNumber).toLocaleString()} ${currency}`;
        };
    };


    const updateResult = () => {
        const resultAmountElement = document.querySelector(".js-resultAmount");
        const resultRateEelemnt = document.querySelector(".js-resultRate");
        const currency = document.querySelector(".js-currencyElement").value
        const rate = setCurrencyRate(currency)

        const result = calculateExchange(rate)
        const formattedResult = formatResult(result, currency)
        const formattedRate = rate.toString().replace(".", ",")

        resultAmountElement.innerHTML = formattedResult;
        resultRateEelemnt.innerHTML = formattedRate;
    };

    const showResult = () => {
        const resultContainer = document.querySelector(".js-resultContainer")
        resultContainer.classList.add("form__resultContainer--display")
    };

    const updateButton = () => {
        const formButton = document.querySelector(".js-formButton")

        formButton.innerHTML = "Recalculate!"
    }

    const onSubmit = () => {
        showResult();
        updateResult();
        updateButton();
    };

    const init = () => {
        const form = document.querySelector(".js-form")

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            onSubmit()
        });
    };

    init();
};
