// About.js
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-12">
      {/* Hero Section */}
      <div className="container mx-auto text-center px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">About Us</h1>
        <p className="text-lg text-gray-600 mb-12">
          Welcome to LAB-Parking, where we strive to make your parking experience seamless, efficient, and reliable.
        </p>
      </div>

      {/* About Description */}
      <div className="container mx-auto max-w-4xl px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-3xl font-semibold text-blue-600 mb-6">Who We Are</h2>
        <p className="text-gray-700 text-lg">
        At LAB-Parking, we are a group of four passionate students currently pursuing an IIT course, dedicated to providing innovative parking solutions that make your daily commute smoother and more convenient. 
        Our mission is to harness cutting-edge technology to deliver real-time parking updates, effortless reservations, and a range of parking options tailored to meet your specific needs. 
        With sustainability at the core of our values, we proudly offer free parking spaces for bicycles, helping to reduce carbon footprints while making commuting greener.
        Join us as we redefine the way you think about parking!
        </p>
      </div>

      {/* Our Values Section */}
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-blue-600 text-center mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Value 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Customer-Centric</h3>
            <p className="text-gray-700">
              Your satisfaction is our priority. We constantly improve our services based on customer feedback to provide the best parking experience.
            </p>
          </div>
          
          {/* Value 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Innovation</h3>
            <p className="text-gray-700">
              We are committed to using the latest technology to simplify parking and reduce congestion, making your daily commute easier.
            </p>
          </div>
          
          {/* Value 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Sustainability</h3>
            <p className="text-gray-700">
              Dedicated to eco-friendly practices, we promote the use of bicycles and electric cycles with free parking options.
            </p>
          </div>

          {/* Value 4 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Reliability</h3>
            <p className="text-gray-700">
              Dependable and accessible parking services you can count on, no matter the time of day.
            </p>
          </div>
          
          {/* Value 5 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Safety</h3>
            <p className="text-gray-700">
              We prioritize the safety of your vehicle with secure, monitored parking spaces.
            </p>
          </div>
          
          {/* Value 6 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Accessibility</h3>
            <p className="text-gray-700">
              Conveniently accessible parking locations tailored for all users, including those with special needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
