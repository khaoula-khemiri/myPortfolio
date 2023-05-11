import React, { useEffect, useState } from "react"; import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  feautredPortfolio,
  backendapp
} from "../../data"

const Portfolio = () => {
  const [selected, setSelected] = useState("1")
  const [data, setData] = useState([])
  const list = [
    {
      id: "1",
      title: "1"
    },

    {
      id: "2",
      title: "2"
    }


  ]
  useEffect(() => {

    switch (selected) {
      case "2":
        setData(backendapp)
        break;
      default:
        setData(feautredPortfolio)
    }

  }, [selected]);
  return (
    <div className='portfolio' id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map(item => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id} />
        ))}
      </ul>
      <div className="container">
        {data.map(
          d => (
            <div className="item">
              <img src={d.img} onClick={d.demo} />
              <h3>{d.title}</h3>
              <div className="link">
                <a href={d.git} target="_blank">Git Hub</a>
                <a href={d.demo} target="_blank" className="linkButton">Live Demo</a>
              </div>

            </div>
          )
        )}

      </div>
    </div>
  );
}

export default Portfolio;
