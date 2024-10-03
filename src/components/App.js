import {useState} from "react";
import "../css/App.css";
import ListContacts from "./ListContacts";

const App = () => {
  const [contacts, setContacts] = useState([
    {
      id: "karen",
      name: "Karen Isgrigg",
      handle: "karen_isgrigg",
      avatarURL: "http://localhost:5001/karen.jpg",
    },
    {
      id: "richard",
      name: "Richard Kalehoff",
      handle: "richardkalehoff",
      avatarURL: "http://localhost:5001/richard.jpg",
    },
    {
      id: "tyler",
      name: "Tyler McGinnis",
      handle: "tylermcginnis",
      avatarURL: "http://localhost:5001/tyler.jpg",
    }
  ]);

  const removeContact = (contact) => {
    console.log(`removeContact: ${contact.name}`);
    setContacts(contacts.filter(c => c.id !== contact.id));
  }

  return (
    <div>
      <ListContacts contacts={contacts} onDeleteContact={removeContact} />
    </div>
  )
};

export default App;
