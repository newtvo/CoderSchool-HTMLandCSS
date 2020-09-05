var axios = require('axios');

axios.delete('http://localhost:3000/users/5/')
    .then(res => {
        console.log(res.data);
    })
    .catch(error => {
        console.log(error);
    })