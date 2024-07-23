import React from "react";
import "./Qualification.css";

const Qualification = () => {
  return (
    <section className="qualification section" id="education">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personel Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          {/* <div className="qualification__button button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div> */}
        </div>

        <div className="qualification__section">
          <div className="qualification__content ">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">High School</h3>
                <span className="qualification__subtitle">
                  Yashwant Public School, Indore
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2018
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Graduation</h3>
                <span className="qualification__subtitle">
                  Indore Institute of Science and Technology, Indore
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Post Graduation Diploma
                </h3>
                <span className="qualification__subtitle">
                  Centre for Development of Advanced Computing, Noida
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Web Development training
                </h3>
                <span className="qualification__subtitle">Geekster</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2024 - Present
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
