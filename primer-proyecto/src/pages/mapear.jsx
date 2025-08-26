import React from 'react'

const Mapear = () => {
  const user = ["rodney", "cecilia", "juan", "samuel"];

  return (
    <ul>
      {
        user.map((u, index) => (<li key={index}>{u}</li>))
      }
    </ul>
  )
}

export default Mapear


