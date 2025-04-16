import { useEffect, createContext, useContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([]);

    // Load from localStorage on first load
    useEffect(() => {
      const stored = localStorage.getItem('feedbacks');
      if (stored) {
        setFeedbacks(JSON.parse(stored));
      }
    }, []);
  
    // Save to localStorage whenever feedbacks change
    useEffect(() => {
      localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
    }, [feedbacks]);
  

  const addFeedback = (feedback) => {
    setFeedbacks((prev) => [...prev, feedback]);
  };

  return (
    <FeedbackContext.Provider value={{ feedbacks, addFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedback = () => useContext(FeedbackContext);