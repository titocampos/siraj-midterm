# Midterm

### Requirements

Node version 10.15.0 or better

[NodeJS](https://nodejs.org)

Create an account in Stripe

[Stripe](https://stripe.com/)

Create an account in Google Firebase

[Firebase](https://console.firebase.google.com/)

## Installation

Clone or download example, install the dependencies using:
```
npm install
```

Using file */src/config/api_example.js*, create a new file */src/config/api.js* with your Stripe credentials

```
module.exports = {
  stripe: {
    STRIPE_KEY_PUB: 'YOUR PUBLIC KEY HERE',
    STRIPE_KEY_PRIV: 'YOUR SECRET KEY HERE'
  }
}
```
In */src/public/scripts/main.js* replace config with your public Firebase information, that can be found in Firebase console.
```
var config = {
    apiKey: "YOUR PUBLIC API KEY",
    authDomain: "YOUR AUTH DOMAIN",
    projectId: "YOUR PROJECT ID",
    appId: "YOUR APP ID"
};
```
Also save your file *serviceAccountKey.json*, in  */src/config/* with your Firebase private key credentials

## Running

To run use *npm* or *nodemon*
```
npm run watch
```

To change port that application is listening to, access file */src/config/general.js*, and modify value of *serverPort*
```
module.exports = {
  serverPort: 3500,
  logdir: "log"
}
```

## Using

From your browser access the URL below
```
http://localhost:3500/
```

## Useful links


### Firebase
```
https://codelabs.developers.google.com/codelabs/firebase-web/#15
https://github.com/balta-io/1965
https://medium.com/@_josueperalta/using-firebase-auth-with-a-custom-node-js-server-part-1-53bdb622c89a
https://codeforgeek.com/manage-session-using-node-js-express-4/
https://medium.com/novasemita/auth-using-firebaseui-firebase-functions-session-cookies-f2447bf42201
https://medium.com/@vladfr/use-cloud-firestore-with-async-bce875af0183
```
### Stripe
```
https://stripe.com/docs/recipes/custom-checkout
https://medium.com/@gordonnl/headless-stripe-payments-with-firebase-9b12639ea118
```
