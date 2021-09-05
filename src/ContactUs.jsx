import React from 'react';
import emailjs from 'emailjs-com';
import {TextField, Button} from '@material-ui/core';

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    const serviceId = 'service_dim9tr2';
    const templateId = 'template_kxertmh';
    const userId = 'user_InJUFYw9Z9GsHgNaqovQ1';

    emailjs.sendForm(serviceId, templateId, e.target, userId)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className='subscribe-container_form' onSubmit={sendEmail}>
      <TextField
        className='form_email-input'
        name='to_email'
        label='Email'
        type='email' />
      <Button
        className='form_email-button'
        type='submit'>
          subscribe for a news
      </Button>
    </form>
  );
}