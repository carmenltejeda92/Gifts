import React from 'react'
import {useNavigate} from 'react-router-dom'
import './Show.css'


function Show({gift}) {
  // const navigate = useNavigate()
  
  return (
    <div>
        <h3>{gift.name}</h3> is <h3 style={{color: `${gift.color}`}}>{gift.color}</h3>
        <h4>{gift.NaughtyOrNice? `You will receive ${gift.name} since you were good` :
            `Better get your behavior together if you want ${gift.name}`}</h4> 
        
        <input type="submit" value="Back to Gift List" />
    </div>
  )
}

export default Show
