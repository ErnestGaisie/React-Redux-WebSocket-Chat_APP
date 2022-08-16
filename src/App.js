import React, { Component, useEffect, useState } from "react";
import "./App.css";
import { MessagesList } from "./containers/MessagesList";
import  AddMessage  from "./components/AddMessage";
import setupSocket from './sockets'
import handleNewMessage from './sagas'
import ModalForm from "./components/Modal";


const App = ({store, sagaMiddleware}) =>  {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [username, setUserName] = useState("Me");
  const toggleModal = () => {
    setIsModalVisible(wasModalVisible => ! wasModalVisible)
  }

  const openModal = () => {setIsModalVisible(true)};
  const closeModal = () => {setIsModalVisible(false)};
  const handleSubmit = (name) => {
    console.log("USERNAME", name);
    setUserName(name);
  }

  useEffect(() => {
    openModal()
  }, [])

  // useEffect(() => {
  //   const socket = setupSocket(store.dispatch, username)

  //   sagaMiddleware.run(handleNewMessage, { socket, username })
  // }, [username])

    return (
      <div className="max-w-2xl mx-auto bg-gray-50">
        <section id="main">
        { isModalVisible ? 
          <ModalForm 
            closeModal={closeModal} 
            isOpen={isModalVisible} 
            handleSubmit={handleSubmit}
            closeModal={closeModal}
            setUserName={setUserName}
          /> 
          : 
          null 
        }
          <MessagesList />
          <AddMessage username={username}/>
        </section>
      </div>
    );
  
}

export default App;
