const url = 'https://api.freegeoip.app/json/?apikey=1951d6a0-82b4-11ec-ae7e-b9692bd78110';

let user = {}

fetch(url)
    .then(response => {
        return response.json();
    })
    .then(result => {
        document.getElementById('ip').textContent = result.ip;
        document.getElementById('city').textContent = result.region_code;
        document.getElementById('states').textContent = result.zip_code;
        document.getElementById('provider').textContent = result.time_zone;
        document.getElementById('others').textContent = result.country_code + '  ' + result.latitude + '  ' + result.longitude + '  ' + result.metro_code;
    });
//



