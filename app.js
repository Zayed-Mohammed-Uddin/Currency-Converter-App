document.addEventListener("DOMContentLoaded", function () {
    alert("Created by Zayed");

    const userAmountInput = document.querySelector("#convertAmount");
    const displayAmount = document.querySelector("#amountConverted");
    const convertBtn = document.querySelector("#btn_currency");
    const fromSelect = document.querySelector("#inputGroupSelect01");
    const toSelect = document.querySelector("#inputGroupSelect02");

    convertBtn.addEventListener("click", function () {
        const userAmount = parseInt(userAmountInput.value);
        const fromSelectedCurrency = fromSelect.options[fromSelect.selectedIndex].text;
        const toSectedCurrency = toSelect.options[toSelect.selectedIndex].text;

        try {
            if (fromSelectedCurrency == "USD" && toSectedCurrency == "INR") {
                displayAmount.value = userAmount * 83.03;
            } else if (fromSelectedCurrency == "USD" && toSectedCurrency == "USD") {
                displayAmount.value = userAmount * 1;
            } else if (fromSelectedCurrency == "USD" && toSectedCurrency == "CAD") {
                displayAmount.value = userAmount * 1.35;
            } else if (fromSelectedCurrency == "USD" && toSectedCurrency == "AUD") {
                displayAmount.value = userAmount * 1.52;
            } else if (fromSelectedCurrency == "USD" && toSectedCurrency == "BDT") {
                displayAmount.value = userAmount * 110;
            } else if (fromSelectedCurrency == "INR" && toSectedCurrency == "USD") {
                displayAmount.value = userAmount * 0.012;
            } else if (fromSelectedCurrency == "INR" && toSectedCurrency == "CAD") {
                displayAmount.value = userAmount * 0.016;
            } else if (fromSelectedCurrency == "INR" && toSectedCurrency == "AUD") {
                displayAmount.value = userAmount * 0.018;
            } else if (fromSelectedCurrency == "INR" && toSectedCurrency == "BDT") {
                displayAmount.value = userAmount * 1.32;
            } else if (fromSelectedCurrency == "INR" && toSectedCurrency == "INR") {
                displayAmount.value = userAmount * 1;
            } else if (fromSelectedCurrency == "CAD" && toSectedCurrency == "USD") {
                displayAmount.value = userAmount * 0.74;
            } else if (fromSelectedCurrency == "CAD" && toSectedCurrency == "INR") {
                displayAmount.value = userAmount * 61.29;
            } else if (fromSelectedCurrency == "CAD" && toSectedCurrency == "AUD") {
                displayAmount.value = userAmount * 1.12;
            } else if (fromSelectedCurrency == "CAD" && toSectedCurrency == "BDT") {
                displayAmount.value = userAmount * 81.12;
            } else if (fromSelectedCurrency == "CAD" && toSectedCurrency == "CAD") {
                displayAmount.value = userAmount * 1;
            } else if (fromSelectedCurrency == "AUD" && toSectedCurrency == "USD") {
                displayAmount.value = userAmount * 0.66;
            } else if (fromSelectedCurrency == "AUD" && toSectedCurrency == "INR") {
                displayAmount.value = userAmount * 54.62;
            } else if (fromSelectedCurrency == "AUD" && toSectedCurrency == "CAD") {
                displayAmount.value = userAmount * 0.89;
            } else if (fromSelectedCurrency == "AUD" && toSectedCurrency == "BDT") {
                displayAmount.value = userAmount * 72.24;
            } else if (fromSelectedCurrency == "AUD" && toSectedCurrency == "AUD") {
                displayAmount.value = userAmount * 1;
            } else if (fromSelectedCurrency == "BDT" && toSectedCurrency == "USD") {
                displayAmount.value = userAmount * 0.0091;
            } else if (fromSelectedCurrency == "BDT" && toSectedCurrency == "INR") {
                displayAmount.value = userAmount * 0.76;
            } else if (fromSelectedCurrency == "BDT" && toSectedCurrency == "CAD") {
                displayAmount.value = userAmount * 0.012;
            } else if (fromSelectedCurrency == "BDT" && toSectedCurrency == "AUD") {
                displayAmount.value = userAmount * 0.014;
            } else {
                displayAmount.value = userAmount * 1;
            }
        } catch (error) {
            console.error(error);
            displayAmount.value = "ERROR";
        }
    });
});