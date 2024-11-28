'use client'
import { useState } from "react";
export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Form submitted:", formData);
    // Here you can add logic to send the form data to an API or server.
  };

  return (
    <section id="contact" >
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-primary-800">
          Contact Us
        </h2>
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-primary-100"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow-sm text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 border-primary-200 border-2 outline-none"
              placeholder="David Piyush"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-primary-100"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow-sm text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 border-primary-200 border-2 outline-none"
              placeholder="name@gmail.com"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-primary-100"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="shadow-sm text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 border-primary-200 border-2 outline-none"
              placeholder="Leave a comment..."
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white bg-fuchsia-900 rounded-lg bg-primary-600 sm:w-fit hover:bg-primary-700"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
