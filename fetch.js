const url = 'https://api.freegeoip.app/json/?apikey=cde289e0-8148-11ec-ae4d-9757438ff4e4';

let user = {}

fetch(url)
    .then(response => {
        return response.json();
    })
    .then(result => {
        user = result;
        document.getElementById('ip').textContent = result.ip;
        document.getElementById('city').textContent = result.region_code;
        document.getElementById('states').textContent = result.zip_code;
        document.getElementById('provider').textContent = result.time_zone;
    });
//



