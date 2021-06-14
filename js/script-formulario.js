
rangeIn.addEventListener("input", function () {
    document.getElementById('textInput').innerHTML = "<label for='range' id='textInput' value='500'>" + rangeIn.value.toLocaleString('en-IN') + "</label>";

    rangeIn.step = "500";

    if (rangeIn.value >= 10000) {
        rangeIn.step = "1000";
        var range = rangeIn.value = rangeIn.value - 500;
        document.getElementById('textInput').innerHTML = "<label for='range' id='textInput' value='500'>" + range + "</label>";
    }

    if (rangeIn.value >= 51000) {
        document.getElementById('textInput').innerHTML = "<label for='range' id='textInput' value='500'>R$50,000.00+</label>";
    }

}, false);