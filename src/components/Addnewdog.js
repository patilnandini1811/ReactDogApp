import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// let counter = 0;

export default function Addnewdog(props) {
  const [ dogImage, setDogImage ] = useState('');
  const [ dogs, setDogs ] = useState([]);
  const dogData = JSON.parse(localStorage.getItem('dogData')) || [];


  // const MultiSelectFriendsDropdown = () => {
  const [ selectedFriends, setSelectedFriends ] = useState([]);

  const handleChange = (event) => {
    console.log("Inside MultiSelectFriendsDropdown.handleChange ")
    const options = event.target.options;
    const selectedValues = [];
    for (let i = 0; i < options.length; i++) {
      if (options[ i ].selected) {
        selectedValues.push(options[ i ].value);
      }
    }
    setSelectedFriends(selectedValues);
  };
  // };
  const formRef = useRef();

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        setDogImage(data.message);
      });
  }, []);


  useEffect(() => {
    //dogData = JSON.parse(localStorage.getItem('dogData')) || [];
    setDogs(dogData);
  }, []);


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("selectedFriends............");
    console.log(selectedFriends)
    const name = event.target.elements.name.value;
    const nickname = event.target.elements.nickname.value;
    const age = event.target.elements.age.value;
    const description = event.target.elements.description.value;
    const friends = selectedFriends;
    const existingData = JSON.parse(localStorage.getItem('dogData')) || [];
    const lastId = existingData.length ? existingData[ existingData.length - 1 ].id : -1;
    //dogData.friends.push(selectedValues);

    const dogData = {
      // id: counter,
      id: lastId + 1,
      name,
      nickname,
      age,
      description,
      friends
    };

    // counter++;
    console.log("dogData")
    console.log(dogData)
    const updatedData = existingData.length ? [ ...existingData, dogData ] : [ dogData ];

    console.log("updatedData")
    console.log(updatedData)

    localStorage.setItem('dogData', JSON.stringify(updatedData));
    setDogs(updatedData);
    formRef.current.reset();
  };
  return (
    <>
      <div className="container2">
        <div className='goback'> <Link to="/">Go Back to Home</Link></div>
        <form className="form1" onSubmit={handleSubmit} ref={formRef}>
          <div className="col-md-6 " style={{ width: "50%" }}>
            <img src={dogImage} className="rounded mx-auto d-bloc" alt="dogimage" /></div>
          Name:
          <input type="text" name="name" placeholder='Name...' />
          Nickname:
          <input type="text" name="nickname" placeholder='Nickname....' />
          Age:
          <input type="number" name="age" placeholder='Age....' />
          <div className="col-md-6" style={{ width: "30%" }}>
            <label htmlFor="exampleFormControlTextarea1" className="form-label ">Bio:  </label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" name="description"></textarea></div>
          Friends:
          <select multiple name="friends" value={selectedFriends} onChange={handleChange}>
            {dogs.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>



          {/* <select value={selectedFriends} onChange={(event) => setSelectedFriends(Array.from(event.target.selectedOptions, option => option.value))} multiple> */}
          {/* <select value={selectedFriend} onChange={(event) => setselectedFriend(event.target.value)}>
              <option value="">Select friend</option>
              {dogs.map((dog) => (
                <option key={dog.id} value={dog.id}>{dog.name}</option>

              ))}
            </select>
            <br />
            <br /> */}


          <input className="btn btn-success my-9" type="submit" value="Submit" onSubmit={handleSubmit}></input>
        </form>
      </div>
    </>
  );


}



























































































































