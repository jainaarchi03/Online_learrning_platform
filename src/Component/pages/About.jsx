import React from 'react';
import image8 from '../Images/pic-8.jpg'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Company Overview Section */}
        <section className="p-10">
          <h1 className="text-4xl font-bold text-purple-900 text-center mb-8">About Us</h1>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src={image8} // Replace with your image URL
                alt="Company Overview"
                className="w-80 h-80 object-cover rounded-full mx-auto"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <p className="text-lg leading-relaxed text-gray-700">
                LearnSphere is a leading online learning platform dedicated to empowering individuals through high-quality educational resources.
                Our mission is to provide accessible and affordable education to learners worldwide, helping them achieve their personal and professional goals.
              </p>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="p-10 bg-purple-100">
          <h2 className="text-3xl font-bold text-purple-900 text-center mb-8">Our Achievements</h2>
          <div className="flex flex-wrap justify-around">
            <div className="w-full sm:w-1/3 text-center mb-8">
              <h3 className="text-5xl font-bold text-purple-600">500+</h3>
              <p className="text-lg text-gray-700">Courses Available</p>
            </div>
            <div className="w-full sm:w-1/3 text-center mb-8">
              <h3 className="text-5xl font-bold text-purple-600">1M+</h3>
              <p className="text-lg text-gray-700">Students Enrolled</p>
            </div>
            <div className="w-full sm:w-1/3 text-center mb-8">
              <h3 className="text-5xl font-bold text-purple-600">100+</h3>
              <p className="text-lg text-gray-700">Expert Instructors</p>
            </div>
          </div>
        </section>

        {/* Offerings Section */}
        <section className="p-10">
          <h2 className="text-3xl font-bold text-purple-900 text-center mb-8">What We Offer</h2>
          <div className="flex flex-wrap justify-around space-y-8 md:space-y-0">
            <div className="w-full sm:w-1/3 p-4">
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-purple-700 mb-4">Wide Range of Courses</h3>
                <p className="text-gray-700">
                  We offer a vast array of courses across various domains, including technology, business, arts, and more.
                  Our courses are designed to help you stay ahead in your career and personal development.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/3 p-4">
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-purple-700 mb-4">Expert Instructors</h3>
                <p className="text-gray-700">
                  Learn from industry experts who bring real-world experience to the virtual classroom.
                  Our instructors are passionate about sharing their knowledge and helping you succeed.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/3 p-4">
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-purple-700 mb-4">Flexible Learning</h3>
                <p className="text-gray-700">
                  Our platform offers flexible learning options, allowing you to learn at your own pace and on your own schedule.
                  Whether you're a full-time professional or a busy student, we have something for you.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/3 p-4">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">Comprehensive Courses</h3>
              <p className="text-gray-700">
                Our courses are designed to be comprehensive and engaging, covering everything from basic concepts to advanced techniques.
                We offer a range of subjects including technology, business, arts, and personal development.
              </p>
            </div>
            </div>
            <div className="w-full sm:w-1/3 p-4">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-purple-700 mb-4">Certificates of Completion</h3>
              <p className="text-gray-700">
                Upon completing a course, you will receive a certificate that you can share with your network and add to your professional profile.
              </p>
            </div>
            </div>
            <div className="w-full sm:w-1/3 p-4">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">Community Support</h3>
              <p className="text-gray-700">
                Join a community of learners and instructors to share insights, ask questions, and collaborate on projects.
                Our forums and discussion groups provide additional support to enhance your learning experience.
              </p>
            </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
};


export default About;
