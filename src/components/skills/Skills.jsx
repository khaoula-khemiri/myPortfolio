import { React, useEffect } from 'react';
import "./skills.scss";
import { VerifiedUser } from "@material-ui/icons";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
    const controls = useAnimation();
    const controls2 = useAnimation();
    const [ref, inView] = useInView();
    const squareVariants = {
        visible: { x: "0px", transition: { duration: 1.2 } },
        visible2: { x: "0px", transition: { duration: 1.2 } },
        hidden1: { x: '-150px' },
        hidden2: { x: '150px' },


    };


    useEffect(() => {
        if (inView) {
            controls.start("visible");
            controls2.start("visible2");


        } else {
            controls.start("hidden1");
            controls2.start("hidden2");

        }


    }, [controls, inView]);

    return (

        <div className='skills' id="skills">

            <h1>My Skills</h1>
            <div className="skillsContainer">

                <motion.div
                    ref={ref}
                    variants={squareVariants}
                    initial="hidden1"
                    animate={controls}
                    className="frontContainer">
                    <h1>Frontend Development</h1>
                    <div className="itemContainer">
                        <div className="item">
                            <VerifiedUser className='itemIcon' />
                            <div className="itemSkills">
                                <div>Html</div>
                                <span>Experienced</span>
                            </div>

                        </div>

                        <div className="item">
                            <VerifiedUser className='itemIcon' />
                            <div className="itemSkills">

                                <div> JavaScript</div>
                                <span>Experienced</span>
                            </div>

                        </div>

                        <div className="item">
                            <VerifiedUser className='itemIcon' />
                            <div className="itemSkills">
                                <div>Tailwind</div>
                                <span>Experienced</span>
                            </div>

                        </div>

                        <div className="item">
                            <VerifiedUser className='itemIcon' />
                            <div className="itemSkills">
                                <div>CSS</div>
                                <span>Experienced</span>
                            </div>

                        </div>
                        <div className="item">
                            <VerifiedUser className='itemIcon' />
                            <div className="itemSkills">
                                <div>Boostrap</div>
                                <span>Experienced</span>
                            </div>

                        </div>
                        <div className="item">
                            <VerifiedUser className='itemIcon' />
                            <div className="itemSkills">
                                <div>React</div>
                                <span>Experienced</span>
                            </div>

                        </div>
                    </div>

                </motion.div>


                <motion.div
                    variants={squareVariants}
                    initial="hidden2"
                    animate={controls2}
                    className="frontContainer">
                    <h1>Backend Development</h1>
                    <div className="itemContainer">
                        <div className="item">
                            <VerifiedUser className='itemIcon' />
                            <div className="itemSkills">
                                <div>Node Js</div>
                                <span>Experienced</span>
                            </div>

                        </div>

                        <div className="item">
                            <VerifiedUser className='itemIcon' />
                            <div className="itemSkills">
                                <div>MongoDB</div>
                                <span>Experienced</span>
                            </div>

                        </div>

                        <div className="item">
                            <VerifiedUser className='itemIcon' />
                            <div className="itemSkills">
                                <div>Python</div>
                                <span>Experienced</span>
                            </div>

                        </div>

                        <div className="item">
                            <VerifiedUser className='itemIcon' />
                            <div className="itemSkills">
                                <div>Express</div>
                                <span>Experienced</span>
                            </div>

                        </div>

                        <div className="item">
                            <VerifiedUser className='itemIcon' />
                            <div className="itemSkills">
                                <div>Postman</div>
                                <span>Experienced</span>
                            </div>

                        </div>
                    </div>

                </motion.div>
            </div>

        </div>


    )
}

export default Skills


