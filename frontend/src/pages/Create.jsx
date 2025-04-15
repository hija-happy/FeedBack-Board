import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useFeedback } from '../context/FeedbackContext'; // Import the context hook
import useCreateLogic from '../logic/useCreateLogic';

const Create = () => {
  const {
    name,
    setName,
    selectedIntern,
    setIntern,
    feedback,
    setFeedback,
    handleSubmit,
  } = useCreateLogic();

  const { addFeedback } = useFeedback();  // Get addFeedback from context

  const handleSubmitFeedback = () => {
    const newFeedback = { name, selectedIntern, feedback };  // Prepare the feedback object
    addFeedback(newFeedback);  // Add feedback to the context
    setName('');  // Clear input fields after submission
    setFeedback(''); 
    setIntern('');
  };

  return (
    <div>
      <Navbar />
      <div className="w-screen h-screen flex items-center justify-center bg-blue-50">
        <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-6">Please Enter Your Feedback</h1>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Select Intern</label>
            <select
              value={selectedIntern}
              onChange={(e) => setIntern(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">-- Choose an Intern --</option>
              <option value="Aby sunny">Aby sunny</option>
              <option value="Hija Happy">Hija Happy</option>
              <option value="Mausooq">Mausooq</option>
              <option value="Sannidhi">Sannidhi</option>
              <option value="Shahid">Shahid</option>
              <option value="Shahistha">Shahistha</option>
              <option value="Shreya Devagida">Shreya Devagida</option>
              <option value="Shreya Naik">Shreya Naik</option>
              <option value="Suraj">Suraj</option>
              <option value="Vishnu">Vishnu</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Your Feedback</label>
            <textarea
              rows="4"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder={
                selectedIntern
                  ? `Write your feedback for ${selectedIntern}...`
                  : 'Enter Your Feedback...'
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            onClick={handleSubmitFeedback}  // Call the function to add feedback to context
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition duration-200"
          >
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;
