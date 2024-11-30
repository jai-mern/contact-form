import React from "react";
import PropTypes from "prop-types";
import "./../styles/ContactForm.css";

const FormField = ({ label, type, name, value, onChange, error }) => {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={error ? "input-error" : ""}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={error ? "input-error" : ""}
        />
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "email", "textarea"]).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default FormField;
