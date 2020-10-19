import React from "react";
import ContactList from "./components/ContactList";

const contacts = [
  {
    name: "Edith Reid",
    avatar: "https://randomuser.me/api/portraits/women/66.jpg",
    online: false,
    Key: 1
  },
  {
    name: "Nellie Caldwell",
    avatar: "https://randomuser.me/api/portraits/women/17.jpg",
    online: true,
    Key: 2
  },
  {
    name: "Gloria Allen",
    avatar: "https://randomuser.me/api/portraits/women/88.jpg",
    online: true,
    Key: 3
  },
  {
    name: "Erica Hunt",
    avatar: "https://randomuser.me/api/portraits/women/87.jpg",
    online: false,
    Key: 4
  },
  {
    name: "Juanita Phillips",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    online: true,
    Key: 5
  }
];
function App() {
  return (
    <div className="App">
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
