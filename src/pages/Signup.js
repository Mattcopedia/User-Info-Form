

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signup } from '../firebase/auth';
import { Link } from 'react-router-dom'; 

function Signup(props) {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    let newUser;
    setLoading(true);
    try {
      newUser = await signup(data);
      await signup(data);
      reset();
    } catch(error) {
      console.log(error);
    }
    if (newUser) {
      props.history.push(`/profile/${newUser.uid}`);
    }  else {
      setLoading(false);

    }

  } 

  const formClassName = `ui form ${isLoading ? 'loading' : ''}`; 

  return (
    <div className="login-container">
      <div className="ui card login-card">
        <div className="content">
          <form className={formClassName} onSubmit={handleSubmit(onSubmit)}>
            <div className="two fields">
              <div className="field" >
                <label>
                  First Name
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    ref={register}
                  />
                </label>
              </div>
              <div className="field">
                <label>
                  Last Name
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    ref={register}
                  />
                </label>
              </div>
            </div>
            <div className="field">
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  ref={register}
                />
              </label>
            </div>
            <div className="field">
              <label>
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  ref={register}
                />
              </label>
            </div>
            <div className='field actions'>
            <button className="ui primary button login" type="submit">
              SignUp
            </button>
              or 
            <Link to="/login">Log In</Link>
            </div> 
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup; 










// import React, { useState} from 'react';
// import { useForm } from 'react-hook-form'; 
// import { signup } from '../firebase/auth';

// function Signup() {
//   const { register, handleSubmit, reset } = useForm();
//   const [isLoading, setLoading] = useState(false);  
 

//   const onSubmit = async (data) => { 
//     setLoading(true);
//     try{ 
//       await signup(data);
//       reset();
//     } catch(error) {
//       console.log(error);  
//     }
//     setLoading(false);
//   } 

//   const formClassName = `ui form ${isLoading} ? "loading" : ''`; 
//   //The useform hook uses the following 3 methods {functions in objects}
//   // register method allows us to register our inputs i.e store them and bring them back when needed and add validation rules
//   // handle submit method will be dealing with the form data to submit the form
//   // the reset method is used to clear the form after a successful form submit
//   return (
//     <div className="login-container">
//       <div className="ui card login-card">
//         <div className="content">
//           <form className={formClassName} onSubmit={handleSubmit(onSubmit)}>
//             {/* The callback is an onSubmit function in handlesubmit we will create now */}
//             <div className="two fields">
//               <div className="field">
//                 <label>
//                   First Name
//                   <input
//                     type="text"
//                     name="firstName"
//                     placeholder="First Name"
//                     ref={register}
//                   />
//                 </label>
//               </div>
//               <div className="field">
//                 <label>
//                   Last Name
//                   <input type="text" name="lastName" placeholder="Last Name" ref={register} />
//                 </label>
//               </div>
//             </div>
//             <div className="field">
//               <label>
//                 Email
//                 <input type="email" name="email" placeholder="Email" ref={register} />
//               </label>
//             </div>
//             <div className="field">
//               <label>
//                 Password
//                 <input type="password" name="password" placeholder="Password" ref={register}  />
//               </label>
//             </div>
//             <button className="ui primary button login" type="submit">
//               Sign Up
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;

// /*
// .login-container {
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .ui.card.login-card {
//   width: 450px;
// }

// .login.button {
//   float: right;
// }

// .ui.form input[type=text],
// .ui.form input[type=password],
// .ui.form select {
//   margin-top: 10px;
// }
// */