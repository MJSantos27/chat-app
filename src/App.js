import React from "react";
import Contact from "./components/Contact.js";

function App() {
  return (
    <div className="App">
      <Contact
        avatar="https://randomuser.me/api/portraits/women/66.jpg"
        name="Edith Reid"
        online={true}
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/women/88.jpg"
        name="Gloria Allen"
        online={false}
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/women/74.jpg"
        name="Sharlene Perry"
        online={true}
      />
    </div>
  );
}

export default App;
