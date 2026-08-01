import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { profile } from "../config/profile";

export default function Contact() {

const { contactFormUrl } = profile;

const [sent,setSent]=useState(false);

const handleSubmit = async (e)=>{

e.preventDefault();

const formData = new FormData(e.target);

try{

await fetch(contactFormUrl,{
method:"POST",
body:formData,
headers:{Accept:"application/json"}
});

setSent(true);
e.target.reset();

}catch(err){

alert("Something went wrong");

}

};

return (

<section id="contact" className="contact-section">

<div className="contact-inner">

<div className="contact-top-label">
Hire Me
</div>

<h2 className="contact-hero-title">
Get In Touch
</h2>

<p className="contact-hero-desc">
Actively looking for new opportunities. My inbox is always open!
</p>

<div className="contact-form-wrap">

{sent ? (

<div className="contact-success-card">

<div className="contact-success-icon">OK</div>

<h3 className="contact-success-title">

Message Sent!

</h3>

<p className="contact-success-text">

Thanks for reaching out. I'll get back to you soon.

</p>

<button
onClick={() => setSent(false)}
className="contact-success-button"
>

Send Another

</button>

</div>

) : (

<form onSubmit={handleSubmit}>

<div className="contact-form-grid">

<div className="contact-form-group">

<label className="contact-form-label">

Name

</label>

<input
className="contact-input"
 type="text"
 name="name"
 placeholder="Full Name"
 required
/>

</div>

<div className="contact-form-group">

<label className="contact-form-label">

Email

</label>

<input
className="contact-input"
 type="email"
 name="email"
 placeholder="your@email.com"
 required
/>

</div>

</div>

<div className="contact-form-group">

<label className="contact-form-label">

Message

</label>

<textarea
className="contact-textarea"
 name="message"
 rows={5}
 placeholder="Hello Tushar, I'd like to work with you..."
 required
/>

</div>

<div className="contact-form-actions">

<button
 type="submit"
 className="contact-btn"
>

Send Message -&gt;

</button>

</div>

</form>

)}

</div>

{/* SOCIAL LINKS */}

<div className="contact-social-row">

          <a
            href="https://github.com/tushar-singhal736"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-link"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/tushar-singhal-a51a40339/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-link"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

</div>

</div>

</section>

);

}
