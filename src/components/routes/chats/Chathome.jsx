import React from 'react'
import Sidebar from './Sidebar'
import Chat from './Chat'
import { useContext } from 'react';
import { LogInContext } from '../../../Context/LogInContext/Login';

const Chathome = () => {
   const { user, isAuthenticated, handleSignOut,handleSignIn } = useContext(LogInContext);
  return (
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>
        
      </div>
    </div>
  )
}

export default Chathome