
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const LOCAL_STORAGE_KEY = "conacts"
  const [contacts, setContacts] = useState([])
  const addContactHandler = (contact) =>{
    setContacts([...contacts, contact])
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts])
  //  = [
  //   {
  //     id: "1",
  //     name: "Nishanth",
  //     email: "nish@gmail.com"
  //   },
  //   {
  //     id: "2",
  //     name: "Niks",
  //     email: "niks@gmail.com"
  //   }
  // ]
  return (
   <div>
     <Header>

     </Header>

     <AddContact addContactHandler={addContactHandler}></AddContact>
     <ContactList contacts={contacts}>

     </ContactList>
   </div>
  );
}

export default App;
 