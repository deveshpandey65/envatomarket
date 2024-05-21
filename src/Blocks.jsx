import React from 'react';
import image3 from './img/motionarteffect-img6.png';
import image4 from './img/motionarteffect-img7.png';
import image5 from './img/motionarteffect-img9.png';

const details = [
    { image: image5, heading: "Light Weight", para: "Motion Art for Elementor is designed to be lightweight." },
    { image: image3, heading: "100% Responsive Interface", para: "Create a consistent visual experience across all devices." },
    { image: image4, heading: "User Friendly", para: "Ensure a smooth experience for both applicants and administrators." }
];

export default function Blocks() {
    return (
        <div className='Block-Out'>
            {details.map((r, index) => (
                <div className='Block-In' key={index}>
                    <div className='image-Block'>
                        <img src={r.image} alt={r.heading} />
                    </div>
                    <h1>{r.heading}</h1>
                    <p>{r.para}</p>
                </div>
            ))}
        </div>
    );
}






