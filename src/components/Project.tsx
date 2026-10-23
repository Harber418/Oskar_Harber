import React from "react";

import project1 from '../assets/images/animation_task__.gif';
import project2 from '../assets/images/ising_plots_g.png';
import silicon from '../assets/images/cominedfigure.png';
import ice from '../assets/images/common_tangent_vdw.png';
import mol from '../assets/images/AIASSE.png';
import hpc from '../assets/images/hpc.jpeg';
import shp from '../assets/images/localpsi6.png';
import SHP from '../assets/images/production_positions_psi6_phase.png';
import mphys from '../assets/images/density.gif';
import film from '../assets/images/film.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Recent Research</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Harber418" target="_blank" rel="noreferrer"><img src={mphys} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Harber418" target="_blank" rel="noreferrer"><h2>DDFT Masters Project</h2></a>
                <p>I developed a dynamic density functional theory simulation to study soft particles and how the genration of quasi-crystaline structrue slow aggrigation.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Harber418" target="_blank" rel="noreferrer"><img src={project1} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Harber418" target="_blank" rel="noreferrer"><h2>Cahn-Hilliard Simulation</h2></a>
                <p>Using a grid model and Cahn-Hilliard dynamics I was able to simulate the spontaneous nucleation, phase separation and spinodal decomposition in a liquid-liquid system such as for oil and water</p>
            </div>
            <div className="project">
                <a href="https://github.com/Harber418/simulating-the-effects-of-imperfections-on-crystalisation" target="_blank" rel="noreferrer"><img src={SHP} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Harber418/simulating-the-effects-of-imperfections-on-crystalisation" target="_blank" rel="noreferrer"><h2>A study of Polydispersity of crystal quality.</h2></a>
                <p>I investegated how variance colloidal particles size affects the overall structure of the crystal. I used LAMMPS to model the 2D system and discovered a 8% drop due to the production of grain boundarys.</p>
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
                <a href="https://www.epcc.ed.ac.uk/whats-happening/articles/2026-epcc-summer-school-high-performance-computing-apply-now" target="_blank" rel="noreferrer"><img src={hpc} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.epcc.ed.ac.uk/whats-happening/articles/2026-epcc-summer-school-high-performance-computing-apply-now" target="_blank" rel="noreferrer"><h2>EPCC Summer school</h2></a>
                <p>I was accepted to join the EPCC HPC summer school where I will learn how to write parallelize code for Archer 2 and other super computing clusters.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Harber418/Electronic-structure-theory" target="_blank" rel="noreferrer"><img src={ice} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Harber418/Electronic-structure-theory" target="_blank" rel="noreferrer"><h2>Ice I, II and VIII</h2></a>
                <p>To resolve transition presures between different phases of ice I performed DFT simulations to accuratly fit an Equation of states fitting, from these fits using a common tanget method I observed transition presures within 1% of their literaute values.</p>
            </div>
            <div className="project">
                <a href="https://lnkd.in/et4WuHVK" target="_blank" rel="noreferrer"><img src={mol} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://lnkd.in/et4WuHVK" target="_blank" rel="noreferrer"><h2>Aiasee Molecule Libary </h2></a>
                <p>During my 8 week internship with Dr. Cip Pruteanu and Dr. Ayobami Daramola I was trained on their novel DFT hybrid software producing a moldecule libary for other reasurchers to use.</p>
            </div>
            <div className="project">
                <a href="https://www.instagram.com/harber_film/" target="_blank" rel="noreferrer"><img src={film} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.instagram.com/harber_film/" target="_blank" rel="noreferrer"><h2>Film Photography</h2></a>
                <p>I was first introduced to film photography by my lovely girlfriend some years ago now and I've been shooting film ever since. I find the process completely magical! If you are interested you can see my work by clicking the pic.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;