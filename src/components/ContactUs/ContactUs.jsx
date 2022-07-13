import React from "react";
import emailjs from "emailjs-com";
import './ContactUs.css'
// import axios from "axios";

export default function ContactUs() {
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
  }
  return (
    <>
    <h2> Contact Us</h2>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number"  />
        <input type="text" name="from_name" placeholder="name" />
    
        <input type="email" name="from_email" placeholder="email"/>
  
        <input type="text" name="subject" placeholder="whats the buzz? 🐝" />
        
    
        <input type="submit" value="Send" />
      </form>
    </>
  );
}
