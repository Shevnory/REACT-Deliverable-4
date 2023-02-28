import React from 'react'
import "./styles/modalform.css"

const ModalForm = ({isShowModal, showModal, handleSubmit, submit, register, updatingUser  }) =>{
  
  return (
    <section className={`modalForm ${isShowModal ? "showModalForm" : ""}`}>
      <form className="modalForm_form " onSubmit={handleSubmit(submit)}>
        <div className="modalForm_header">
            <h3 className='modalForm_title' >{updatingUser ? "Update User" : " New user"}</h3>
            <i onClick={showModal} className='modalForm_close bx bx-x'></i>
        </div>
        <div className='modalForm_div'>
          <input className='modalForm_input' type="text" {...register("first_name")} placeholder="First name" required />
        </div>
        <div className='modalForm_div'>
          <input className='modalForm_input'  type="text" {...register("last_name")} placeholder="Last name" required />
        </div>
        <div className='modalForm_div' >
          <input className='modalForm_input' type="email" {...register("email")} placeholder="example@email.com" required />
        </div>
        <div className='modalForm_div'>
          <input className='modalForm_input'  type="password" {...register("password")} placeholder="Password" required />
        </div>
        <div className='modalForm_div'>
          <input className='modalForm_input'  type="date" {...register("birthday")}  required />
        </div>
        <div className="modalForm_div">
          <button className='modalForm_btn'  >
            <i className="bx bx-plus modalForm_create"> </i>
            {updatingUser ? "Update" : " Add new user"}
          </button>
        </div>
      </form>
    </section>

    )
}

export default ModalForm;