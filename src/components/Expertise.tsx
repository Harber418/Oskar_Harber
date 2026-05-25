import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom, faMicroscope } from '@fortawesome/free-solid-svg-icons'
import { faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "Lammps",
    "Aiasse",
    "Davide Marenduzo",
    "Job thisstle",
    "SHP"
];

const labelsSecond = [
    "Quantum Espresso",
    "HPS",
    "Solid state physics",
    "band structres/ DOS",
    "EOS for Ice I, II and VIII",
    "Linux",
    "Elton santos"
];

const labelsThird = [
    "Python",
    "MVP",
    "tyler shedrik",
    "Ising/Pots model",
    "SIRS model",
    "Cahn-hilliard",
    "Poisson",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faAtom} size="3x"/>
                    <h3>Molecular Dynamics</h3>
                    <p>I have worked with LAMMPS to run simulations for calloidal systems.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faMicroscope} size="3x"/>
                    <h3>Density Funtional Theory</h3>
                    <p>Useing Quantum espresso I have performed a meriad of dft calculations on archer 2, from the phases of ice to band gaps of quartz and tin. </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Moddeling systems from sctrach</h3>
                    <p>Using python I have moddeled systems from the Ising model to the cahn-hilliard equation.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;