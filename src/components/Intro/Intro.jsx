import React from "react";
import "./Intro.css";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import Typewriter from "typewriter-effect";

const Intro = () => {
  const navigate = useNavigate();
  const handleHireMe = () => {
    navigate("/contact");
  };
  return (
    <section id="intro">
      <div className="introContent block">
        <div className="holographic-container">
          <div
            animate={{ scale: 1.5, transition: { duration: 2 } }}
            className="holographic-card"
          >
            <h2>Welcome! I am</h2>
          </div>
        </div>
        <span className="introName">Vicky Kumar</span>
        <span
          className="introText glowingText"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 3.5rem)",
            color: "rgb(2 0 0)",
          }}
        >
          <Typewriter
            options={{
              strings: ["Web Developer", "UI/UX Designer"],
              autoStart: true,
              loop: true,
            }}
          />
        </span>

        <p className="introPara">
          Firstly, thanks for landing here, much appreciated! Need not tell my
          name here, it's written up there in BIG fonts! Just a small
          introduction, I am a geek still trying to figure out what to do in
          life! which then makes me work with various types of web technologies
          and languages. SCROLL DOWN for more!
        </p>

        <div className="social">
          <div className="social-icon">
            <a href="https://www.instagram.com/sabar.rakh.vicky.2810?igsh=NHJwczAzbmJkbGM3">
              <img
                src="data:image/png;base64,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"
                alt="Social"
              />
            </a>
            <a href="https://github.com/cickyayuuu">
              <img
                src="data:image/png;base64,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"
                alt="Social"
              />
            </a>
            <a href="https://www.linkedin.com/in/vicky7367/">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAvCAYAAABzJ5OsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARHSURBVHgB1Zo9TBRREMdndrGQxI/ExsSPnBZ6pyacjYkVp1JYKEihpZ6JCokmaokWQmHsRBKJSEzkbC1OwRLxrDQ0QGE4SDRnAGNDgpBAQXbHmXe398Vxt7vsHXu/5PE2+8V/3r6ZeR+H4AHBW/EIgh4mHZoIKIwAewEwYF1HgiUTKcVHKc2ArwTGZPJNewK2CIJLRDDpeptGECUUsY5JcUmAYcTcGuJYvIgGXX/ChxHwDjGix6kRtsUHO+MBIP0teCu6mCFANmKgPWXnZs3OTaGOkfto6hNQXeFCFEmfCN0ZfmDn5ootH+oY7iUAWy/zFMLu5ODlnnK3lBUf7BiWbhKF7WMo+br15mYXNxXvA+EWmxpQss8HO0ckmkTBH0TZB3pLXdjQ8uKcnGhegM/gRPdwerC1QFeBeAmHElVcJp2qwkKXCI3T+WG0sNuQ/sSPwgWSIUc6z2TJtjy3eoQvfrHzoruXjsON80fUcfzbHDx7/wNqhmGcszJxruVJpfyKdF09BfcuHYNdjTtUuX7hqDKmZug5nUq8anWb2bP97CFVtzz+rIpgfYUaEVHjK7BanvQb4BjKlNpDunZFaqvbROw+GBv7qerRpy2qCPHvc1BLNEDV2OjEUS26rp7k7nNYHb9jY15+moWaw46LMoLj8NgLVUA59PmjbOhBOLCvUZ1Lzv+D6bll6P80AwuLa+AWSVoNJmIzOui7o08vZIVYLCyuZp3X4go79iP+QmJAPsGDe1Rpadqvvti7sV/gBm7wpgauA04eKhZe6py0dte1k+p4fHZRtfL0/DKsrK7DmWP7lGESteSelbV1lSucgkThBo0oQC5msqHOEVVPD1yGQkN2qjwg9HPLvmTh+YgxUv7w15L8IP4zOvVXGeYEQtyreT0cEEHSVaQ1LeFybvz5RVVErCBdRoyw/MIFAVvTQCeEDu1W9YdMVyiXkfszxolDu8Fz8eKMgrSqUC4jS9QRSvmRHdhh1WJQAKrErsYGVUtEyp1LRyBxVrfIEJnXjLQlqEeIUhqSOQV1iInwW0PASahDOEwmNNKMuhRPpjGp8ZwwIau4UF+kZDaVDgVIMf5z38nTxZnV6+sVSMgfFecJzQ92nyo1Esw/t9XrdjBMo0/q3AS8Y1jG9BHwPwleQTsnB7kMy0vLUA8YOZ1Z8eK4kOlLPmYofwOicGyDxk2/Rh6lq6h3FIiXpTRTB792nw07JhtGlTOvWl/wtLAP/ARRT/Eiq7D5+vydj7w/hC7WczyGKJYcbIuWulR+Z2S7DSgjXCg7GVEPIm2LD/AeQV854ULFmVRyoK2bNHhYqygk/0fWZGZet1XcxHO2D2tq3VXuRgkJ13b3YZ3vgKeXB73fAU9vHiecPOT6twcnbsfDJmoP+A3NbubAmR9TxJAHhU5FZ98BHiBfg/eywnzYzIICPMsJFK4HUYoXFJdk1saip2QC5FZwPv8Bg07H3LfSbiYAAAAASUVORK5CYII="
                alt="Social"
              />
            </a>
          </div>

          <Link>
            <div className="holographic-containerbtn">
              <div className="holographic-cardbtn">
                <button className="hireme" onClick={handleHireMe}>
                  Hire Me
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="imageContainer block">
        <img src="/just landed.png" className="bg" alt="Profile" />
      </div>
    </section>
  );
};

export default Intro;
