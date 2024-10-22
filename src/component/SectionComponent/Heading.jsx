import React from 'react'

const Heading = ({head, className, dataAos, dataAosDelay}) => {
    return (
        <div data-aos={dataAos} data-aos-delay={dataAosDelay}>
            <h2 className={` m-0 p-0 ${className}`}>
                {head}
            </h2>
        </div>
    )
}

export default Heading