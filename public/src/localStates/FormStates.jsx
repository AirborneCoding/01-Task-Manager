import React, { useState } from "react";

const FormStates = () => {

 const [title, setTitle] = useState("")
 const [description, setDescription] = useState("")
 const [completed, setCompleted] = useState(false)

 return <div>FormStates</div>;
};

export default FormStates;
