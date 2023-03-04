import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';




export default function EditDog(props) {
  const [ dogImage, setDogImage ] = useState('');
  const { id } = useParams();
  const dogData = JSON.parse(localStorage.getItem('dogData')) || [];
  const selectedDog = dogData.find(dog => dog.id === parseInt(id));
  const [ name, setName ] = useState(selectedDog.name);
  const [ nickname, setNickname ] = useState(selectedDog.nickname);
  const [ age, setAge ] = useState(selectedDog.age);
  const [ description, setDescription ] = useState(selectedDog.description);
  const [ selectedFriend, setSelectedFriend ] = useState(selectedDog.selectedFriend);

  const formRef = useRef(null);
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        setDogImage(data.message);
      });
  }, []);

  const handleUpdateDog = () => {
    const updatedDogData = dogData.map(dog => {
      if (dog.id === parseInt(id)) {
        return {
          id: dog.id,
          name: name,
          nickname: nickname,
          age: age,
          description: description,
          selectedFriend: selectedFriend
        };
      } else {
        return dog;
      }
    });
    localStorage.setItem('dogData', JSON.stringify(updatedDogData));
    formRef.current.reset();

  };


  return (
    <>
      <div className="container1">
        <div className="row">
          <div className="col-md-12 my-3">
            <div className='goback1'> <Link to="/">Go Back to Home</Link></div>
            <h3>Edit Dog Profile</h3>
            <form className="form1" ref={formRef} onSubmit={handleUpdateDog} >
              <div className="col-md-6 " style={{ width: "50%" }}>
                <img src={dogImage} className="rounded mx-auto d-bloc" alt="dogimage" /></div>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="nickname">Nickname:</label>
                <input
                  type="text"
                  className="form-control"
                  id="nickname"
                  value={nickname}
                  onChange={(event) => setNickname(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">Age:</label>
                <input
                  type="text"
                  className="form-control"
                  id="age"
                  value={age}
                  onChange={(event) => setAge(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Bio:</label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="3"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="selectedFriend">Friends:</label>
                <input
                  type="text"
                  className="form-control"
                  id="selectedFriend"
                  value={selectedFriend}
                  onChange={(event) => setSelectedFriend(event.target.value)}
                />
              </div>
            </form>
            <button className="btn btn-primary" onClick={handleUpdateDog}>Update</button>
            <Link to={`/dog/${id}`} className="btn btn-primary ml-3">Cancel</Link>
          </div>
        </div>
      </div>
    </>
  );
}





























// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
// export default function EditDog(props) {
//   const [ dogImage, setDogImage ] = useState('');
//   const [ dog, setDog ] = useState({});
//   const [ selectedFriends, setSelectedFriends ] = useState([]);
//   const [ allDogs, setAllDogs ] = useState([]);

//   const formRef = useRef();
//   const { id } = useParams();
//   const history = useHistory();

//   useEffect(() => {
//     fetch('https://dog.ceo/api/breeds/image/random')
//       .then(response => response.json())
//       .then(data => {
//         setDogImage(data.message);
//       });
//   }, []);

//   useEffect(() => {
//     const existingData = JSON.parse(localStorage.getItem('dogData')) || [];
//     const selectedDog = existingData.find(dog => dog.id === parseInt(id));

//     if (selectedDog) {
//       setDog(selectedDog);
//       setSelectedFriends(selectedDog.selectedFriends);
//       setAllDogs(existingData.filter(dog => dog.id !== selectedDog.id));
//     }
//   }, [ id ]);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const name = event.target.elements.name.value;
//     const nickname = event.target.elements.nickname.value;
//     const age = event.target.elements.age.value;
//     const description = event.target.elements.description.value;
//     const updatedSelectedFriends = selectedFriends.filter(friend => allDogs.some(dog => dog.name === friend));

//     const updatedDog = {
//       ...dog,
//       name,
//       nickname,
//       age,
//       description,
//       selectedFriends: updatedSelectedFriends
//     };

//     const updatedData = JSON.parse(localStorage.getItem('dogData')).map(dog => {
//       if (dog.id === updatedDog.id) {
//         return updatedDog;
//       } else {
//         const updatedFriendList = dog.selectedFriends.filter(friend => friend !== updatedDog.name);
//         return {
//           ...dog,
//           selectedFriends: updatedFriendList
//         };
//       }
//     });

//     localStorage.setItem('dogData', JSON.stringify(updatedData));
//     history.push('/');
//   };

//   return (
//     <>
//       <div className="container2">
//         <div className='goback'> <Link to="/">Go Back to Home</Link></div>
//         <form className="form1" onSubmit={handleSubmit} ref={formRef}>
//           <div className="col-md-6 " style={{ width: "50%" }}>
//             <img src={dog.image} className="rounded mx-auto d-bloc" alt="dogimage" /></div>
//           Name:
//           <input type="text" name="name" placeholder='Name...' defaultValue={dog.name} />
//           Nickname:
//           <input type="text" name="nickname" placeholder='Nickname....' defaultValue={dog.nickname} />
//           Age:
//           <input type="number" name="age" placeholder='Age....' defaultValue={dog.age} />
//           <div className="col-md-6" style={{ width: "30%" }}>
//             <label htmlFor="exampleFormControlTextarea1" className="form-label ">Bio:  </label>
//             <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" name="description" defaultValue={dog.description}></textarea></div>
//           Friends:
//           <select value={selectedFriends} onChange={(event) => setSelectedFriends(Array.from(event.target.selectedOptions, option => option.value))} multiple>
//             {allDogs.map((dog) => (
//               <option key={dog.id} value={dog.name}>{dog.name}</option>
//             ))}
//           </select>
//           <br />
//           <br />

//           <input className="btn btn-success my-9" type="submit" value="Submit" />
//         </form>
//       </div>
//     </>
//   );
// }
