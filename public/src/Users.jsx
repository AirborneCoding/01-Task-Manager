import React from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Users = (props) => {
    // console.log(props);
    return <div className="bg-white rounded-lg shadow-lg p-6 ">
       
        <h2 className="text-2xl font-semibold">{props.name || <Skeleton />}</h2>
        <p className="text-gray-600">{props.email || <Skeleton  />}</p>
        <p className="text-gray-600">{props.website || <Skeleton />}</p>
        <p className="text-gray-600">{props.phone || <Skeleton />}</p>
        <p className="text-gray-600">Full Name: {props.username || <Skeleton count={3} />}</p>
    </div>
};

export default Users;
