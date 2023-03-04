// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// export default function Allprofile(props) {
//   const dogId = props.match.params.dogId;
//   const [ dogImage, setDogImage ] = useState('');
//   const [ dogData, setDogData ] = useState({});
//   const [ friends, setFriends ] = useState([]);
//   const [ presence, setPresence ] = useState(false);

//   useEffect(() => {
//     fetch('https://dog.ceo/api/breeds/image/random')
//       .then(response => response.json())
//       .then(data => {
//         setDogImage(data.message);
//       });
//   }, []);

//   useEffect(() => {
//     const { match: { params: { id } } } = props;
//     const dogData = JSON.parse(localStorage.getItem('dogData')) || [];
//     const selectedDog = dogData.find((dog) => dog.id === Number(id));
//     setDogData(selectedDog || {});
//     setFriends(selectedDog?.friends || []);
//     setPresence(selectedDog?.presence || false);
//   }, [ props ]);

//   const handlePresenceChange = (event) => {
//     setPresence(event.target.checked);
//     const updatedDogData = { ...dogData, presence: event.target.checked };
//     const existingData = JSON.parse(localStorage.getItem('dogData')) || [];
//     const updatedData = existingData.map((dog) => (dog.id === updatedDogData.id ? updatedDogData : dog));
//     localStorage.setItem('dogData', JSON.stringify(updatedData));
//   };

//   return (
//     <div>
//       <Link to="/">Back to Home</Link>
//       <div>
//         <div className="col-md-6 " style={{ width: "50%" }}>
//           <img src={dogImage} className="rounded mx-auto d-bloc" alt="dogimage" /></div>
//         <Link to={`/edit/${dogData.id}`}>Edit</Link>
//         <h1>{dogData.name}</h1>
//         <h3>{dogData.nickname}</h3>
//         <p>{dogData.age} years old</p>
//         <p>{dogData.description}</p>
//         <div>
//           <h4>Friends:</h4>
//           <ul>
//             {friends.map((friend) => (
//               <li key={friend.id}>{friend.name}</li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <label>
//             Present{' '}
//             <input type="checkbox" checked={presence} onChange={handlePresenceChange} />
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// }







































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


// import React from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';


// export default function Allprofile(props) {
//   // const { id } = props.match.params;
//   const { id } = useParams();
//   const dogData = JSON.parse(localStorage.getItem('dogData')) || [];
//   const selectedDog = dogData.find(dog => dog.id === parseInt(id));
//   const [ dogImage, setDogImage ] = useState('');
//   const [ selectedFriends, setSelectedFriends ] = useState([]);
//   const handleFriendSelection = (event) => {
//     const friendName = event.target.value;
//     if (event.target.checked) {
//       // Add the selected friend to the array
//       setSelectedFriends([ ...selectedFriends, friendName ]);
//     } else {
//       // Remove the unselected friend from the array
//       setSelectedFriends(selectedFriends.filter(friend => friend !== friendName));
//     }
//   };


//   useEffect(() => {
//     fetch('https://dog.ceo/api/breeds/image/random')
//       .then(response => response.json())
//       .then(data => {
//         setDogImage(data.message);
//       });
//   }, []);
//   return (
//     <>

//       <div className="profile-container">
//         <div className='image-container'>
//           <img src={dogImage} className="profile-image" alt="dog-profile" />
//           <h5> <Link to={`/editdog/${id}`}>Edit</Link></h5>
//           <div className='goback'>
//             <Link to="/">Go Back to Home</Link>
//           </div>
//         </div>

//         <h4>Name: {selectedDog.name}</h4>
//         <h4>Nickname: {selectedDog.nickname}</h4>
//         <h4>Age: {selectedDog.age}</h4>
//         <h4>Bio: {selectedDog.description}</h4>

//         <h4>Friends:</h4>
//         {selectedDog.friends.map(friend => (
//           <div key={friend}>
//             <input
//               type="checkbox"
//               id={friend}
//               name={friend}
//               value={friend}
//               onChange={handleFriendSelection}
//             />
//             <label htmlFor={friend}>{friend}</label>
//           </div>
//         ))}


//         {selectedFriends.length > 0 && (
//           <>
//             <h4>Selected Friends:</h4>
//             {selectedFriends.map(friend => (
//               <div key={friend}>
//                 <Link to={`/friend/${friend}`}>{friend}</Link>
//               </div>
//             ))}
//           </>
//         )},

//         <div>
//           <input type="checkbox" id="presence" name="presence" />
//           <label htmlFor="presence">Presence</label>
//         </div>
//       </div>

//     </>
//   )
// }
//=======================================================================================
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function Allprofile(props) {
  // const { id } = props.match.params;
  const { id } = useParams();
  const dogData = JSON.parse(localStorage.getItem('dogData')) || [];
  const selectedDog = dogData.find(dog => dog.id === parseInt(id));
  selectedDog.friends = selectedDog.friends || [];
  const [ dogImage, setDogImage ] = useState('');
  const [ selectedFriends, setSelectedFriends ] = useState([]);


  const handleFriendSelection = (event) => {
    const friendName = event.target.value;

    if (event.target.checked) {
      // Add the selected friend to the array
      const friendToAdd = selectedDog.friends.find(friend => friend.name === friendName);
      setSelectedFriends([ ...selectedFriends, friendToAdd ]);

    } else {
      // Remove the unselected friend from the array
      setSelectedFriends(selectedFriends.filter(friend => friend !== friendName));
    }
  };


  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        setDogImage(data.message);
      });
  }, []);

  return (
    <>
      {selectedDog && (
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
          <h4>Bio: {selectedDog.description}</h4>
          <h4>Friends:</h4>
          {selectedDog.friends && selectedDog.friends.length > 0 && (
            <>
              <h4>Friends:</h4>
              {selectedDog.friends.map(friend => (
                <div key={friend}>
                  <input
                    type="checkbox"
                    id={friend}
                    name={friend}
                    value={friend}
                    onChange={handleFriendSelection}
                  />
                  <label htmlFor={friend}>{friend}</label>
                </div>
              ))}
            </>
          )}

          {selectedFriends.length > 0 && (
            <>
              <h4>Selected Friends:</h4>
              {selectedFriends.map(friend => (
                <div key={friend.id}>
                  <Link to={`/friend/${friend.name}`}>{friend.name}</Link>
                </div>
              ))}
            </>
          )}

          <div>
            <input type="checkbox" id="presence" name="presence" />
            <label htmlFor="presence">Presence</label>
          </div>
        </div>
      )}
    </>
  )
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

