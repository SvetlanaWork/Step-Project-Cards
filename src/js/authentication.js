export default function authentication(userEmail, userPassword) {
   try {
    return fetch("https://ajax.test-danit.com/api/v2/cards/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: userEmail, password: userPassword })
    })
      .then(response => response.text())
      // .then(token => console.log(token))
    }
    catch (error) {
      console.log("You do not authentication");
     }
   } 