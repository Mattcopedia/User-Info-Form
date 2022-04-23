import { firestore, storage } from './config';

export const createUserDocument = async (user) => {
  // get a reference to the Firestore document
  const docRef = firestore.doc(`/users/${user.uid}`);

  // create user object
  const userProfile = {
    uid: user.uid,
    email: user.email, 
    name: user.displayName,
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    specialty: '',
    ip: '',
  };

  // write to Cloud Firestore
  return docRef.set(userProfile);
};

export const updateUserDocument = async (user) => {
  const docRef = firestore.doc(`/users/${user.uid}`);
  return docRef.update(user);
};

export const uploadImage = (userId, file) => {
  return new Promise((resolve, reject) => {
    // create file reference
    const filePath = `users/${userId}/profile-image`;
    const fileRef = storage.ref().child(filePath);

    // upload task
    const uploadTask = fileRef.put(file);

    uploadTask.on(
      'state_changed',
      null,
      (error) => reject(error),
      () => {
        resolve(uploadTask.snapshot.ref);
      }
    );
  });
};

export const getDownloadUrl = (userId) => {
  const filePath = `users/${userId}/profile-image`;
  return storage.ref().child(filePath).getDownloadURL();
}; 


// import { firestore , storage } from './config';

// export const createUserDocument = async (user) => {
//   // get a reference to the Firestore document
//   const docRef = firestore.doc(`/users/${user.uid}`);

//   // create user object
//   const userProfile = { 
//     uid: user.uid,
//     email: user.email,
//     name: user.displayName,
//     address: '',
//     city: '',
//     state: '',
//     zip: '',
//     phone: '',
//     specialty: '',
//     ip: '',
//   };

//   // write to Cloud Firestore
//   return docRef.set(userProfile);
// }; 


// export const updateUserDocument = async (user) => {
//   const docRef = firestore.doc(`/users/${user.uid}`);
//   return docRef.update(user);
// };

// export const uploadImage = (userId, file) => {
//   return new Promise ((resolve,reject) => {
//     //create file reference
//     const filePath = `users/${userId}/profile-image`;
//     const fileRef = storage.ref().child(filePath);

//     //upload task
//     const uploadTask = fileRef.put(file);

//     uploadTask.on('state_changed', null, (error) => reject(error), () => {
//       resolve(uploadTask.snapshot.ref);
//     });
//   });  
// } 

// export const getDownloadURL = (userId) => {
//   const filePath = `users/${userId}/profile-image`;
//   return storage.ref().child(filePath).getDownloadURL();
// }





// export const createUserDocument = async (user) => {
//     //get a reference to firestore and include the path to the user document
// const docRef = firestore.doc(`/users/${user.uid}`);

// const userProfile = {
//     uid: user.id,
//     email: user.email,
//     name: user.displayName,
//     address: '',
//     city: '',
//     state: '',
//     zip: '',
//     phone: '',
//     specialty: '',
//     ip: '',

// };
// // write to Cloud firestore to set the document with the userprofile object information in cloud firestore
//   return docRef.set(userProfile); 
// };