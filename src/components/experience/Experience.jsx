import "./experience.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { React, useEffect } from 'react';
const Experience = () => {
  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const [ref, inView] = useInView();
  const squareVariants = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    visible2: { opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
    visible3: { opacity: 1, transition: { delay: 1, duration: 0.5 } }
    ,
    hidden: { opacity: 0 }
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      controls2.start("visible2");
      controls3.start("visible3");

    } else {
      controls.start("hidden");
      controls2.start("hidden");
      controls3.start("hidden");
    }


  }, [controls, inView]);

  return (
    <div className="experience" id="experience">
      <h1>My Experience </h1>

      <div className="exeperienceContainer">

        <motion.div
          ref={ref}
          variants={squareVariants}
          initial="hidden"
          animate={controls}
          className="experienceItem"
        >

          <div className="experienceDate">2022-2023</div>

          <div className="experienceDesc">

            <div className="experienceDescTitle">
              Project Manager/ Teaching python online
              <span>TakiAcademy</span>
            </div>

            <div className="experienceDescParagraph">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Officia laborum error minus exercitationem veniam voluptatum,
              non, odio adipisci vel, tempore accusantium voluptate autem culpa
              porro eaque cupiditate praesentium magni quaerat?
            </div>



          </div>
        </motion.div>


        <motion.div
          variants={squareVariants}
          initial="hidden"
          animate={controls2}
          className="experienceItem">

          <div className="experienceDate">2020-2022</div>

          <div className="experienceDesc">

            <div className="experienceDescTitle">
              Mechanical design engineer
              <span> Design office M3I</span>
            </div>

            <div className="experienceDescParagraph">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Officia laborum error minus exercitationem veniam voluptatum,
              non, odio adipisci vel, tempore accusantium voluptate autem culpa
              porro eaque cupiditate praesentium magni quaerat?
            </div>



          </div>
        </motion.div>



        <motion.div
          variants={squareVariants}
          initial="hidden"
          animate={controls3}
          className="experienceItem">

          <div className="experienceDate">2019</div>

          <div className="experienceDesc">

            <div className="experienceDescTitle">
              End of studies' project
              <span>Faculty of Engineering Moncton, Canada </span>
            </div>

            <div className="experienceDescParagraph">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Officia laborum error minus exercitationem veniam voluptatum,
              non, odio adipisci vel, tempore accusantium voluptate autem culpa
              porro eaque cupiditate praesentium magni quaerat?
            </div>
          </div>
        </motion.div>
      </div>


    </div >
  )
}

export default Experience  
