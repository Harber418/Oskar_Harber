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
    "Lennard Johns Potential",
    "Aiasse",
    "Davide Marenduzzo",
    "Job Thijssen",
    "SHP"
];

const labelsSecond = [
    "Quantum Espresso",
    "HPS",
    "Solid state physics",
    "band structres/ DOS",
    "EOS for Ice I, II and VIII",
    "Linux",
    "Elton Santos"
];

const labelsThird = [
    "Python",
    "Moddeling and Visualisation",
    "Tyler Shendruk",
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
                    <FontAwesomeIcon icon={faMicroscope} size="3x"/>
                    <h3>Molecular Dynamics</h3>
                    <p>I have worked with LAMMPS to simulate 2D colloidal systems, specifically looking at the effects fo polydispersity on the quality of the overall crystal. </p>
                    <div className="flex-chips">
                        <span className="chip-title">Highlights:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faAtom} size="3x"/>
                    <h3>Density Funtional Theory</h3>
                    <p>Useing Quantum espresso I have performed a meriad of dft calculations on archer 2, from the phases of ice to band gaps of quartz and tin. </p>
                    <div className="flex-chips">
                        <span className="chip-title">Highlights:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Moddeling systems from sctrach</h3>
                    <p>Using python I have moddeled systems from the Ising model to the cahn-hilliard equation to study phase transitions and emergent phenomena using 2D grid models. </p>
                    <div className="flex-chips">
                        <span className="chip-title">Highlights:</span>
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