import React from 'react';
import { Link } from 'react-router-dom';

export default function Start(props) {
  const dogData = JSON.parse(localStorage.getItem('dogData')) || [];

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 my-3">
            <h3>Dog's Kind Daycare Center</h3>


            <ul>
              {dogData.map(dog => (
                <li key={dog.id}>
                  <Link to={`/dog/${dog.id}`}>{dog.name}</Link> - {dog.age} years old
                </li>
              ))}
            </ul>
            <Link to="/addnewdog">Add New Dog</Link>
          </div>
        </div>
      </div>
      <div className="image-container">

        <img
          src={process.env.PUBLIC_URL + '/doggi.jpg'}
          alt="logo"
          className="logo" />


      </div>
    </>
  );
}
























// import React from 'react';
// import { Link } from 'react-router-dom';
// export default function Start(props) {
//   return (
//     <><div className="image-container">
//       <span className="heading">
//         <h1>Dog's Kind Daycare Center</h1>
//       </span>
//       <img
//         src={process.env.PUBLIC_URL + '/doggi.jpg'}
//         alt="logo"
//         className="logo" />
//       <h1>Dog List</h1>

//       <Link to="/addnewdog">Add a new dog</Link>

//     </div>

//     </>
//   )
// }

