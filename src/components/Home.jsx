import React from 'react'

import { getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  console.log(getAuth())
  const navigate = useNavigate();

  const auth = getAuth();

  const logOut = async () =>{
await auth.signOut();
navigate('/')
  }

  const crud = async () =>{
    // await auth.signOut();
    navigate('/crud')
      }


  return (
    <>
    <div className="container text-center">
    <h1>Welcome To HomePage...</h1>

    <div className='my-5'>
      <h1>{auth.currentUser.displayName}</h1>
      <h2>{auth.currentUser.email}</h2>
      <img src={auth.currentUser.photoURL} alt="" />
    </div>

    <button className="btn btn-warning ml-4" onClick={logOut}>LogOut</button>

    <button className="btn btn-warning " onClick={crud}>CRUD</button>
    
    
    </div>
    </>
  )
}

export default Home