import React from "react";
import "./loadingSkeleton.css";
const LoadingSkeleton = () => {
    return (
        <div className='TodoLoading'>
            <span className='TodoCheck'></span>
            <p className='TodoText'></p>
            <span className='TodoDelete'></span>
        </div>
    );
};

export default LoadingSkeleton;
