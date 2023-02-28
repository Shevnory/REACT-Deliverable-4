import React from 'react'
import "./styles/userlist.css"

const UserList = ({showModal, user, deleteUser, setupdatingUser, reset}) => {

    const handleClickEdit = () => {
        console.log("correct")
        showModal()
        setupdatingUser(user)
        reset(user)
    }

    return(
        <article className='user-card' key={user.id}>
            
            <h3> {user.first_name} {user.last_name} </h3>
            <hr />
            <li>
                <span> Email </span>{user.email}
            </li>
            <li>
                <span> Birthday </span>  <i className='bx bx-gift' ></i>  {user.birthday}
            </li>

            <footer>
                <button className='btn-delete' onClick={() => deleteUser(user.id)} >
                    <i className="bx bx-trash"></i>
                </button>
                <button className='btn-edit' onClick={handleClickEdit} >
                    <i className='bx bxs-pencil'></i>
                </button>
            </footer>
        </article>
        )
}

export default UserList