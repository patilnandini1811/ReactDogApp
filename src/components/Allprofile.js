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

  //=============================change====================================
  const handleFriendSelection = (event) => {
    const friendId = parseInt(event.target.value);
    const isChecked = event.target.checked;
    const friendToAdd = dogData.find(dog => dog.id === friendId);
    if (isChecked) {
      setSelectedFriends([ ...selectedFriends, friendToAdd ]);
    } else {
      const updatedFriends = selectedFriends.filter(friend => friend.id !== friendId);
      setSelectedFriends(updatedFriends);
    }
  };





  const getNameById = (id) => {
    const friend = dogData.find((dog) => dog.id === id);
    return friend ? friend.name : '';
  }




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
          {/* <h4>Friends:</h4> */}
          {selectedDog.friends && selectedDog.friends.length > 0 && (
            <>


              {selectedDog.friends.map(friendId => (
                <div key={friendId}>
                  <input
                    type="checkbox"
                    id={friendId}
                    name={getNameById(friendId)}
                    value={friendId}
                    onChange={handleFriendSelection}
                  />
                  <label htmlFor={friendId}>{getNameById(friendId)}</label>
                </div>
              ))}
            </>
          )}
          {/* <div>
            <input type="checkbox" id="presence" name="presence" />
            <label htmlFor="presence">Presence</label> */}
          {/* //</div> */}

          <div>
            <h4> Friends:</h4>
            {selectedFriends.map(friend => (
              <div key={friend.id}>
                {friend.name}
              </div>
            ))}
          </div>
        </div>

      )}
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

