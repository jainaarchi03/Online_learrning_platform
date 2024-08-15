import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white flex items-center justify-center p-10">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden p-8">
        <h1 className="text-4xl font-bold text-purple-900 mb-8 text-center">Contact Us</h1>
        
        <div className="flex flex-col md:flex-row">
          {/* Contact Form */}
          <div className="md:w-2/3 pr-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Decorative and Social Links Section */}
          <div className="md:w-1/3 mt-8 md:mt-0">
            <div className="bg-purple-200 p-6 rounded-lg text-center shadow-lg">
              <h2 className="text-2xl font-bold text-purple-800 mb-4">Get In Touch</h2>
              <p className="text-gray-700 mb-4">
                We're here to help and answer any questions you might have. We look forward to hearing from you!
              </p>
              <div className="flex justify-center space-x-4 mt-6">
                <a href="#" className="text-purple-600 hover:text-purple-800 transition duration-300">
                  <i className="fab fa-facebook-f"></i> {/* Example icon, use your preferred icon library */}
                </a>
                <a href="#" className="text-purple-600 hover:text-purple-800 transition duration-300">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-purple-600 hover:text-purple-800 transition duration-300">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="text-purple-600 hover:text-purple-800 transition duration-300">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
