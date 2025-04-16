import React from 'react';
import Navbar from '../components/Navbar';
import { useFeedback } from '../context/FeedbackContext.jsx'; // 👈 import context

const View = () => {
  const { feedbacks } = useFeedback(); // 👈 get stored feedbacks
  console.log('Feedbacks:', feedbacks); 
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">All Feedbacks</h1>

        {feedbacks.length === 0 ? (
          <p className="text-center text-gray-500">No feedbacks submitted yet.</p>
        ) : (
          <div className="grid gap-4 max-w-3xl mx-auto">
            {feedbacks.map((fb, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-4 rounded-xl border border-gray-200"
              >
                <p className="text-sm text-gray-500 mb-1">
                  <strong>Name:</strong> {fb.name}
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  <strong>Intern:</strong> {fb.selectedIntern}
                </p>
                <p className="text-base text-gray-700 mb-1">
                  <strong>Feedback:</strong> {fb.feedback}
                </p>
            
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default View;
