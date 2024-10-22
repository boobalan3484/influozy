import { useEffect, useState } from 'react';
import { Progress } from 'rsuite';

const ProgressSection = ({dataAos, dataAosDelay}) => {

    const color = 'var(--e-global-color-accent)'

    const [progress1, setProgress1] = useState(0);
    const [progress2, setProgress2] = useState(0);
    const [progress3, setProgress3] = useState(0);

    useEffect(() => {
        // Simulate the progress animation
        const interval1 = setInterval(() => {
            setProgress1((prev) => {
                if (prev < 92) return prev + 2;
                clearInterval(interval1);
                return 92;
            });
        }, 90); // Adjust speed as needed

        const interval2 = setInterval(() => {
            setProgress2((prev) => {
                if (prev < 75) return prev + 3;
                clearInterval(interval2);
                return 75;
            });
        }, 80);

        const interval3 = setInterval(() => {
            setProgress3((prev) => {
                if (prev < 86) return prev + 2;
                clearInterval(interval3);
                return 86;
            });
        }, 80);

        // Cleanup intervals on component unmount
        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
            clearInterval(interval3);
        };
    }, []);

    return (
        <div className='d-flex flex-column gap-2' data-aos={dataAos} data-aos-delay={dataAosDelay}>
            <div>
                <h4 className='fs-5 fw-bold m-0 px-3'>Success Campaign</h4>
                <Progress.Line percent={progress1} strokeColor={color} status='active' />
            </div>
            <div>
                <h4 className='fs-5 fw-bold m-0 px-3'>Promote Brand</h4>
                <Progress.Line percent={progress2} strokeColor={color} status='active' />
            </div>
            <div>
                <h4 className='fs-5 fw-bold m-0 px-3'>Project Done</h4>
                <Progress.Line percent={progress3} strokeColor={color} status='active' />
            </div>
        </div>
    );
};

export default ProgressSection;