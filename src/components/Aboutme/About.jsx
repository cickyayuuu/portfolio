import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-me">
      <div className="about-me-desc">
        <div className="about-welcome">
          <h1>About Me</h1>
        </div>

        <h2 className="about-header">Who am I?</h2>

        <div className="content">
          <p className="para">
            Hi, I'm Vicky Kumar! I am an aspiring Software Engineer. I have
            completed my Bachelor's in Computer Application from B.B.N.M.U with
            a CGPA of 8.98 and am currently pursuing a Master's in Computer
            Application from K.I.E.T.
          </p>

          <p className="para">
            I am primarily a frontend Web/App Developer and UI Designer! In the
            past 3 years, I have worked with React, Node, MongoDB, GraphQL,
            Next.js, Figma, and UI/UX. I love working with JavaScript and
            React. I'm not deeply into backend, but I am spending some time
            learning Java. I am also well-versed in Python.
          </p>

          <p className="para">
            Apart from academics, I love to sing, play guitar, and sketch!
          </p>

          <a href="https://drive.google.com/file/d/1jcxxEQAEh2_agDYyGjcC0YefjhBjrMkM/view?usp=drive_link">
            <button className="download-btn">
              Download CV
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEySURBVHgB7VXbcYMwEDwF8/qjg5BOUkI6iFNBkg7cQZIKwJ2lA5wv3kN2PZAAYxvOjw/PeGekE0K61Z3YQ0SJNE1DuSTyPF8VRdHQavbdiQ4hO2PMvWaTluQo3EhuJP+ADp6gh6Qsyw+ZAayNqB8I9XE2SdM0IUwA+0YHMkEAs+TYsqxQNEA0MU/Xtmg0F/UjaKtAvM/XYt8L13WX2Eh1P/OkcMQId0aA+TXXy7EYRdS1ZE4EA+AkzH+gJDpIMPDJQXuyREM0RTDwyf9DtxE4WF07oqkUjX2qxMjLrev6QXvJasX7vv8tSlxv7YLyBx/QwvO8DWrU9qGqKpaRNfK+kRNAAfeE+2PYw/EnzKucH7HjOC/bdNm2vWJpkPPiC37fOTD9WQony7JATgSvACn7S/kvT/k2C2f/z5kAAAAASUVORK5CYII="
                alt="Download icon"
              />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
