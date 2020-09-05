var axios = require('axios');

axios.put('http://localhost:3000/users/6/', {
    first_name: 'Fred',
    last_name: 'Flintstone',
    email: 'fredflintstone@yahoo.com'
  })
  .then(res => {
      console.log(res.data);
  })
  .catch(error => {
      console.log(error);
  })