var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#country-name");
var countryContainerEl = document.querySelector("#country-container");
var countrySearchTerm = document.querySelector("#country-search-term");

var formSubmitHandler = function(event) {
    event.preventDefault();

    var countryName = nameInputEl.value.trim();

    if (countryName) {
        getCountryInfo(countryName);
        nameInputEl.value = "";
    } else {
        alert("Please enter a country name");
    }
};

var getCountryInfo = function(china) {
 //   var apiUrl = "https://restcountries.com/v3.1/name/{china, india, united states, indonesia, pakistan, brazil, nigeria, bangladesh, russia, mexico}";
    var apiUrl = "https://restcountries.com/v3.1/name/{china}";

    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            console.log(response);
        response.json().then(function(data) {
            displayCountries(data, china);
    });
} else {
    alert("Error: " + response.statusText);
}
})
.catch(function(error) {
    alert("Unable to connect to restcountries");
});
};

var displayCountries = function(countries, searchTerm) {

    if (countries.length === 0) {
        countryContainerEl.textContent = "No countries found.";
        return;
    }

    countrySearchTerm.textContent = searchTerm;

    for (var i = 0; i < countries.length; i++) {
        var countriesName = countries[i].name.common + " Current population: " + countries[i].population + " Region: " + countries[i].region + " Capital: " + countries[i].capital + " Continent: " + countries[i].continents;

        var countriesEl = document.createElement("div");
        countriesEl.classList = "list-item flex-row justify-space-between align-center";

        var titleEl = document.createElement("span");
        titleEl.textContent = countriesName;

        countriesEl.appendChild(titleEl);

        var statusEl = document.createElement("span");
        statusEl.classList = "flex-row align-center";

        countriesEl.appendChild(statusEl);

        countryContainerEl.appendChild(countriesEl);
    }
};

userFormEl.addEventListener("submit", formSubmitHandler);