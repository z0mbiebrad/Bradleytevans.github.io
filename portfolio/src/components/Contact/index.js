import React from "react";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import { Card, Container } from 'react-bootstrap';
import Swal from "sweetalert2";


const ContactForm = () => {
  const handleOnSubmit = (e) => {
    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    const user = process.env.REACT_APP_USER_ID;
    e.preventDefault();
    emailjs.sendForm(serviceID, templateID, e.target, user)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully"
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        })
      });
    e.target.reset()
  };
return (
  <div>
    <h1 data-testid="h1tag" className='text-white'>Leave me a message or question!</h1>
    <Container className='contact'>
    <form id="contact-form" onSubmit={handleOnSubmit}>
        <Card className="name bg-dark text-white">
          <label htmlFor="Email">Email</label>
          <input placeholder="Email…" type="text" name="user_email" size="50"   />
        </Card>
        <Card className="name bg-dark text-white">
          <label htmlFor="Name">Name</label>
          <input placeholder="Name..." type="text" name="user_name" size="50"   />
        </Card>
        <Card className='name bg-dark text-white'>
          <label htmlFor="Message">Message:</label>
          <textarea name="user_message" rows="3"/>
        </Card>
        <button data-testid="button" type="submit" className='bg-dark text-white'>Submit</button>
        </form>
      </Container>
    </div>
  );
}
export default ContactForm;