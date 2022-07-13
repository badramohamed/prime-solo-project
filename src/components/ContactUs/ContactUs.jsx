import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import emailjs from "emailjs-com";
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
    <h2></h2>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number"  />
        <label>Name</label>
        <input type="text" name="from_name" placeholder="name" />
        <label>Email</label>
        <input type="email" name="from_email" placeholder="email"/>
        <label>Subject</label>
        <input type="text" name="subject" placeholder="subject" />
        <label>Message</label>
        <textarea name="html_message" placeholder="whats the buzz?" />
        <input type="submit" value="Send" />
      </form>
    </>
  );
}
