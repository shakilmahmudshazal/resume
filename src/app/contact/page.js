"use client";
import TitleBar from "@/components/title";
import { useEffect, useState } from "react";

export default function Resume() {
  const [isClient, setIsClient] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000); // Hide message after 5 seconds
  };

  return (
    <section className="details">
      <TitleBar title="Contact" />

      <div className="contact-form-container">
        <div className="discussion">
          I am always open to discussing new <span className="bold">projects</span>,{" "}
          <span className="bold">opportunities</span> in the tech world,{" "}
          <span className="bold">partnerships</span>, and more so <span className="bold">mentorship</span>.
        </div>

        <div className="contact-form">
          {submitted ? (
            <p className="success-message">Thank you for reaching out! I will get back to you as soon as possible. 😊</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="contact-form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="contact-form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="contact-form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button type="submit">Send</button>
            </form>
          )}
        </div>
      </div>

      <style jsx>{`
        .success-message {
          background-color: #d4edda;
          color: #155724;
          padding: 10px;
          border-radius: 5px;
          text-align: center;
          margin-top: 10px;
        }
      `}</style>
    </section>
  );
}
