import { ArrowDownward, KeyboardArrowDown } from "@material-ui/icons"
import "./intro.scss"
import { init } from 'ityped';
import Typewriter from 'typewriter-effect'


const Intro = () => {

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/khaoula.png" alt="" />
        </div>

      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Khaoula Khemiri</h1>
          <h3>Developer ,
            <Typewriter
              options={{
                strings: ["Mechatronic engineers", "Freelancer"],
                autoStart: true,
                delay: 75,
                loop: true
              }}
            />
          </h3>

          <div className="aboutMe">
            I am a web developer. I specialize in creating user interfaces
            and web applications using modern front-end and back-end technologies

          </div>
          <div className="contactContainer">
            <a href="./cv/cv-khaoula-khemiri.pdf" download>download CV</a>
            <a href="#contact" className="talk" >Let's talk</a>
          </div>


        </div>

        <a className="iconContainer" href="#experience"> <KeyboardArrowDown className="icon" /></a>

      </div>
    </div>
  )
}

export default Intro
