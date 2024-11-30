export const validateForm = (data) => {
    const errors = {};
    if (!data.name) errors.name = "Name is required.";
    if (!data.email) errors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(data.email)) errors.email = "Invalid email.";
    if (!data.message) errors.message = "Message is required.";
    return errors;
  };
  