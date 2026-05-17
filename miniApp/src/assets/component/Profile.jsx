import React, { useContext } from 'react'
import MyContext from '../context/context';
function Profile() {
  const { user } = useContext(MyContext)
    if(!user) return null;
    return (
    <div>
    Wellcome {user.username}  
    </div>
  )
}
export default Profile
