import firebase from 'firebase/app';
import 'firebase/auth';
import { createUserDocument } from './user';

export const signup = async ({ firstName, lastName, email, password }) => {
  const resp = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  const user = resp.user;
  await user.updateProfile({ displayName: `${firstName} ${lastName}` });
  await createUserDocument(user);
  return user;
};

export const logout = () => {
  return firebase.auth().signOut();
};

export const login = async ({ email, password }) => { 
  const resp = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);

  return resp.user;
}; 



// import firebase from 'firebase/app';
// import 'firebase/auth';
// import { createUserDocument } from './user';

// export const signup = async ({ firstName, lastName, email, password }) => {
//   const resp = await firebase
//     .auth()
//     .createUserWithEmailAndPassword(email, password);
//   const user = resp.user;
//   await user.updateProfile({ displayName: `${firstName} ${lastName}` });
  
//   // we are using firebase to create a user document after signing up
//   await createUserDocument(user); 
  
//   return user;
// };

// export const logout = () => {
//   return firebase.auth().signOut(); 
// };

// export const login = async ({ email, password }) => {
//   const resp = await firebase 
//     .auth()
//     .signInWithEmailAndPassword(email, password);

//   return resp.user;
// }; 



// import firebase from 'firebase/app';
// import 'firebase/auth';

// export const signup = async ({ firstName, lastName, email, password }) => {
//   const resp = await firebase.auth().createUserWithEmailAndPassword(email, password);
  
//   const user = resp.user 
//   await user.updateProfile({ displayName: `${firstName} ${lastName}`});
//   return user;
// };
 
// export const logout = () => {
//   return firebase.auth().signOut();

// };

// export const login = async ( {email, password}) => { 
//   const resp = await firebase
//   .auth()
//   .signInWithEmailAndPassword({email, password}); 

//   return resp.user;
// };


// import firebase from "firebase";
// import 'firebase/auth';

// export const signup = async ({ firstName, lastName, email, password }) => {
// // we will use firebase auth to create email and password with this method
// const resp = await firebase.auth().createUserWithEmailAndPassword(email, password);
// await resp.user.updateProfile({ displayName: `${firstName} ${lastName}`});
// //from the response we grab the user info and update the profile in order to set the display name and show the first name and last name using display name
// } 