import React, { use, useState } from 'react'
import { FaStar } from "react-icons/fa";
import './Like.css'

const Like = () => {
    const [rating,setRating] = useState(0)
    const [hover,setHover] = useState(0)
  return (
    <div className='App'>
        {
            [...Array(5)].map((star,index) => {
                const currentRating = index + 1
                return(
                    <label>
                        <input
                            type='radio'    
                            name='rating'
                            value={currentRating}
                            onClick={() => setRating(currentRating)}
                        />
                            <FaStar className='star' size={20}
                                color={currentRating <= (hover || rating) ? "#ffc107" : "e4e5e9"}
                                onMouseEnter={()=>setHover(currentRating)}
                                onMouseLeave={()=>setHover(0)}
                            />
                    </label>
                )
            })
        }
    </div>
  )
}

export default Like