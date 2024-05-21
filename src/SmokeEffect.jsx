import React, { useRef, useEffect } from 'react';
import Fluid from 'webgl-fluid'; 
import './Smoke.css';

const SmokeEffect = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (canvas) {
            const fluidOptions = {
                TRIGGER: 'hover',
                IMMEDIATE: true,
                AUTO: false,
                INTERVAL: 500,
                SIM_RESOLUTION: 128,
                DYE_RESOLUTION: 1024,
                CAPTURE_RESOLUTION: 512,
                DENSITY_DISSIPATION: 2.6,
                VELOCITY_DISSIPATION: 2.6,
                PRESSURE: 0.06,
                PRESSURE_ITERATIONS: 20,
                CURL: 30,
                SPLAT_RADIUS: 0.35,
                SPLAT_FORCE: 4000,
                SPLAT_COUNT: Number.parseInt(Math.random() * 20) + 5, 
                SHADING: false,
                COLORFUL: true,
                COLOR_UPDATE_SPEED: 5,
                PAUSED: false,
                BACK_COLOR: { r: 0, g: 0, b: 0 },
                TRANSPARENT: true,
                BLOOM: false,
                BLOOM_ITERATIONS: 6,
                BLOOM_RESOLUTION: 128,
                BLOOM_INTENSITY: 0.5,
                BLOOM_THRESHOLD: 0.5,
                BLOOM_SOFT_KNEE: 0.5,
                SUNRAYS: true,
                SUNRAYS_RESOLUTION: 196,
                SUNRAYS_WEIGHT: 0.3,
            }
            Fluid(canvas, fluidOptions);
        }
    }, []);

    return (
        <div className="smoke-container">
            <canvas ref={canvasRef} className="smoke-canvas"></canvas>
        </div>
    );
}

export default SmokeEffect;
