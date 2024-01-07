import React from 'react'

function Edit({gift}) {
  return (
    <div>
        <form action={`/gifts/${gift._id}?_method=PUT`} method="POST">
            Name: <input type="text" name="name" defaultValue={gift.name} /><br />
            Color: <input type="text" name="color" defaultValue={gift.color} /><br />
            Naughty or Nice:
                {gift.NaughtyOrNice? <input type="checkbox" name="NaughtyOrNice" defaultChecked />:
                <input type="checkbox" name="NaughtyOrNice" />}<br/>
                <input type="submit" value="Submit my changes"/>
        </form>
    </div>
  )
}

export default Edit
