import React, { useContext } from 'react'
import Button from '../../Component/button/Button'
import { Logout } from '../../Utility/firebase'
import { UserContext } from '../../Context/User Context/UserContext'
import { useNavigate } from 'react-router-dom'
import Aside from '../../Component/AsideNavigation/Aside'
import Footer from '../../Component/Footer/Footer'
const Admin = () => {
    
    const redict = useNavigate();
    const {currentUser} = useContext(UserContext)
    const handleLogout = async () =>{
        await Logout()
        redict('/login');
    }
  return (
    <div className='flex w-full h-full bg-[#E2E8F0]'>
      <Aside></Aside>
      <main>
      </main>
    <div>
        <h1>Welcome</h1>
        <h3>{currentUser && currentUser.email}</h3>
        <Button clicked={handleLogout} >Log out</Button>
    </div>
    <div>

    </div>
    </div>
  )
}

export default Admin
