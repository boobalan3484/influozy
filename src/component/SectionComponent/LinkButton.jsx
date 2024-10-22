import React from 'react'
import '@/style/ComponentStyle.css'

const LinkButton = ({ label, className, dataAos, dataAosDelay, margin }) => {
    return (
        <div data-aos={dataAos} data-aos-delay={dataAosDelay}>
            <div className={`${margin}`}>
                <a href="" className={`link-button ${className}`}>
                    <span>
                        {label}
                    </span>
                </a>
            </div>
        </div>
    )
}

export default LinkButton