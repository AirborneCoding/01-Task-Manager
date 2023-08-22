import React, { useEffect, useState } from "react";
// redux toolkit
import { useDispatch, useSelector } from 'react-redux';
import { getTasksCount } from "../redux/Apis/taskApiCall"


const FilterTasks = ({ title, completedForSort, setCompletedForSort, setTitle }) => {
 // redux toolkit
 const dispatch = useDispatch()
 const { nbrOfTasks } = useSelector(state => state.taskState)

 // React.useEffect(() => {
 //  dispatch(getTasksCount())
 // }, [])

 
 // search by title
 const handleSearchNameChange = (e) => {
  setTitle(e.target.value);
 };
 
 useEffect(() => {
  setCompletedForSort(completedForSort);
 }, [completedForSort, setCompletedForSort]);

 // sorting by is completed
 const handleRadioChange = (e) => {
  setCompletedForSort(e.target.value);
 };

 // sorting by is completed
 // const handleRadioChange = (e) => {
 //  const value = e.target.value;
 //  setCompletedForSort(value);
 //  setCurrentPage(1); // Reset to the first page when filtering
 //  dispatch(getAllTasks(title, value, 1, itemsPerPage)); // Fetch data for the first page
 // };

 
 return <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
  <h2 className="text-xl font-semibold mb-4 md:col-span-2 lg:col-span-3">
   Task List {nbrOfTasks} :
  </h2>
  <div className="md:col-span-1 lg:col-span-1">
   <form action="">
    <input
     type="search"
     className="w-full py-2 px-2 rounded"
     placeholder="Search..."
     value={title}
     onChange={handleSearchNameChange}
    />
   </form>
  </div>
  <div className="md:col-span-1 lg:col-span-1 flex flex-col space-y-2">
   <label>
    <input
     type="radio"
     name="completedFilter"
     value="all"
     checked={completedForSort === 'all'}
     onChange={handleRadioChange}
    />
    All
   </label>
   <label>
    <input
     type="radio"
     name="completedFilter"
     value="true"
     checked={completedForSort === 'true'}
     onChange={handleRadioChange}
    />
    Completed
   </label>
   <label>
    <input
     type="radio"
     name="completedFilter"
     value="false"
     checked={completedForSort === 'false'}
     onChange={handleRadioChange}
    />
    Uncompleted
   </label>

  </div>
 </div>
};
/* 

*/
export default FilterTasks;
