import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import ModalForm from "./components/ModalForm";
import NavBar from "./components/NavBar";
import UserList from "./components/UserList";

const BASE_URL = "https://users-crud.academlo.tech/";

const defaultValues = {
  email: "",
  password: "",
  first_name: "",
  last_name: "",
  birthday: "",
};

function App() {
  
  const [users, setUsers] = useState([]);
  const [updatingUser, setupdatingUser] = useState();
  const [isShowModal, setIsShowModal] = useState(false);

  const { register, handleSubmit, reset } = useForm();
  
  const showModal = () => {
    setIsShowModal((isShowModal) => !isShowModal)
    reset(defaultValues)
  }

  const submit = (data) => {
    const dataCreate = { ...data };

    if(updatingUser){
      updateUser(updatingUser.id, data)
      setupdatingUser()
    }else{
      createUser(dataCreate);
    }
    reset(defaultValues);
  };

  const getAllUsers = () => {
    axios
      .get(`${BASE_URL}users/`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  const createUser = (data) => {
    axios
      .post(`${BASE_URL}users/`, data)
      .then((res) => {
        showModal()
        getAllUsers()
      })
      .catch((err) => console.log(err));
  };

  const deleteUser = (id) => {
    axios
      .delete(`${BASE_URL}users/${id}/`)
      .then((res) => getAllUsers(res.data))
      .catch((err) => console.log(err));
  };

  const updateUser = (id, data) =>{
    axios
      .patch(`${BASE_URL}users/${id}/`, data)
      .then((res) => {
        getAllUsers()
        showModal()
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="App">
      
      <ModalForm
          isShowModal={isShowModal}
          showModal={ showModal } 
          handleSubmit={handleSubmit}
          submit={submit}
          register={register}
          updatingUser={updatingUser}
        />
      
      <NavBar 
        showModal={ showModal } 
      />
      
      
      <section className="users-card" >
        {users.map((user) => (
          <UserList
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            updateUser={updateUser}
            setupdatingUser={setupdatingUser}
            showModal={ showModal } 
            reset={reset}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
