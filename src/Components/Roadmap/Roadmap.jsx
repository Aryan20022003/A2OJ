import SectionTitle from "../SectionTitle";
import "./roadmap.css";
import "../../App.css";
import Data from "./RoadmapData";
import { Fade } from "react-reveal";
import Coding from "../Hero/coding.svg"; //temporary image source will be replace in final build.
//must be replaced in final build.


const Roadmap = () => {
  return (
    <section id="roadmap">
      <SectionTitle title="Roadmap" />
      <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-white text-center mx-auto my-6 px-4 text-xl max-w-screen-xl">
        Learning path to get started in your CP journey.
        <span className="text-red-500">
        </span>
      </p>
      <div
        style={{ fontFamily: "'Montserrat', sans-serif" }}
        className="roadmap_timeline max-w-screen-lg mx-auto mt-12"
      >
        <div className="w-full mx-auto p-4">
          <div className="roadmap_items mx-auto">
            {
              Data.map((item, index) => {
                return (
                  <div key={index} style={{ color: "#000" }} className="roadmap_item">
                    <Fade delay={500} left><div className="roadmap_item_date text-red-500">{item.date}</div></Fade>
                    <Fade delay={1000} top><div className="roadmap_item_dot" /></Fade>
                    <Fade duration={1500} right>
                      <div className="roadmap_item_content drop-shadow-sm p-5">
                        <img src={Coding} alt="" />
                        <h3 className="roadmap_header">{item.header}</h3>
                        <ul>
                          {item.text.map((textData, textIndex) => (<li key={textIndex}>{textData}</li>))}
                        </ul>
                        {/* console.log(item.text); */}
                      </div>
                    </Fade>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
