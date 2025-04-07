import React, { useState } from 'react'
import RatingWidget from './RatingWidget'

function ProductCard({product}) {
    const [avgRating,setAvgRating] = useState(product.avgRating)
    const [totalRatings,setTotalRatings] = useState(product.totalRatings)

    const onRatingSumbit = (newRating)=>{
    const newtot = totalRatings+1
    const newAvg = (avgRating*totalRatings+newRating)/newtot

    setTotalRatings(newtot)
    setAvgRating(newAvg)
    console.log(newAvg)
  }
  
    return (
    <div>
        <h1>{product.name}</h1>
        <h3>{product.description}</h3>
        <img src={product.image} alt="" />
        <h5>{product.totalRatings}</h5>
        {<RatingWidget  onRatingSumbit={onRatingSumbit}/>}

    </div>
  )
}

export default ProductCard