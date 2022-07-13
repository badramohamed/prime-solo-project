import React from "react";
import emailjs from "emailjs-com";
import "./ContactUs.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";


// import axios from "axios";

export default function ContactUs() {
    const [comments, setComments] = useState('');
    const history = useHistory();

  function sendEmail(e) {
    e.preventDefault(); // evt  prevent default

    emailjs
      .sendForm(
        "service_pyrkvfd",
        "template_ld4yk0r",
        e.target,
        "QYtekrhQ4seTJtGRT"
      )
      .then(
        (result) => {
          window.location.reload(); //This allows the page to reload
        },
        (error) => {
          console.log(error.text);
        }
      );
      setComments(''); 
      history.push('/Home');

  }
  return (
    <>
      <h2> Contact Us</h2>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <input type="text" name="from_name" placeholder="name" />
        <input type="email" name="from_email" placeholder="email" />
        <input type="text" name="subject" placeholder="whats the buzz? 🐝" />
        <input type="submit" value="Send" />
      </form>
    </>
  );
}
