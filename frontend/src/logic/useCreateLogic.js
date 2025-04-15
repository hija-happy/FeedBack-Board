import {useState} from'react';
import { useFeedback } from '../context/FeedbackContext.jsx';


const useCreateLogic = () => {
    const [name, setName] = useState('');
    const [selectedIntern, setIntern] = useState('');
    const [feedback, setFeedback] = useState('');
  
    const { addFeedback } = useFeedback(); // 👈 from context
  
    const handleSubmit = () => {
      if (name && selectedIntern && feedback) {
        const newFeedback = {
          name,
          intern: selectedIntern,
          feedback,
          submittedAt: new Date().toISOString(), // optional
        };
  
        addFeedback(newFeedback); // 👈 add to context state
  
        // Optionally clear form
        setName('');
        setIntern('');
        setFeedback('');
        alert('Feedback submitted successfully!');
      } else {
        alert('Please fill all fields');
      }
    };
  
    return {
      name,
      setName,
      selectedIntern,
      setIntern,
      feedback,
      setFeedback,
      handleSubmit,
    };
  };
  
  export default useCreateLogic;
  