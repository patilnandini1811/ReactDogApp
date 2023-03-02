import React from 'react'

export default function Allprofile() {
  return (
    <div>
      Hello I am here.
    </div>
  )
}

// import React, { useState, useEffect } from 'react';

// const ProfilePage = ({ dog }) => {
//   const [ image, setImage ] = useState('');

//   useEffect(() => {
//     fetch('https://dog.ceo/api/breeds/image/random')
//       .then(response => response.json())
//       .then(data => setImage(data.message))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div>
//       <img src={image} alt="Dog" />
//       <h2>{dog.name}</h2>
//       <p>{dog.nickname}</p>
//       <p>{dog.age}</p>
//       <p>{dog.description}</p>
//       <ul>
//         {dog.friends.map((friend, index) => (
//           <li key={index}>{friend}</li>
//         ))}
//       </ul>
//       <label>
//         <input type="checkbox" checked={dog.present} />
//         Present
//       </label>
//     </div>
//   );
// };

// export default ProfilePage;

