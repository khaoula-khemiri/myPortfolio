import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.scss"

const Contact = () => {
  const [msg, setMsg] = useState(false);
  const formRef = useRef();


  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg(true)
    emailjs.sendForm('service_tuzy5bx', 'template_rjp0bad', formRef.current, 'fXBr6_PaQbxrzZpK8')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  console.log(formRef);
  return (
    <div className='contact' id="contact">
      <div className="left">
        <img src="assets/job.jpg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form ref={formRef} onSubmit={handleSubmit}>

          <input type="text" placeholder="Name" name="user_name" />
          <input type="text" placeholder="Subject" name="user_subject" />
          <input type="text" placeholder="Email" name="user_email" />
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
          {msg && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  )
}

export default Contact

