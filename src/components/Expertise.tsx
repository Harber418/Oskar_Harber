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
    "Prof. D Marenduzzo",
    "Dr. J Thijssen",
    "SHP"
];

const labelsSecond = [
    "DDFT",
    "Quantum Espresso",
    "C++",
    "HPS",
    "Solid state physics",
    "band structres/ DOS",
    "EOS for Ice I, II and VIII",
    "Linux"
];

const labelsThird = [
    "Python",
    "Moddeling and Visualisation",
    "Dr. T Shendruk",
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
                    <p>I have written my own Dynamic Denisty Functional Theory simulation to study soft systems, in addition to extensive experiense performing DFT simulations for 'hard' condensed systems. </p>
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
                    <p>I have develpoed simulations for a miriad of systems ranging from the Ising model to the cahn-hilliard equation mainly using monte carlo techneiques. </p>
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