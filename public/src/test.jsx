import React, { useEffect, useState } from "react";
import Usres from "./Users"
import SkeletonCard from "./SkeletonCard";


const test = () => {
    const [users, setUsres] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((users) => {
                setUsres(users);
                setLoading(false)
            })
    }, [])


    return <section>
        <h2 className="text-base text-red-500">Usres</h2>
        <section>



            {/* {loading && <p>Loading...</p>} */}

            <div className="grid grid-cols-3 gap-8">


                {/* skeleton */}
                {loading && <SkeletonCard cards={8} />}
                {
                    users.map((user) => {
                        return <Usres key={user.id} {...user} />
                    })
                }
            </div>
        </section>
    </section>;
};

export default test;
