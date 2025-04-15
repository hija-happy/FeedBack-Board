import { createContext, useContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([]);

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