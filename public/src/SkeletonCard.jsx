import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonCard = ({ cards }) => {
    return Array(cards).fill(0).map((_, index) => {
        <div key={index}>
            <div>
                <Skeleton height={40} className="mb-1" />
            </div>
            <div>
                <Skeleton count={4} className="mt-0.5" />
            </div>
        </div>

    })
};

export default SkeletonCard;
