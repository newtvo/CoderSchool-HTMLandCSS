var axios = require('axios');

axios.get('http://localhost:3000/users')
        .then(res => {
            var datas = res.data;
            return datas.map(data => {
                console.log(data.first_name, data.last_name, data.email);
            });
        })
        .catch(error =>  {
            console.log(error);
        })