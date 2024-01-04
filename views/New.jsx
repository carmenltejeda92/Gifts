import React from 'react'

function New() {
  return (
    <div>
      <h1>Put a gift on your wishlist</h1>
      <form action="/gifts" method="POST">
        Toy Name: <input style={{margin:"10px"}}type="text" name="name" /><br/>
        Toy Color: <input style={{margin:"10px"}}type="text" name="color" /><br/>
        Have you been nice this year? <input style={{margin:"10px"}} type="checkbox"
            name="NaughtyOrNice" /><br/>
        
        
        
        
        {/* <label for="naughty"  style={{margin:"10px"}} />
        <select name="NaughtyOrNice" id="naughty">
            <option value="nice">Nice</option>
            <option value="naughty">Naughty</option>
        </select><br/> */}
        
        <input style={{margin:"10px"}}type="submit" value="Add gift" />
      </form>
    </div>
  )
}

export default New
