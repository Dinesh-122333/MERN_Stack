import React from 'react'

export default function Pagination({gotonextPage, gotoprevPage}) {
  return (
    <div>
        {/* this is for the  when the previous or next page button needed */}
        {gotoprevPage && <button onClick={gotoprevPage}>Previous</button>}
        {gotonextPage && <button onClick={gotonextPage}>Next</button>}
        
        
    </div>
    
    
  )
}
