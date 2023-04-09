import React, { useEffect, useState } from "react"; import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  feautredPortfolio,
  webapp,
  backendapp
} from "../../data"

const Portfolio = () => {
  const [selected, setSelected] = useState("featured")
  const [data, setData] = useState([])
  const list = [
    {
      id: "featured",
      title: "Front end "
    },

    {
      id: "backend App",
      title: "Backend App"
    }
  ]
  useEffect(() => {

    switch (selected) {
      case "backend App":
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
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
              <div className="link">
                <a href="https://getcssscan.com/css-box-shadow-examples" target="_blank">Git Hub</a>
                <a href="https://www.youtube.com/watch?v=ZLLD_EpGtB8" className="linkButton">Live Demo</a>
              </div>

            </div>
          )
        )}

      </div>
    </div>
  );
}

export default Portfolio;
