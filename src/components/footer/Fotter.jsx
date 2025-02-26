import React from "react";
import "./Fotter.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAeCAYAAADQBxWhAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAITSURBVHgB5VbdccIwDHbCz8FTu0HpBGUEmKBsQLpBO0HZoHSCwAQdIekEYYPQCeCBO/5JP+WknkkNDYn70KvunMiyrM+WZclK/TtaLpetzWYToM3QkkyLt9vts7JEjjBkGL/WOeXD4fDUaDSGygYodulVKhWfZa/7/X6iK2Gsj18HbV6r1W4dx5mrsrRerwfiRtM45G1x9WKxaKuS5NInSRJZ+bVJCbubCl+tVjvKBijcNRVQLOAmq8TuDNMJrnuvbIDW6/VQBIjSrkkRi3lntg3+WpUF5Z1MxahR0XVDZgnwStkgBMmQg2WWHeM7HJ8LtkIEwx2JUOJPAFLzlE2CwYgNBxqoJ4A47xdlgVy9g4wzZraj7TZES68UAqj0Hf1GFJVa7v3a7Wq1etR2ay0HKxMA8SJH1nr7VWCuNmkkUyCRjL0QnwKms+eF0VxP5uUmjlhxcyTJwBDJPst8QzlMWDfIHfG6m8loZkGRNqbX30Dz0lHLfSRa9TkCNowl6I9kjDyDfo914osrFBnTjEf6Wclrg4yfms+xcHli0VJkek56xco4v1g2y7pTgijP3MKgRJyf4+yD7SfwUqBEfEZDQ4T6u92uZ6q1WVBHFSTaHWrsALW4bxgOIZ/ggfcBnTv0PRKi3202m2Fh0Ay4x+CtM6ojvFAeiCkNqhPdQzxX2/SOwiLIzXQv53D5GIBDK0/XP0WfaB/SdpPDjkQAAAAASUVORK5CYII="
            alt="Phone icon"
          />
          <a href="tel:+917367966417" className="phone-link">
            +91 7367966417
          </a>
        </div>

        <h1 className="footer-copyright">@2025 | Vicky Kumar </h1>

        <div className="footer-info">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHWSURBVHgB7VbbVcJAEJ2E91/sIHYAHWAHWIHpQKhArECoAKkArACsADsIHcgfb+K9sjluwisJ4Ue45+zZB2Hu3NmZ3RW54b/D0Cee51mr1ep5s9mUDcOwJCXA7sQ0zXYulxvuEE+nUzuTyQwwtOVCgKBGsVhsBYgXi0UHnaOmQ7SxpIeqKEFQfYdoTkQjHqB5aN9ULyliuVy+KdtsDtdM7Xdb9RZCPprNZnU5ExRAQdjjHVvmgf9YSAZ62Umqfj6f1yhAtmGWk8RIgE/521+HCeeHJwpYGQwt9rGHqaVsNk4SQ6mbz+fvYeBVLdloHRqjUTkCfFNFG2mhHcPpip/Je4EPXLX5HX9N7ZGrJYZ7KPShBGJr6Y4eS64dlEqlMdK/gmFbLbHWXZC8hJwLqFyv1w+IWj1QNnEU6wCBE1ZPB1h+/hrmvUPbEUtxSP07lcBwVy3ZGDdlm0ATJhCi8xhJZRxiRT4uFAqOylKfYAiHjifQHmQlAUiC0PdRAWU40pcESERMUL2ccZ7HCnWauG7i3yw9dSwmgX7a8TXCPqstfKAG+eSp4WbpRa3HiKj5A5TiF3tDI+atwmvMlguBFw/Krxkg9snxAOA9+iTpgud3FyU4lBuuBj+3jGv1GnxLNQAAAABJRU5ErkJggg=="
            alt="Email icon"
          />
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=Vicky9877262@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="email-link"
          >
            <p>Vicky9877262@gmail.com</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
