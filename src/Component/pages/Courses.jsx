import React from 'react';
import { Link } from 'react-router-dom';
import image2 from '../Images/pic-2.avif';
import image3 from '../Images/pic-3.png';
import image4 from '../Images/pic-3.webp';
import image5 from '../Images/pic.webp';
import image6 from '../Images/pic-6.jpg';
import image7 from '../Images/pic-5.webp';

const courses = [
  {
    id: 1,
    title: 'Frontend Development',
    description: 'Learn how to build modern and responsive websites.',
    instructor: 'John Doe',
    duration: '12 weeks',
    image: image2
  },
  {
    id: 2,
    title: 'Full-Stack Development',
    description: 'Master both frontend and backend technologies.',
    instructor: 'Jane Smith',
    duration: '24 weeks',
    image: image3
  },
  {
    id: 3,
    title: 'Deep-learning',
    description: 'It is a powerful technique used to model complex patterns in data and is the driving force behind many AI applications, including image and speech recognition, natural language processing, and autonomous systems..',
    instructor: 'Alison gilbert',
    duration: '24 weeks',
    image: image4
  },
  {
    id: 4,
    title: 'Cloud-Computing',
    description: 'Offers faster innovation, flexible resources, and economies of scale.',
    instructor: 'Jane Smith',
    duration: '20 weeks',
    image: image5
  },
  {
    id: 5,
    title: 'Digital Marketing',
    description: 'Proficiency in using computers, internet browsing, and basic software applications like word processors and spreadsheets.',
    instructor: 'Jane Smith',
    duration: '4 weeks',
    image: image6
  },
  {
    id: 6,
    title: 'Personal Development',
    description: 'Being open to new ideas, feedback, and perspectives, and willing to make changes where necessary',
    instructor: 'Jane Smith',
    duration: '24 weeks',
    image: image7
  },
];

const Courses = () => {
  return (
    <section className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Available Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div key={course.id} className="border border-gray-300 bg-white rounded-lg shadow-md overflow-hidden">
            <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
          <p className="mt-2 text-gray-600">{course.description}</p>
          <p className="mt-2 text-gray-500">Instructor: {course.instructor}</p>
          <p className="mt-1 text-gray-500">Duration: {course.duration}</p>
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
  );
};

export default Courses;
