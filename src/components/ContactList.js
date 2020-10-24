import React from "react";
import Contact from "./Contact";

export default function ContactList() {

  const Contacts = [
    {
      name: "Edith Reid",
      avatar: "https://randomuser.me/api/portraits/women/66.jpg",
      online: false,
    },
    {
      name: "Nellie Caldwell",
      avatar: "https://randomuser.me/api/portraits/women/17.jpg",
      online: true,
    },
    {
      name: "Gloria Allen",
      avatar: "https://randomuser.me/api/portraits/women/88.jpg",
      online: true,
    },
    {
      name: "Erica Hunt",
      avatar: "https://randomuser.me/api/portraits/women/87.jpg",
      online: false,
    },
    {
      name: "Juanita Phillips",
      avatar: "https://randomuser.me/api/portraits/women/55.jpg",
      online: true,
    }
  ];


  return (
    Contacts.map((item) => ( 
      <Contact name = {item.name}
      avatar = {item.avatar}
      online = {item.online}
      key = {item.name}
      />
    ))
  );
}