const axios = require('axios');
var key = require('./keys.json');
const data = {"query":`{me {
        id
  }}`};

const config = {
    method: 'POST',
    url: 'https://api.myikas.com/api/v1/admin/graphql',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer your_token'
    },
    data : data
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        if (error.response) {
            console.log(JSON.stringify(error.response.data));
        }
    });