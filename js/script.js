{
    const setRate = (currency) => {
        switch (currency) {
            case "EUR":
                return rate = 4.3495

            case "USD":
                return rate = 3.9863

            case "CHF":
                return rate = 4.6609

            case "GBP":
                return rate = 5.0701
        };
    };

    const calculateResult = (rate) => {
        const amount = document.querySelector(".js-amountElement").value

        return amount / rate
    };

    const formatNumber = (number) => {

        const fixedNumber = number.toFixed(2)

        switch (true) {
            case fixedNumber.includes(".00"):
                return `${parseFloat(fixedNumber).toLocaleString()},00`

            case fixedNumber.endsWith("0"):
                return `${parseFloat(fixedNumber).toLocaleString()}0`
            
            default:
                return parseFloat(fixedNumber).toLocaleString()
        }
    };

    const updateResult = () => {
        const currency = document.querySelector(".js-currencyElement").value
        const rate = setRate(currency)
        const resultFields = document.querySelectorAll(".js-resultField")

        const result = calculateResult(rate)
        const formattedResult = formatNumber(result)
        const formattedRate = String(rate).replace(".", ",")

        resultFields.forEach(field => {
            field.id === "rateField"
                ? field.innerText = `${currency}: ${formattedResult}`
                : field.innerText = `${currency} rate: ${formattedRate}`
        })
    };

    const updateButton = () => {
        const button = document.querySelector(".js-button")

        button.innerText = "Calculate again"
    };

    const revealResult = () => {
        const resultContainer = document.querySelector(".js-resultContainer")

        resultContainer.classList.add("form__resultContainer--reveal")
    };

    const onSubmit = () => {
        updateResult()
        updateButton()
        revealResult()
    }

    const init = () => {
        const formElement = document.querySelector(".js-formElement")
        
        formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            onSubmit()
        });
    };

    init()
};