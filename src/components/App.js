import {useState, useEffect} from "react";
import "../css/App.css";
import ListContacts from "./ListContacts";
import CreateContact from "./CreateContact";
import * as ContactsAPI from "../utils/ContactsAPI";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [screen, setScreen] = useState("list");

  const removeContact = (contact) => {
    console.log(`removeContact: ${contact.name}`);
    ContactsAPI.remove(contact);
    setContacts(contacts.filter(c => c.id !== contact.id));
  }

  useEffect(() => {
    const getContacts = async () => {
      const res = await ContactsAPI.getAll();
      setContacts(res);
    }

    getContacts();
  }, []);

  return (
    <div>
      {
        screen === "list" && (<ListContacts contacts={contacts} onDeleteContact={removeContact} onNavigate={() => {setScreen("create")}} />)
      }
      {
        screen === "create" && (<CreateContact />)
      }
    </div>
  )
};

export default App;
