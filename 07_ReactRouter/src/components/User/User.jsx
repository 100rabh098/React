import React from 'react'

import { useParams} from 'react-router-dom'     // to use user id 
function User() {
    const {userid}= useParams();        //same userid name as in main file must be used
  return (
    <div>User: {userid}
    </div>
  )
}

export default User