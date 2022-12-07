var axios = require("axios").default;
var key = require('./keys.json');
var options = {
    method: 'POST',
    url: 'https://balikavimalzemeleri.myikas.com/api/admin/oauth/token',
    headers: {
        'content-type': 'application/x-www-form-urlencoded'
    },
    data: {
        grant_type: 'client_credentials',
        client_id: key.client_id,
        client_secret: key.client_secret
    }
};
axios.request(options)
    .then((response) => {
        console.log(response.data);
    }).catch((error) => {
    console.error(error);
});


