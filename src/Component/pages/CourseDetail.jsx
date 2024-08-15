import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
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
    overview: 'Learn how to build modern and responsive websites.',
    description: {
      prerequisites: 'Basic understanding of HTML, CSS, and JavaScript.',
      objectives: 'To master frontend technologies like React, Angular, and Vue.',
      whatYouWillLearn: 'Create interactive web applications and understand frontend frameworks.'
    },
    image: image2
  },
  {
    id: 2,
    title: 'Full-Stack Development',
    overview: 'Master both frontend and backend technologies.',
    description: {
      prerequisites: 'Knowledge of HTML, CSS, JavaScript, and basic backend concepts.',
      objectives: 'To become proficient in both frontend and backend development.',
      whatYouWillLearn: 'Build full-stack applications using technologies like Node.js and Express.'
    },
    image: image3
  },
  {
    id: 3,
    title: 'Deep-learning',
    overview: 'It is a powerful technique used to model complex patterns in data and is the driving force behind many AI applications, including image and speech recognition, natural language processing, and autonomous systems..',
    description: {
      prerequisites: 'Mathematics Knowledge, Understanding of Machine Learning, Programming Skills',
      objectives: 'Gain hands-on experience in building, training, and tuning neural networks using frameworks like TensorFlow and PyTorch.',
      whatYouWillLearn: 'Introduction to Neural Networks, Deep Learning Frameworks, Generative Models and GANs'
    },
    image: image4
  },
  {
    id: 4,
    title: 'Cloud-Computing',
    overview: 'Offers faster innovation, flexible resources, and economies of scale. It enables users to access and store data, run applications, and manage services remotely without needing physical infrastructure.',
    description: {
      prerequisites: 'Knowledge of networking concepts like IP addresses, DNS, and routing.',
      objectives: 'To become proficient to UnderstBuildand Cloud Computing Architecture:',
      whatYouWillLearn: ' By the end of this course, you will be equipped with the skills and knowledge to design, implement, and manage cloud computing solutions effectively..'
    },
    image: image5
  },
  {
    id: 5,
    title: 'Digital Marketing',
    overview: 'Proficiency in using computers, internet browsing, and basic software applications like word processors and spreadsheets.',
    description: {
      prerequisites: 'Basic Computer Skills, Communication Skills, Analytical Skills ',
      objectives: 'To Build Effective Digital Marketing Strategies.',
      whatYouWillLearn: 'Search Engine Optimization, Pay-Per-Click (PPC) Advertising'
    },
    image: image6
  },
  {
    id: 6,
    title: 'Personal Development',
    overview: 'Being open to new ideas, feedback, and perspectives, and willing to make changes where necessary',
    description: {
      prerequisites: 'Self-Awareness, Basic Communication Skills',
      objectives: 'Enhance Self-Awareness, Improve Communication Skills:',
      whatYouWillLearn: 'Self-Assessment Techniques, Emotional Intelligence',
    },
    image: image7
  },
];

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find(course => course.id === parseInt(id));

  const [isEnrolling, setIsEnrolling] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleEnrollClick = () => {
    setIsEnrolling(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Enrolled:', formData);
    setFormData({ name: '', email: '' });
    setIsEnrolling(false);
  };

  return (
    <div className="p-10 bg-gray-100">
      <div className="container mx-auto max-w-3xl bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800">{course.title}</h1>
        <img src={course.image} alt={course.title} className="w-49 h-49 object-cover mt-4 rounded-lg" />
        <p className="mt-4 text-lg text-gray-700">{course.overview}</p>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Course Details</h2>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-700">Prerequisites</h3>
            <p className="mt-2 text-gray-600">{course.description.prerequisites}</p>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-700">Objectives</h3>
            <p className="mt-2 text-gray-600">{course.description.objectives}</p>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-700">What You Will Learn</h3>
            <p className="mt-2 text-gray-600">{course.description.whatYouWillLearn}</p>
          </div>
        </div>
        <button
          onClick={handleEnrollClick}
          className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
        >
          Enroll Now
        </button>
        {isEnrolling && (
          <form onSubmit={handleSubmit} className="mt-6 bg-gray-200 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Enrollment Form</h3>
            <div className="mt-4">
              <label htmlFor="name" className="block text-gray-700">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="block text-gray-700">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CourseDetail;
