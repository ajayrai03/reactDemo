import React from 'react'
const val = "Occupy Mars";

const User = (props) => {
  return (
    <div>{props.data(val)}
    <p>In Child</p>
    </div>
  )
}

export default User