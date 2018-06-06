import React from 'react'

const ContactForm = () => (
  <div className='contact-form'>
    <form name="contact" method="POST" netlify>
    <h2>Contact</h2>
    <p>
      <label>Your Name: <input type="text" name="name" /></label>   
    </p>
    <p>
      <label>Your Email: <input type="email" name="email" /></label>
    </p>
    <p>
      <label>Message: <textarea name="message"></textarea></label>
    </p>
    <p>
      <button type="submit">Send</button>
    </p>
  </form>
</div>
)

export default ContactForm