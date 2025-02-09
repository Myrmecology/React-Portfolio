// Contact.js
import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    
    if (!value.trim()) {
      setErrors((prev) => ({
        ...prev,
        [name]: 'This field is required'
      }));
    } else if (name === 'email' && !validateEmail(value)) {
      setErrors((prev) => ({
        ...prev,
        email: 'Please enter a valid email address'
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowConfirmation(true);
    setFormData({ name: '', email: '', message: '' }); // Clear form
    setTimeout(() => {
      setShowConfirmation(false);
    }, 3000); // Hide message after 3 seconds
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            rows="5"
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>

        <button type="submit">Send Message</button>
      </form>
      
      {showConfirmation && (
        <div className="message-confirmation">
          Message Sent Successfully!
        </div>
      )}
    </section>
  );
}

export default Contact;