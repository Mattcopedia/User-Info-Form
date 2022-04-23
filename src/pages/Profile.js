import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSession } from '../firebase/UserProvider';
import { firestore } from '../firebase/config';
import { updateUserDocument } from '../firebase/user';
import { ProfileImage } from '../ProfileImage';

const Profile = () => {
  const { user } = useSession();
  const params = useParams();
  const { register, setValue, handleSubmit } = useForm();
  const [userDocument, setUserDocument] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const docRef = firestore.collection('users').doc(params.id);
    const unsubscribe = docRef.onSnapshot((doc) => {
      if (doc.exists) {
        const documentData = doc.data();
        setUserDocument(documentData);
        const formData = Object.entries(documentData).map((entry) => ({
          [entry[0]]: entry[1],
        }));

        setValue(formData);
      }
    });
    return unsubscribe;
  }, [user.uid, setValue, params.id]);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await updateUserDocument({ uid: params.id, ...data });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (!userDocument) {
    return null;
  }

  const formClassname = `ui big form twelve wide column ${isLoading ? 'loading' : ''}`;

  return (
    <div
      className="add-form-container"
      style={{ maxWidth: 960, margin: '50px auto' }}
    >
      <div className="ui grid stackable">
        <ProfileImage id={params.id} />
        <form className={formClassname} onSubmit={handleSubmit(onSubmit)}>
          <div className="fields">
            <div className="eight wide field">
              <label>
                Name
                <input type="text" name="name" ref={register} />
              </label>
            </div>
            <div className="eight wide field">
              <label>
                Email
                <input type="text" name="email" disabled ref={register} />
              </label>
            </div>
          </div>
          <div className="fields">
            <div className="six wide field">
              <label>
                Address
                <input type="text" name="address" ref={register} />
              </label>
            </div>
            <div className="five wide field">
              <label>
                City
                <input type="text" name="city" ref={register} />
              </label>
            </div>
            <div className="two wide field">
              <label>
                State
                <input type="text" name="state" ref={register} />
              </label>
            </div>
            <div className="three wide field">
              <label>
                Zip
                <input type="text" name="zip" ref={register} />
              </label>
            </div>
          </div>
          <div className="equal width fields">
            <div className="field">
              <label>
                Phone
                <input type="text" name="phone" ref={register} />
              </label>
            </div>
            <div className="field">
              <label>
                Specialty
                <select className="specialty" name="specialty" ref={register}>
                  <option value="field agent">Field Agent</option>
                  <option value="covert operations">Covert Operations</option>
                  <option value="intelligence officer">
                    Intelligence Officer
                  </option>
                </select>
              </label>
            </div>
            <div className="field">
              <label>
                ip
                <input type="text" name="ip" ref={register} />
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="ui submit large grey button right floated"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;  


// import React, {useEffect, useState} from 'react';
// import { useParams } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import { useSession} from '../firebase/UserProvider';
// import { firestore } from '../firebase/config';

// // In react hook forms we can set many form values by passing in an array the array then contains objects and each object contains a single property which is the form field
// // we will then grab the id from the route using params rather than the current authenticated user used for admin data requesting data for a particular user
// // we are using the register function in useforms hook from react library to register User Input

// const Profile = () => { 
//     //{} curly braces are strictly for objects, [] is for arrays '' is for strings
//     const { user } = useSession(); 
//    const params = useParams(); 
//    const {register, setValue} = useForm(); 
//    const [userDocument, setUserDocument] = useState(null);

//    useEffect(() => {
//        // we wiil use useeffect to read the doc and listen to real time changes on the document
//         const docRef = firestore.collection('users').doc(params.id);
//         // we are using then because it is a promise
//         //onsnapshot is to listen to real time changes done on the document
//        const unsubscribe= docRef.onSnapshot((doc) => {
//         if (doc.exists) {
//             //We can grab our data using the data method and set our user document to the data so it listens for real time changes
//             const documentData = doc.data();
//             setUserDocument(documentData);
//             const formData = Object.entries(document.data).map((entry) => ({
//                 [entry[0]]: entry[1],
//             }));
//             // we then use set value to set the form data
//             setValue(formData); 
//         }
//        });
//        return unsubscribe; 
//    },[user.uid, setValue]); 
//    //useEffect will also depend on the set Value function


//     if(!userDocument) {
//         return null
//     }
//     return ( 
//         <div
//         className="add-form-container"
//         style={{ maxWidth: 960, margin: '50px auto' }}
//       >
//         <form className="ui big form">
//           <div className="fields">
//             <div className="eight wide field">
//               <label>
//                 Name
//                 <input type="text" name="name" ref={register} />
//               </label>
//             </div>
//             <div className="eight wide field">
//               <label>
//                 Email
//                 <input type="text" name="email" disabled ref={register}  />
//               </label>
//             </div>
//           </div>
//           <div className="fields">
//             <div className="six wide field">
//               <label>
//                 Address
//                 <input type="text" name="address" ref={register}  />
//               </label>
//             </div>
//             <div className="five wide field">
//               <label>
//                 City
//                 <input type="text" name="city" ref={register}  />
//               </label>
//             </div>
//             <div className="two wide field">
//               <label>
//                 State
//                 <input type="text" name="state" ref={register}  />
//               </label>
//             </div>
//             <div className="three wide field">
//               <label>
//                 Zip
//                 <input type="text" name="zip" ref={register}  />
//               </label>
//             </div>
//           </div>
//           <div className="equal width fields">
//             <div className="field">
//               <label>
//                 Phone
//                 <input type="text" name="phone" ref={register}  />
//               </label>
//             </div>
//             <div className="field">
//               <label>
//                 Specialty
//                 <select className="specialty" name="specialty" ref={register} >
//                   <option value="field agent">Field Agent</option>
//                   <option value="covert operations">Covert Operations</option>
//                   <option value="intelligence officer">Intelligence Officer</option>
//                 </select>
//               </label>
//             </div>
//             <div className="field">
//               <label>
//                 ip
//                 <input type="text" name="ip" />
//               </label>
//             </div>
//           </div>
//           <button type="submit" className="ui submit large grey button right floated">
//             Submit
//           </button>
//         </form>
//       </div> 
      
//     );
 
// };

// export default Profile; 