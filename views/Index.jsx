import React from 'react'

function Index(props) {
  return (
    <div>
        <ul>
        <h3>{props.gifts.map((gift, i)=>{
            return <li><a href={`/gifts/${i}`}>{gift.name}</a></li>
        })}</h3>
        </ul>
        <nav>
          <a href='/gifts/new'><h4>Add to Gift List</h4></a>
        </nav>
    </div>
  )
}

export default Index
