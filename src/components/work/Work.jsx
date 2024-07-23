import React from "react";
import { projectsData } from "./Data";
import { projectsNav } from "./Data";
import WorkItems from "./WorkItems";

const Work = () => {
  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, idx) => {
          return (
            <span className="work__item" key={idx}>
              {item.name}
            </span>
          );
        })}
      </div>
      <div className="work__container container grid">
        {projectsData.map((item) => {
          return <WorkItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Work;
