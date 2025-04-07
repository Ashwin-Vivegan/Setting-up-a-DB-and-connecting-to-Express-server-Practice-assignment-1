import React, { useState } from 'react'

function RatingWidget({onRatingSumbit}) {
    const [rating,setRating] = useState()
    const handleSubmit = (e)=>{
        e.preventDefault()
        onRatingSumbit(Number(rating))
        setRating("")
    }
  return (
    <div>
    <form>
      <input
    type="Number"
      min = '1'
      max='5' 
      onChange={e=>setRating(e.target.value)} />
      <button onClick={handleSubmit} type='submit'>Rate It!</button>
    </form>
    </div>
  )
}

export default RatingWidget