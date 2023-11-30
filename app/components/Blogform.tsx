"use client"

import React, { useState } from 'react'


function Blogform(props) {

    const [text, setText] = useState("Enter the text here");



  return (
    <div>
        <h1 className='my-2'>{props.heading} </h1>
        <div className="container h-screen w-screen ml-3 my-2">
        <textarea className="h-full w-full text-black" value={text}></textarea> 
        <button className='mt-4'> Post </button>       
        </div>
    </div>    

  )
}

export default Blogform