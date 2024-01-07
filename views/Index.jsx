import React from 'react'

function Index(props) {
  return (
    <div>
        <ul>
        <h3>{" "}{props.gifts.map((gift, i)=>{
            return (<li key={i}>{" "}<a href={`/gifts/${gift.id}`}>{gift.name}</a>
              <div>
                <form action={`/gifts/${gift.id}?_method=DELETE`} method="POST">
                  <input type="submit" value="DELETE" />
                </form>
                <a href={`/gifts/${gift._id}/edit`}><button>Edit your gift</button></a>
              </div>
            </li>)
        })}</h3>
        </ul>
        <nav>
          <a href='/gifts/new'><h4>Add to Gift List</h4></a>
        </nav>
    </div>
  )
}

export default Index
