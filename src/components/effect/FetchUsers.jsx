import React from 'react'
import { useState, useEffect } from 'react'
import {getUsersApi,getUserIDApi,getUserPosts}   from '../helpers'


const FetchUsers = () => 
{
    const [users, setUsers] = useState([])
    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])

    const allUsers = () =>
    {
        getUsersApi()
            .then(response=>setUsers(response))
    }
    const userID = () =>
    {
        getUserIDApi()
            .then(response=>setUser(response))
        
    }

    const allUserPosts = () =>
    {
      getUserPosts(user.id)
            .then(response=>setPosts(response))
    }



    useEffect(() => 
    {
        allUsers()
        userID()

    }, [])

    useEffect(() => 
    {
      if(user?.id)
      {
        allUserPosts()
      }
    }, [user])
  

  return (
    <>
      <div className="container mt-4">
        <h1 className="mb-4 text-2xl">Fetch of API's 🐱‍👤🐺</h1>
        <hr />
        <div className="text-center">
        </div>
        <div>
          <h3 className='m-4 text-center'>Datos de la API:</h3>
          <hr/>
          <ul className='list-group'>
                {
                  users.map((user,index)=>(
                       <li key={user.id} className="list-group-item">{index+1} - {user.name}</li>
                    ))
                }
           </ul>
          <hr/>
          <div className='text-center mt-3'>
          <button className="btn btn-success ms-2 mb-4" onClick={userID} >Consultar API Usuario</button>
          </div>
          <div className='d-flex justify-content-between'>
              <div>
                <p className='fw-bold'>Datos del usuario</p>
                <p>Nombre: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Website: <a href={user.website} target="_blank">{user.website}</a></p>
              </div>
              <div>
                <p className='fw-bold'>Post del usuario - {user.name}</p>
                <div>
                  {
                    posts.map((post,index)=>(
                      <p key={post.id}>{index+1} - {post.title}</p>
                      ))
                    }
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FetchUsers