import React from "react";
import ContactPage from "./pages/ContactPage";
import "./styles/ContactForm.css";

function App() {
  return (
    <div className="App" style={styles.appContainer}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Get in Touch</h1>
      </header>
      <main style={styles.mainContent}>
        <ContactPage />
      </main>
      <footer style={styles.footer}>
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  appContainer: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f9",
    color: "#333",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  header: {
    backgroundColor: "#6200ea",
    color: "#fff",
    padding: "20px 0",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  headerTitle: {
    margin: 0,
    fontSize: "2.5rem",
  },
  mainContent: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  footer: {
    backgroundColor: "#6200ea",
    color: "#fff",
    textAlign: "center",
    padding: "10px 0",
    boxShadow: "0 -4px 8px rgba(0, 0, 0, 0.1)",
  },
  formField: {
    marginBottom: "15px",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "400px",
  },
  label: {
    fontSize: "1rem",
    marginBottom: "5px",
    color: "#333",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: "5px",
  },
  error: {
    fontSize: "0.875rem",
    color: "red",
  },
};

export default App;
