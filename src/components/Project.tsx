import React from "react";

import project1 from '../assets/images/animation_task__.gif';
import project2 from '../assets/images/ising_plots_g.png';
import silicon from '../assets/images/cominedfigure.png';
import ice from '../assets/images/common_tangent_vdw.png';
import mol from '../assets/images/AIASSE.png';
import hpc from '../assets/images/hpc.jpeg';
import shp from '../assets/images/localpsi6.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Recent Research</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Harber418" target="_blank" rel="noreferrer"><img src={project1} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Harber418" target="_blank" rel="noreferrer"><h2>Cahn-Hilliard equaiton</h2></a>
                <p>Using 2D grid it was possible to simulate the spontaneous nucleation of phase separation as well as spinodal decomposition</p>
            </div>
            <div className="project">
                <a href="https://github.com/Harber418/Electronic-structure-theory" target="_blank" rel="noreferrer"><img src={silicon} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Harber418/Electronic-structure-theory" target="_blank" rel="noreferrer"><h2>phonon density of states</h2></a>
                <p>Using Quantum espresso I simulated a sample so silicon and used this to produce the band structre and desity of sates for the phonon modes.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Harber418" target="_blank" rel="noreferrer"><img src={project2} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Harber418" target="_blank" rel="noreferrer"><h2>Ising Model</h2></a>
                <p>Using the Ising model I was able to study phase transitions of a magnetic system based of a canonical ensemble.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Harber418/Electronic-structure-theory" target="_blank" rel="noreferrer"><img src={ice} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Harber418/Electronic-structure-theory" target="_blank" rel="noreferrer"><h2>Ice I, II and VIII</h2></a>
                <p>Simulating ice in different configurationas and using a vinet EOS gave me fits that i could use the common tanget method to find transition presures between the states with results within 1% of literaute values.</p>
            </div>
            <div className="project">
                <a href="https://lnkd.in/et4WuHVK" target="_blank" rel="noreferrer"><img src={mol} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://lnkd.in/et4WuHVK" target="_blank" rel="noreferrer"><h2>Aiasee Molecule Libary </h2></a>
                <p>During my 8 week internship for Cip Pruteanu and Ayobami Daramola I worked on their novel DFT hybrid software producing a moldecule libary for other reasurchers to use.</p>
            </div>
            <div className="project">
                <a href="https://www.epcc.ed.ac.uk/whats-happening/articles/2026-epcc-summer-school-high-performance-computing-apply-now" target="_blank" rel="noreferrer"><img src={hpc} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.epcc.ed.ac.uk/whats-happening/articles/2026-epcc-summer-school-high-performance-computing-apply-now" target="_blank" rel="noreferrer"><h2>EPCC Summer school</h2></a>
                <p>I was accepted to join the EPCC HPC summer school where I will learn how to write parallelize code for Archer 2 and other super computing clusters.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Harber418/simulating-the-effects-of-imperfections-on-crystalisation" target="_blank" rel="noreferrer"><img src={shp} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Harber418/simulating-the-effects-of-imperfections-on-crystalisation" target="_blank" rel="noreferrer"><h2>A study of Polydispersity of crystal quality.</h2></a>
                <p>Working for my seniour houners project I investegated the variance in size for colloidal particles affect the overall structure of the crystal. I used LAMMPS to model the 2D system and discovered a 8% drop due to the production of grain boundarys.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;