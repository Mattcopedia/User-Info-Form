
var admin = require("firebase-admin");

var serviceAccount = require("./react-grid-dashboard-e880e-firebase-adminsdk-1ms9d-fdea4213e8.json"); 

var uid = process.argv[2];  

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

admin.auth().setCustomUserClaims(uid, { admin: true})
    .then(() => {
        console.log('custom claims set for user', uid);
        process.exit() 
    })
    .catch(error => {
        console.log(error);
        process.exit(1);  
    })