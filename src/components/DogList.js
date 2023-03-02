import React from 'react'
import { Link } from 'react-router-dom'

export default function DogList(props) {
  const { dogs } = props;

  return (
    <ul>
      {dogs.map((dog) => (
        <li key={dog.id}>
          <Link to={`/dogs/${dog.id}`}>{dog.name}</Link>
        </li>
      ))}
    </ul>
  )
}
