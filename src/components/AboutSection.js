import React from 'react';
import home1 from '../img/home1.png';
import {About,Description,Image,Hide} from '../styles';
import {motion} from 'framer-motion';

const AboutSection = () =>{
    
    return(
        <About>
             <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2 >We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dreams</span> come</h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </motion.div>
                <p>Contact us for any photography videography ideas that you have. We have professionals with amezing skils.</p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="guy with a camera"/>
            </Image>
        </About>
    )
};


export default AboutSection;