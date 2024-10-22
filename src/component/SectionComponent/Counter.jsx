import React, { useState, useEffect } from 'react';

const Counter = ({ count }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {

        // Simulate the progress animation
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev < count) return prev + 1;
                clearInterval(interval);
                return count; // Stop at the dynamic count
            });
        }, 100); // Adjust speed as needed

        // Cleanup intervals on component unmount
        return () => {
            clearInterval(interval);
        };
    }, [count]); // Add count as a dependency

    return (
        <>{progress}</>
    );
};

export default Counter;
