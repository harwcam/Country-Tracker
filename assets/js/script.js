
var dropdownEl = document.querySelector("#submit-btn")
var capitalEl = document.querySelector("#capital span")
var regionEl = document.querySelector("#region span")
var coordinatesEl = document.querySelector('#coordinates span')
var continentEl = document.querySelector('#continent span')
var populationEl = document.querySelector('#population span')


worldBankCountries = {
    'China' : 'CN',
    'India' : 'IN',
    'United States of America' : 'US',
    'Indonesia' : 'ID',
    'Pakistan' : 'PK',
    'Brazil' : 'BR',
    'Nigeria' : 'NG',
    'Bangladesh' : 'BD',
    'Ukraine' : 'UA',
    'Mexico' : 'MX'
}


var getWorldBankCountryData = function(apiUrl) {
    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                $(capitalEl).text("Capital:")
                $(regionEl).text("Region:")
                $(coordinatesEl).text("Coordinates:")


                var capitalCity = ""
                var latitude = ""
                var longitude = ""
                var region = ""
                var coordinates = ""
                var capitalCity = data[1]["0"]["capitalCity"]
                var latitude = data[1]["0"]["latitude"]
                var longitude = data[1]["0"]["longitude"]
                var region = data[1]["0"]["region"]["value"]
                var coordinates = latitude +", " + longitude

                $(capitalEl.append(" " + capitalCity))
                $(coordinatesEl.append(" " + coordinates))
                $(regionEl.append( " " + region))
                
            });
        } else{
            alert("Unable to connect to WorldBank API")
        }
    })
    .catch(function(error) {
        console.log("Error: " + error);
    });
};

var getRestCountriesData = function(apiUrl) {
    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                $(populationEl).text("Population:")
                $(continentEl).text("Continent:")

                var population = ""
                var continent = ""
                var population = data[0]["population"]
                var continent = data[0]["continents"][0]

                $(populationEl.append(" " + population))
                $(continentEl.append(" " + continent))
                
                
            });
        } else{
            alert("Unable to connect to WorldBank API")
        }
    })
    .catch(function(error) {
        console.log("Error: " + error);
    });
};


$('#countries-dropdown').change(function() {
   var countryKey = $('#countries-dropdown option:selected').text().trim()
   var wbIsoCode = worldBankCountries[countryKey]
   var worldBankURL = `http://api.worldbank.org/v2/country/${wbIsoCode}?format=json`
   var restCountriesURL = `https://restcountries.com/v3.1/alpha?codes=${wbIsoCode}`
   getWorldBankCountryData(worldBankURL)
   getRestCountriesData(restCountriesURL)
})



