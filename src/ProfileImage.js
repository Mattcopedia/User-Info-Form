import React, { useRef, useState, useEffect } from 'react';
import { uploadImage, getDownloadUrl } from './firebase/user';

export const ProfileImage = ({ id }) => {
  const fileInput = useRef(null);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    getDownloadUrl(id).then((url) => !!url && setImageUrl(url));
  }, [id]);

  const fileChange = async (files) => {
    const ref = await uploadImage(id, files[0]);
    const downloadUrl = await ref.getDownloadURL();
    setImageUrl(downloadUrl);
  };

  return (
    <div className="four wide column profile-image">
      <img
        className="ui image"
        src={imageUrl || '/profile-placeholder.png'}
        alt="profile"
      />
      <input
        className="file-input"
        type="file"
        accept=".png,.jpg"
        ref={fileInput}
        onChange={(e) => fileChange(e.target.files)}
      />
      <button
        className="ui grey button upload-button"
        onClick={() => fileInput.current.click()}
      >
        Upload Photo
      </button>
    </div>
  );
}; 

// import React, { useEffect, useRef, useState } from 'react';
// import { getDownloadURL, uploadImage } from './firebase/user';


// //this component will take in the userid as a prop and help render the profile image form
// // we will use useref to trigger an upload event on the input this useref allows us to have access to the dom
// export const ProfileImage = ({id}) => {  
//     const fileInput = useRef(null);
//     const [imageUrl, setImageUrl] = useState('');
// // we use this effect to retrieve the url when the component mounts
//     useEffect(() => {
//         getDownloadURL(id)
//           .then(url => !!url && setImageUrl(url))
//     }, [id]); 

//     const fileChange = async (files) =>  { 
//         const ref = await uploadImage(id, files[0]);
//         const downloadUrl = await ref.getDownloadURL();
//         setImageUrl(downloadUrl); 
//     };

//     return (
//         <div className='four wide column profile-image'>
//         <img className='ui image' 
//         src={imageUrl || '/profile-placeholder.png'} 
//         alt='profile' />
//         <input 
//         className ="file-input" 
//         type="file" 
//         accept=".png,.jpg"  
//         ref={fileInput} 
//         onChange={(e) => fileChange(e.target.files)} 
//         />
//         {/* This is the input form for the upload image that accepts only png and jpeg files */}
         
//          {/* we will use onclick event to trigger user upload image */}
//          <button className ='ui grey button upload-button' 
//          onClick={() => fileInput.current.click()}  
//          >
//              Upload Photo 
//              </button>
//         </div> 
//     );
// } 