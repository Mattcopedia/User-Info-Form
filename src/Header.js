import React from 'react';
import { logout } from './firebase/auth';
import { useHistory } from 'react-router-dom';
import { useSession } from './firebase/UserProvider';


// usehistory hook gives us access to the history instance that we can use to navigate


function Header() {
  const history = useHistory();
  const { user } = useSession();
  // we grab a hold on the user using the use session using the hook we previously defined in react hooks
  const logoutUser = async () => {
    await logout ();
    history.push('/login');  
// this is so that when the user logouts out he can be redirected to the sign up page again
  }  
  return (
    <header>
      <h2>The Grid</h2>
       {!! user &&
       <button className='ui secondary button logout' 
       onClick={logoutUser}> LOGOUT 
       </button>} 
    {/* we only render the logout button if the user has signed up i.e there is a user session currenlty logged in  */}
     
    </header>
  ) 
} 
 
export default Header; 