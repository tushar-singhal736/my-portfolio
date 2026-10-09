import './Contact.css';
import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { profile } from "../config/profile";

export default function Contact() {

const { contactFormUrl } = profile;

const [sent,setSent]=useState(false);
const [submitting,setSubmitting]=useState(false);
const [formError,setFormError]=useState('');

const handleSubmit = async (e)=>{

e.preventDefault();

const form = e.currentTarget;
const formData = new FormData(form);
setSubmitting(true);
setFormError('');

try{

const response = await fetch(contactFormUrl,{
method:"POST",
body:formData,
headers:{Accept:"application/json"}
});

if (!response.ok) throw new Error('Contact service rejected the message');

setSent(true);
form.reset();

}catch(err){

setFormError("We couldn't send your message. Please try again.");

}finally{

setSubmitting(false);

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

<div className="contact-success-card" role="status">

<div className="contact-success-icon">OK</div>

<h3 className="contact-success-title">

Message Sent!

</h3>

<p className="contact-success-text">

Thanks for reaching out. I'll get back to you soon.

</p>

<button
onClick={() => { setSent(false); setFormError(''); }}
className="contact-success-button"
>

Send Another

</button>

</div>

) : (

<form onSubmit={handleSubmit} aria-busy={submitting}>

<div className="contact-form-grid">

<div className="contact-form-group">

<label className="contact-form-label" htmlFor="contact-name">

Name

</label>

<input
className="contact-input"
 id="contact-name"
 type="text"
 name="name"
 placeholder="Full Name"
 required
/>

</div>

<div className="contact-form-group">

<label className="contact-form-label" htmlFor="contact-email">

Email

</label>

<input
className="contact-input"
 id="contact-email"
 type="email"
 name="email"
 placeholder="your@email.com"
 required
/>

</div>

</div>

<div className="contact-form-group">

<label className="contact-form-label" htmlFor="contact-message">

Message

</label>

<textarea
className="contact-textarea"
 id="contact-message"
 name="message"
 rows={5}
 placeholder="Hello Tushar, I'd like to work with you..."
 required
/>

</div>

{formError && <p className="contact-form-error" role="alert">{formError}</p>}

<div className="contact-form-actions">

<button
 type="submit"
 className="contact-btn"
 disabled={submitting}
>

{submitting ? 'Sending...' : 'Send Message -&gt;'}

</button>

</div>

</form>

)}

</div>

{/* SOCIAL LINKS */}

<div className="contact-social-row">

          <a
            href="https://github.com/tushar-singhal736/my-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-link"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/tushar-singhal-989376434/"
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
