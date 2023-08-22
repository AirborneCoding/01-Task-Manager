import { useState } from 'react';

const useLocalState = () => {


  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [completed, setCompleted] = useState(false)
  const [completedForSort, setCompletedForSort] = useState("")


  return {
    title,
    setTitle,
    description,
    setDescription,
    completed,
    setCompleted,
    completedForSort,
    setCompletedForSort
  };
};

export default useLocalState;
