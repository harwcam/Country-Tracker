var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#country-name");

var countryInfo = function(country) {
    var apiUrl = "https://restcountries.com/v3.1/name/{china, india, united states, indonesia, pakistan, brazil, nigeria, bangladesh, russia, mexico}";
    
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
    });
});
};

var formSubmitHandler = function(event) {
    event.preventDefault();

    var countryName = nameInputEl.value.trim();

    if (countryName) {
        countryInfo(countryName);
        nameInputEl.value = "";
    } else {
        alert("Please enter a country name");
    }
};

userFormEl.addEventListener("submit", formSubmitHandler);