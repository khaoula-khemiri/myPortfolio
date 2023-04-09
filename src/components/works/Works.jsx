import {React ,useState} from 'react'
import { Phonelink ,ArrowBackIos,ArrowForwardIos} from '@material-ui/icons'
import "./works.scss";
const Works = () => {
  const [currentSlider, setcurrentSlider] = useState(0);
  const data=[
    {
     id:"1",
     icon:"",
     title:"web Design",
     desc:"llddddd",
     img:"https://cdn.hackr.io/uploads/posts/large/1622186236fS0vx7R61C.png"
    },
    {
      id:"2",
      icon:"",
      title:"back",
      desc:"llddddd",
      img:"https://cdn.hackr.io/uploads/posts/large/1622186236fS0vx7R61C.png"
     },
     {
      id:"3",
      icon:"",
      title:"front",
      desc:"llddddd",
      img:"https://cdn.hackr.io/uploads/posts/large/1622186236fS0vx7R61C.png"
     },
  ]

  const handlClick = (way) => {
  way==="left" ? setcurrentSlider(currentSlider>0 ? currentSlider-1 :2)
  :setcurrentSlider(currentSlider < 2 ? currentSlider+1 :0)
  }
  return (
    <div className='works' id="works">
      
      <div className="slider" style={{transform:`translateX(-${currentSlider*100}vw)`}}>
        {data.map(item=>(<div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <Phonelink />
                </div>
                <h2 className="title">{item.title}</h2>
                <p>{item.desc}</p>
                <span>Projects </span>
              </div>
            </div>
            <div className="right">
              <img src={item.img} alt="" />

            </div>
          </div>
        </div>))}
      </div>
      <div className="arrow left" onClick={()=>handlClick("left")}>
        <ArrowBackIos/>
      </div>

      <div className="arrow right" onClick={()=>handlClick("right")}>
          <ArrowForwardIos/>
      </div>
    </div>
  )
}

export default Works
