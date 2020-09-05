var axios = require('axios');

axios.post('http://localhost:3000/users', {
    first_name: 'Fred',
    last_name: 'Flintstone',
    email: 'fredflintstone@gmail.com'
  })
  .then(res => {
      console.log(res.data);
  })
  .catch(error => {
      console.log(error);
  }) 
        