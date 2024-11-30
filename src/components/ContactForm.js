import React, { useState } from "react";
import FormField from "./FormField";
import "./../styles/ContactForm.css";
import { validateForm } from "../utils/formValidation";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <FormField
        label="Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />
      <FormField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />
      <FormField
        label="Message"
        type="textarea"
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
