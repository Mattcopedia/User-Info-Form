// we will use this page to house the user context provide a component and also a hook to acess current user session

import React, { useEffect, useState, useContext } from 'react';
import firebase from 'firebase';

export const UserContext = React.createContext();

export const UserProvider = (props) => {
    const[session, setSession] = useState({user: null, loading: true});

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
         setSession ({loading: false, user})

            // useeffect hook is to  listen to firebase authentification changes
        })
         return () => unsubscribe();
}, [])
  return ( 
      <UserContext.Provider value={session}>
          {!session.loading && props.children} 
      </UserContext.Provider>
  )
}

export const useSession = () => {
    const session = useContext(UserContext);
    return session; 
}