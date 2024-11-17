import React, { useState } from "react";

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    setMessageSent(true); // Show the confirmation message

    // Optionally, reset the form or handle sending the message here

    // Clear the message after a delay (optional)
    setTimeout(() => setMessageSent(false), 3000); // Hide the message after 3 seconds
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-12">
      {/* Hero Section */}
      <div className="container mx-auto text-center px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-12">
          We'd love to hear from you! Feel free to reach out with any questions, feedback, or parking-related inquiries.
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto max-w-4xl px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-semibold text-blue-600 text-center mb-8">Get in Touch</h2>
        
        {/* Confirmation Message */}
        {messageSent && (
          <div className="text-center mb-4 text-green-600 font-semibold">
            Message Sent!
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Your Name"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Your Email"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Information Section */}
      <div className="container mx-auto max-w-4xl px-6 lg:px-8 mt-16">
        <h2 className="text-3xl font-semibold text-blue-600 text-center mb-8">Contact Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Phone</h3>
            <p className="text-gray-700">(123) 456-7890</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Email</h3>
            <p className="text-gray-700">info@lab-parking.com</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Address</h3>
            <p className="text-gray-700">123 Parking St, Finland, 45678</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Working Hours</h3>
            <p className="text-gray-700">Mon - Fri: 8 AM - 8 PM</p>
            <p className="text-gray-700">Sat - Sun: 10 AM - 6 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
