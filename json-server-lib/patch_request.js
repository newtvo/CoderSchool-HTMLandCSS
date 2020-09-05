var axios = require('axios');

axios.patch('http://localhost:3000/users/4/', {
    first_name: "Robert",
    last_name: "Vo",
    email: "bobbrown432@zing.com"
  })
  .then(res => {
      console.log(res.data);
  })
  .catch(error => {
      console.log(error);
  })