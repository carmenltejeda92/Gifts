import React from 'react'

function Show(props) {
  return (
    <div>
        <h3>{props.gift.name}</h3> is <h3 style={{color: `${props.gift.color}`}}>{props.gift.color}</h3>
        <h4>{props.gift.NaughtyOrNice? `You will receive ${props.gift.name} since you were good` :
            `Better get your behavior together if you want ${props.gift.name}`}</h4> 
        
        <input style={{margin:"10px"}}type="submit" value="Back to Gift List" />
    </div>
  )
}

export default Show
