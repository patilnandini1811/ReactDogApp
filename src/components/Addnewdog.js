import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

let counter = 0;

export default function Addnewdog(props) {
  const [ dogImage, setDogImage ] = useState('');
  const [ dogs, setDogs ] = useState([]);

  const formRef = useRef();

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        setDogImage(data.message);
      });
  }, []);

  //Here I added remove buttons:
  useEffect(() => {
    const dogData = JSON.parse(localStorage.getItem('dogData')) || [];
    setDogs(dogData);
  }, []);
  // Here is Handleremove function
  // const handleRemove = (id) => {
  //   const updatedData = dogs.filter(dog => dog.id !== id);
  //   localStorage.setItem('dogData', JSON.stringify(updatedData));
  //   setDogs(updatedData);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.elements.name.value;
    const nickname = event.target.elements.nickname.value;
    const age = event.target.elements.age.value;
    const description = event.target.elements.description.value;

    const dogData = {
      id: counter,
      name,
      nickname,
      age,
      description
    };

    counter++;

    const existingData = JSON.parse(localStorage.getItem('dogData')) || [];
    const updatedData = existingData.length ? [ ...existingData, dogData ] : [ dogData ];

    localStorage.setItem('dogData', JSON.stringify(updatedData));
    // setDogs(updatedData);
    formRef.current.reset();
  };

  return (
    <>
      <div className='goback'> <Link to="/">Go Back to Home</Link></div>
      <form className="form" onSubmit={handleSubmit} ref={formRef}>
        <div className="col-md-6" style={{ width: "50%" }}>
          <img src={dogImage} className="rounded mx-auto d-bloc" alt="dogimage" /></div>
        Name:
        <input type="text" name="name" placeholder='Name...' />
        Nickname:
        <input type="text" name="nickname" placeholder='Nickname....' />
        Age:
        <input type="number" name="age" placeholder='Age....' />
        <div className="col-md-6" style={{ width: "30%" }}>
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Brief description</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" name="description"></textarea></div>
        Friends:

        <p className='friends'>
          {dogs.map((dog) => (
            <span key={dog.id}>
              <Link to={`/profile/${dog.id}`}>{dog.name}</Link>
              {/* <button onClick={() => handleRemove(dog.id)}>Remove</button> */}
              <br />
            </span>
          ))}
        </p>
        <input className="btn btn-success" type="submit" value="Submit" onSubmit={handleSubmit}></input>
      </form>
    </>
  );
}





























































































































// import React, { useState, useEffect, useRef } from 'react'
// import { Link } from 'react-router-dom';
// let counter = 0;
// export default function Addnewdog(props) {

//   const [ dogImage, setDogImage ] = useState('');
//   const [ _, setDogs ] = useState([]);
//   const formRef = useRef();
//   useEffect(() => {
//     fetch('https://dog.ceo/api/breeds/image/random')
//       .then(response => response.json())
//       .then(data => {
//         setDogImage(data.message);
//       });
//   }, []);
//   const handleSubmit = (event) => {


//     event.preventDefault();

//     const name = event.target.elements.name.value;
//     const nickname = event.target.elements.nickname.value;
//     const age = event.target.elements.age.value;
//     const description = event.target.elements.description.value;


//     const dogData = {
//       id: counter,
//       name,
//       nickname,
//       age,
//       description
//     };
//     counter++;
//     const existingData = JSON.parse(localStorage.getItem('dogData')) || [];
//     const updatedData = existingData.length ? [ ...existingData, dogData ] : [ dogData ]; localStorage.setItem('dogData', JSON.stringify(updatedData));
//     setDogs((dogs) => [ ...dogs, dogData ]);
//     formRef.current.reset();
//   };
//   return (
//     <>
//       <div className='goback'> <Link to="/">Go Back to Home</Link></div>
//       <form className="form" onSubmit={handleSubmit} ref={formRef}>
//         <div className="col-md-6" style={{ width: "50%" }}>
//           <img src={dogImage} className="rounded mx-auto d-bloc" alt="dogimage" /></div>
//         Name:
//         <input type="text" name="name" placeholder='Name...' />
//         Nickname:
//         <input type="text" name="nickname" placeholder='Nickname....' />
//         Age:        <input type="number" name="age" placeholder='Age....' />
//         <div className="col-md-6" style={{ width: "30%" }}>
//           <label htmlFor="exampleFormControlTextarea1" className="form-label">Brief description</label>
//           <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" name="description"></textarea></div>
//         Friends:
//         <p className='friends'>
//           <Link to="/profile">@Rocky</Link><br />
//           <Link to="/profile">@Coco</Link></p>
//         <input className="btn btn-success" type="submit" value="Submit" onSubmit={handleSubmit}></input>
//       </form>







//     </>
//   )

// }


