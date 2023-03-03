// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// export default function Allprofile() {
//   const [ selectedDogId, setSelectedDogId ] = useState(null);

//   // Retrieve the dog data from localStorage
//   const dogData = JSON.parse(localStorage.getItem('dogData')) || [];

//   // Filter the dog data based on the selected dog id
//   const selectedDog = dogData.find(dog => dog.id === selectedDogId);

//   return (
//     <>
//       <div className='goback'> <Link to="/">Go Back to Home</Link></div>
//       <div className='form-group'>
//         {/* <label htmlFor='dog-select'>Select a dog:</label> */}
//         <select className='form-control' id='dog-select' onChange={event => setSelectedDogId(parseInt(event.target.value))}>
//           <option value=''>Select a dog</option>
//           {dogData.map(dog => (
//             <option key={dog.id} value={dog.id}>{dog.name}</option>
//           ))}
//         </select>
//       </div>
//       {selectedDog && (
//         <div className='dog-profile'>
//           <h2>{selectedDog.name}</h2>
//           <p>Nickname: {selectedDog.nickname}</p>
//           <p>Age: {selectedDog.age}</p>
//           <p>Description: {selectedDog.description}</p>
//           <p>Friends:</p>
//           <ul>
//             {selectedDog.friends && selectedDog.friends.length > 0 ? (
//               selectedDog.friends.map(friend => (
//                 <li key={friend}>{friend}</li>
//               ))
//             ) : (
//               <li>None</li>
//             )}
//           </ul>
//           <div className='form-group'>
//             <div className='form-check'>
//               <input className='form-check-input' type='checkbox' value={selectedDog.presence} id='presence-checkbox' disabled />
//               <label className='form-check-label' htmlFor='presence-checkbox'>
//                 Present in the daycare center
//               </label>
//             </div>
//           </div>
//           {/* <Link to='/'>Back to Home</Link> */}
//         </div>
//       )}
//     </>
//   );
// }





















































import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function Allprofile(props) {
  // const { id } = props.match.params;
  const { id } = useParams();
  const dogData = JSON.parse(localStorage.getItem('dogData')) || [];
  const selectedDog = dogData.find(dog => dog.id === parseInt(id));
  const [ dogImage, setDogImage ] = useState('');
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        setDogImage(data.message);
      });
  }, []);
  return (
    <>

      <div className="profile-container">
        <div className='image-container'>
          <img src={dogImage} className="profile-image" alt="dog-profile" />
          <h5> <Link to={`/editdog/${id}`}>Edit</Link></h5>
          <div className='goback'>
            <Link to="/">Go Back to Home</Link>
          </div>
        </div>

        <h4>Name: {selectedDog.name}</h4>
        <h4>Nickname: {selectedDog.nickname}</h4>
        <h4>Age: {selectedDog.age}</h4>
        <h4>Brief Description: {selectedDog.description}</h4>
        <h4>Friends:</h4>
        <ul>

          <li>Friend 1</li>
          <li>Friend 2</li>
        </ul>
        <div>
          <input type="checkbox" id="presence" name="presence" />
          <label htmlFor="presence">Presence</label>
        </div>

      </div>
    </>
  );
}









































// // import React, { useState, useEffect } from 'react';

// // const ProfilePage = ({ dog }) => {
// //   const [ image, setImage ] = useState('');

// //   useEffect(() => {
// //     fetch('https://dog.ceo/api/breeds/image/random')
// //       .then(response => response.json())
// //       .then(data => setImage(data.message))
// //       .catch(error => console.log(error));
// //   }, []);

// //   return (
// //     <div>
// //       <img src={image} alt="Dog" />
// //       <h2>{dog.name}</h2>
// //       <p>{dog.nickname}</p>
// //       <p>{dog.age}</p>
// //       <p>{dog.description}</p>
// //       <ul>
// //         {dog.friends.map((friend, index) => (
// //           <li key={index}>{friend}</li>
// //         ))}
// //       </ul>
// //       <label>
// //         <input type="checkbox" checked={dog.present} />
// //         Present
// //       </label>
// //     </div>
// //   );
// // };

// // export default ProfilePage;

