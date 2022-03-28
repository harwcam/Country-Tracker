
dropdownEl = document.querySelector("#submit-btn")
capitalEl = document.querySelector("#capital")
regionEl = document.querySelector("#region")


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



var getCountryData = function(apiUrl) {
    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
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
                console.log(capitalCity)
                console.log(coordinates)
                console.log(region)
            });
        } else{
            alert("failure")
        }
    })
    .catch(function(error) {
        console.log(error);
    });
};


$('#countries-dropdown').change(function() {
   var countryKey = $('#countries-dropdown option:selected').text().trim()
   var isoCode = worldBankCountries[countryKey]
   var apiURL = `http://api.worldbank.org/v2/country/${isoCode}?format=json`
   getCountryData(apiURL)
})



