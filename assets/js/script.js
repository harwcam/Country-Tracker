var apiUrl = " http://api.worldbank.org/v2/country/br?format=json"

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

getCountryData(apiUrl)