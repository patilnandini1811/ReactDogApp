import React from 'react';
import { Link } from 'react-router-dom';

export default function Allprofile(props) {
  const { id } = props.match.params;
  const dogData = JSON.parse(localStorage.getItem('dogData')) || [];
  const selectedDog = dogData.find(dog => dog.id === parseInt(id));

  return (
    <>
      <div className='goback'>
        <Link to="/">Go Back to Home</Link>
      </div>
      <div className="profile-container">
        <img src='https://dog.ceo/api/breeds/image/random' alt="dog-profile" />
        <h2>Edit <Link to={`/editdog/${id}`}>Edit</Link></h2>
        <h2>Name: {selectedDog.name}</h2>
        <h3>Nickname: {selectedDog.nickname}</h3>
        <h3>Age: {selectedDog.age}</h3>
        <h3>Brief Description: {selectedDog.description}</h3>
        <h3>Friends:</h3>
        <ul>
          <li>Friend 1</li>
          <li>Friend 2</li>
        </ul>
        <div>
          <input type="checkbox" id="presence" name="presence" />
          <label htmlFor="presence">Presence</label>
        </div>
        <div className='goback'>
          <Link to="/">Go Back to Home</Link>
        </div>
      </div>
    </>
  );
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

