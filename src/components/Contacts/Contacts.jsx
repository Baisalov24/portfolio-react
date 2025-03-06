import React, {useState, useRef } from "react";
import './style.css'
import CustomHook from '../CustomHook/CustomHook';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import emailjs from "@emailjs/browser";

const initialFormData = {
  name: "",
  email: "",
  message: "",
};
const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState(initialFormData);
  const [showMessage, setShowMessage] = useState(false);

  const isFormValid = formData.name && formData.email && formData.message;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      return;
    }

    setFormData(initialFormData);

    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);

    emailjs
      .sendForm(
        "service_4cpcoec",
        "template_482640h",
        form.current,
        "twiSklDAsh06rUA4n"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);

  return (
    <div className="contact_form_section" id="Contacts"  ref={scrollTab}>
      <div className="contact_form_wrapper">
        <div className="contact_form_left" ref={(el) => el && divs.current.push(el)}>
         
            <p>
              <a href="mailto:temirlanbaisalov35@gmail.com" className="gmail-button" rel="noreferrer">
                <strong>Email: temirlanbaisalov35@gmail.com</strong>
              </a>
            </p>
            <p>
              <a href="https://github.com/Baisalov24" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub}/>  <strong>Baisalov24</strong>
              </a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/temirlan-baisalov-4564992b4/"  target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin}/> <strong>Temirlan Baisalov</strong>
              </a>
            </p>
         
        </div>
        <div className="contact_form_right"  ref={(el) => el && divs.current.push(el)}>
          <h1>Contact Me</h1>
          <form ref={form} onSubmit={handleSubmit} className="contact_form">
            <label htmlFor="username" className="contact_label">
              Name
            </label>
            <input
              id="username"
              className="contact_input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="useremail" className="contact_label">
              Email
            </label>
            <input
              id="useremail"
              className="contact_input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="usermessage"  className="contact_label">Text</label>

            <textarea
            id="usermessage"
              className="contact_textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button
              className="contactUs_btn"
              type="submit"
              disabled={!isFormValid}
            >
              Submit
            </button>
          </form>
          {showMessage && (
            <div>
              <h3 className="contact_formAlert">Form submitted successfully!</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
