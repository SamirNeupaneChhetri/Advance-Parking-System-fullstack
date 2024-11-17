// Services.js
import React from "react";

const Service = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-50 py-12">
      <div className="container mx-auto text-center px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-blue-700 mb-8">Our Services</h1>
        <p className="text-lg text-gray-600 mb-12">
          LAB-Parking provides a seamless parking experience with real-time availability, easy reservations, and options for all types of vehicles.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Real-time Parking Availability</h3>
            <p className="text-gray-700">
              Stay informed with live updates on available parking spots to save time and avoid hassle.
            </p>
          </div>
          
          {/* Service 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Quick & Easy Reservation System</h3>
            <p className="text-gray-700">
              Reserve a parking spot in just a few clicks, ensuring a hassle-free parking experience every time.
            </p>
          </div>
          
          {/* Service 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Options for All Vehicles</h3>
            <p className="text-gray-700">
            Choose between two-wheeled and four-wheeled vehicle parking with designated spots for each. 
            Enjoy free parking for bicycles.
            </p>
          </div>
          
          {/* Service 4 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Flexible Parking Plans</h3>
            <p className="text-gray-700">
              Select from one-time or monthly parking options tailored to fit your schedule and budget.
            </p>
          </div>
          
          {/* Service 5 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">24/7 Customer Support</h3>
            <p className="text-gray-700">
              Reach our dedicated support team any time for assistance with reservations or parking inquiries.
            </p>
          </div>
          
          {/* Service 6 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Secure & Monitored Facilities</h3>
            <p className="text-gray-700">
              Enjoy peace of mind with secure, monitored parking spaces designed to keep your vehicle safe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
