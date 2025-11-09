import React from 'react'
import themepattern from '../../assets/theme-pattern.png'
import './contact.css'
import mailicon from '../../assets/gmail.png'
import phoneicon from '../../assets/phone.png'
import locationicon from '../../assets/map.png'
import instagramicon from '../../assets/instagram.png'


const Contact = () => {

const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a5db72c5-9fc0-4e2b-b1a7-f2b8922cddbc");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
    //   console.log("Success", res);
      alert(res.message)
    }
  };


  return (
    <div id='contact' className='contact'>
        <div className='contact-title'>
            <h1>Get in touch</h1>
            {/* <img src={themepattern} alt="" /> */}
        </div>
        <div className='contact-section'>
            <div className="contact-left">
                <h2>Let's talk</h2>
                <p>I am currently open to new opportunities and collaborations. Whether you have a project in mind, a question, or just want to say hello, feel free to reach out!</p>
            <div className="contact-details">
            <div className='contact-detail'>
                <img src={mailicon} alt="" />
                    <p>tharanithillaivasagan@gmail.com</p>
            </div>
            <div className='contact-detail'>
                <img src={phoneicon} alt="" />
                    <p>+91 8526246266</p>
            </div>
            <div className='contact-detail'>
                <img src={locationicon} alt="" />
                    <p>Erode, Tamil Nadu, India</p>
            </div>
            <div className='contact-detail'>
                <img src={instagramicon} alt="" />
                    <p>@dharan._1997</p>
            </div>
            </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor="">Your name</label>
                <input type="text" placeholder='Enter your name' name='name' required />
                <label htmlFor="">Your email</label>
                <input type="email" placeholder='Enter your email' name='email' required />
                <label htmlFor="">Write your message</label>
                <textarea rows="8" placeholder='Enter your message' name='message'></textarea>
                <button type='submit' className='contact-submit'>Send Message</button>
            </form>
    </div>
    </div>
    

  )
}

export default Contact