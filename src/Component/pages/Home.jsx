import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../Images/pic-1.webp';
import image2 from '../Images/pic-2.avif';
import image3 from '../Images/pic-3.png';
import image4 from '../Images/pic-3.webp';
import image5 from '../Images/pic.webp';
import image6 from '../Images/pic-6.jpg';
import image7 from '../Images/pic-5.webp';

const courseList = [
  {
    id: 1,
    title: 'Frontend Development',
    description: 'Learn how to build modern and responsive websites.',
    image: image2
  },
  {
    id: 2,
    title: 'Full-Stack Development',
    description: 'Understand server-side programming and databases.',
    image: image3
  },
  {
    id: 3,
    title: 'Deep-Learning',
    description: 'Master both frontend and backend technologies.',
    image: image4
  },
  {
    id: 4,
    title: 'Cloud-Computing',
    description: 'Learn how to analyze and interpret complex data.',
    image: image5
  },
  {
    id: 5,
    title: 'Digital Marketing',
    description: 'Understand machine learning algorithms and their applications.',
    image: image6
  },
  {
    id: 6,
    title: 'Personality Development',
    description: 'Learn about cloud services and deployment strategies.',
    image: image7
  },
];

const Home = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 text-white p-10 text-center transform transition-transform duration-500 hover:scale-105">
        <h2 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
          Empower Your Learning Journey
        </h2>
        <p className="mt-4 text-lg md:text-xl">
          Explore a variety of courses and take your skills to the next level with our comprehensive learning platform.
        </p>
        <button className="mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110 hover:bg-blue-700">
          <Link to="/courses">Explore Courses</Link>
        </button>
      </section>

      {/* Introduction Section */}
      <section className="flex flex-col md:flex-row items-center p-10 bg-gray-100">
        {/* Image Section */}
        <div className="flex-1 flex items-center justify-center">
          <div 
            className="w-48 h-48 bg-gray-200 rounded-full overflow-hidden transform transition-transform duration-500 hover:scale-110"
          >
            <img 
              src={image1} 
              alt="Introduction" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
         {/* Text Section */}
         <div className="flex-1 text-center md:text-left mt-8 md:mt-0 md:pl-10">
          <h2 className="text-3xl font-bold mb-6 text-blue-600">All What You Need</h2>
          <p className="text-xl text-gray-600 mb-4">
            At LearnSphere, we offer a wide range of high-quality courses designed to help you achieve your learning goals. Whether you're looking to advance your career, pick up a new skill, or explore a new hobby, our platform provides the tools and resources you need.
          </p>
          <p className="text-xl text-gray-600">
            Join our community and start learning from industry experts today!
          </p>
        </div>
      </section>

      {/* Available Courses */}
      <section className="p-10 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Available Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {courseList.map((course) => (
            <div key={course.id} className="border border-gray-300 bg-white rounded-lg shadow-md overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-49 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
                <p className="mt-2 text-gray-600">{course.description}</p>
                <Link
                  to={`/courses/${course.id}`}
                  className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
