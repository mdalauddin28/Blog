import React from 'react';
import img from '../Assets/gif-1.gif'

function Conatiner() {
  return (
    <>
    <div className="container">
        <img src={img} alt="" />

        <input type="text" placeholder='Searching...' />
    </div>
    </>
  )
}

export default Conatiner