import React from 'react';
// import React from 'react';
import { Link } from 'react-router-dom';
// import Addnewdog from './components/AddNewDog';
// import DogList from './DogList';
export default function Start(props) {
  // const [ dogs, setDogs ] = useState(JSON.parse(localStorage.getItem('dogData')) || []);
  // const [ mystyle, setmyStyle ] = useState({
  //   color: 'black'
  // })

  // const [ btntext, setBtnText ] = useState("In/out")


  // const toggleStyle = () => {
  //   if (btntext === "In") {
  //     setmyStyle({
  //       color: 'red'

  //     })

  //     setBtnText("out")
  //   } else {
  //     setmyStyle({
  //       color: 'green'
  //     })
  //     setBtnText("In")
  //   }

  // }

  // const [ mystyle1, setmyStyle1 ] = useState({
  //   color: 'black'
  // })

  // const [ btntext1, setBtnText1 ] = useState("In/out")


  // const toggleStyle1 = () => {
  //   if (btntext1 === "In") {
  //     setmyStyle1({
  //       color: 'red'

  //     })

  //     setBtnText1('out')
  //   } else {
  //     setmyStyle1({
  //       color: 'green'
  //     })
  //     setBtnText1('In')
  //   }

  // }

  // const [ mystyle2, setmyStyle2 ] = useState({
  //   color: 'black'
  // })

  // const [ btntext2, setBtnText2 ] = useState("In/out")


  // const toggleStyle2 = () => {
  //   if (btntext2 === 'In') {
  //     setmyStyle2({
  //       color: 'red'

  //     })

  //     setBtnText2('out')
  //   } else {
  //     setmyStyle2({
  //       color: 'green'
  //     })
  //     setBtnText2('In')
  //   }

  // }

  // const [ mystyle3, setmyStyle3 ] = useState({
  //   color: 'black'
  // })

  // const [ btntext3, setBtnText3 ] = useState("In/out")


  // const toggleStyle3 = () => {
  //   if (btntext3 === 'In') {
  //     setmyStyle3({
  //       color: 'red'

  //     })

  //     setBtnText3('out')
  //   } else {
  //     setmyStyle3({
  //       color: 'green'
  //     })
  //     setBtnText3('In')
  //   }

  // }
  // const [ mystyle4, setmyStyle4 ] = useState({
  //   color: 'black'
  // })

  // const [ btntext4, setBtnText4 ] = useState("In/out")


  // const toggleStyle4 = () => {
  //   if (btntext4 === 'In') {
  //     setmyStyle4({
  //       color: 'red'

  //     })

  //     setBtnText4('out')
  //   } else {
  //     setmyStyle4({
  //       color: 'green'
  //     })
  //     setBtnText4('In')
  //   }

  // }

  return (
    <>


      <div className="image-container">
        <span className="heading">
          <h1>Dog's Kind Daycare Center</h1>
        </span>
        <img
          src={process.env.PUBLIC_URL + '/doggi.jpg'}
          alt="logo"
          className="logo" />
        <h1>Dog List</h1>
        {/* <DogList dogs={dogs} /> */}
        <Link to="/addnewdog">Add a new dog</Link>
        {/* <p>
          <Link to="/addnewdog">Add New Dog</Link>
        </p> */}
      </div>
      {/* <p>
        <Link to="/addnewdog">Add New Dog</Link>
      </p> */}
      {/* <div className="goto-new-dog"> */}

      {/* </div> */}
      {/* <div className="list-group ">
        <div className="list-switch " > */}

      {/* <Link to="/profile" className="list-group-item list-group-item-action " style={mystyle}></Link>
          <button type="button" className="btn btn-light" onClick={toggleStyle}>{btntext}</button>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label> */}

      {/* <div className="list-switch"> */}
      {/* <a href="/" className="list-group-item list-group-item-action" style={mystyle1}>@Coco
          </a>
          <button type="button" className="btn btn-light" onClick={toggleStyle1}>{btntext1}</button>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label> */}
      {/* </div> */}

      {/* <div className="list-switch"> */}
      {/* <a href="/" className="list-group-item list-group-item-action" style={mystyle2}>@Toby </a>
          <button type="button" className="btn btn-light" onClick={toggleStyle2}>{btntext2}</button>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label> */}
      {/* </div> */}
      {/* <div className="list-switch"> */}
      {/* <a href="/" className="list-group-item list-group-item-action" style={mystyle3}>@Nella </a>
          <button type="button" className="btn btn-light" onClick={toggleStyle3}>{btntext3}</button>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label> */}
      {/* </div> */}

      {/* <div className="list-switch"> */}
      {/* <a href="/" className="list-group-item list-group-item-action" style={mystyle4}>@Sheru </a>
          <button type="button" className="btn btn-light" onClick={toggleStyle4} >{btntext4}</button>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label> */}

      {/* </div> */}
      {/* </div>
        <p>
          <Link to="/addnewdog">Add New Dog</Link>
        </p>
      </div> */}
      {/* <DogList /> */}
    </>
  )
}

