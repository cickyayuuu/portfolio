import React from 'react'
import './Projects.css'

const Projects = () => {
  const Projects = [
    {
      title: 'CodePencil Online code editor',
      image: 'https://media.istockphoto.com/id/887814862/vector/web-design-browser.jpg?s=612x612&w=0&k=20&c=rRNW4h-qjNv3OzhnYFrx03MfBQCwGreRsJsjx_-Kp-Q=',
      link: 'https://www.futurelearn.com/certificates/jk0rxoi',
      description: 'User experience, known as UX, makes a huge difference to whether a digital product or project succeeds...'
    },
    {
      title: 'AI Trip Planner and booking management',
      image: '/aitrip.png',
      link: 'https://www.hackerrank.com/certificates/8f38881809e2',
      description: 'AI trip planner: Personalizes itineraries using preferences/budget, automates bookings, and provides real-time updates for efficient travel planning.'
    },{
      title: 'Portfolio',
      image: '/portfolio.png',
      link: 'https://www.hackerrank.com/certificates/8f38881809e2',
      description: 'Hehe, This is the website that you are currently on! My personal website built with React and designed on Figma by me.'
    }
  ];

  return (
    <section className='projects'>
      <div className="project-landing">
        <div className="project-container">
          <div className="project-welcome">
            <h1>My Projects</h1>
          </div>
          
          {Projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-card-left">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-card-right">
                <div className="project-card-right-content">
                  <h1>{project.title}</h1>
                  <p>{project.description}</p>
                </div>
                <div className="social">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAvCAYAAAClgknJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQjSURBVHgB1Zo9T9tQFIZPUoYu0JQVhoQNlqYbC2o6gDpSYKhYmvyCtANsKCA2lpI/QMLCBGorsTEQmMLUsEAnMBJI3QiwQ9/X8UWJcWxfxw7hkYy/rvH5uvf43JuYhEASYDcdj8ffPTw8pHGc4OWmJnVsBve4X8P+AFvNANIhMQkIZE5A4DwEykqrsDpU8Pwm90GV0VYAgmdisVgBhxkJEfzP8v39/YquIr4VsCxegMW+SXTUocj62dnZit8HfClgWf2nNGK7Gxgw1Ec/3oh7NRgZGSlA+H3pnvAkiXf+geGmvRq+crsJ4UsRh4wbr6HEl8HBQbm+vj5o16itApbwWXl+MolE4qZer1edbjoqwLB5Rss/AZ74BCWOocTfJ/fsFxB3WTxQkt6DSfC9vWO3dGJmVAj/Q3qThJNhWzwA+UtolJUImJyclFwu59qmVCrJ3t6eaxt44TucsK7OHxXgkGWN9ZGwtbUl4+Pjrm2q1arMz8+LBwylFJTg95X0qasQPi8RQuvaGRsbk4GBAdGE+YgDzDJPTA9YmXZf57/wxaOjo65trq6u5PLy0vHe3NycrK2ttVzz6QHy6AXlga+iAWM5n897Wu/29lYmJibk7u6u5bpdeLbT9AS9wCxdNkchWN8zZStmZ2dlaWnJ1wspmB278IuLi3JyciK6QGbT6H0MH9H4zuFoolhYWGgbIuT09LTF+k7Cb29vy8zMjAQgzS9khlBG5yllecbrzs6O7+faCd8BNHqaIfROIiYC4RXpPsRSUiLEj/BqiHUaaj1IMoSSEhF+Lc/s65WBnUCF+IYhFEmh4iU8+1KAJNYCauikZ0UWBC/hh4eH5fDwUHZ3d6W/v186IXQFOMx6hc3Q0JBpfSrCz4lOiCMlGxIiU1NTj8chjjaOoA8YHIXqEiLFYtHMwMwTQTqmDugDF33wwDGUSEtIMDOvrq5Kl6ixD9Tk5WJQgV/yMmF5XIvzb9gduRsg7Cvcq2F0UzThEBiUTp5VoAObMquChkVywc+DR0dHZm2rkpHb57QTavxXBKkFpBE+FR40F/VlVSR4CcAMGoYVOeRy0wUhn4MCZR43K2BOqIqPbyMKz7LSqyZuB4ucjY0N05sBMM7Pz1PqxD4vtGwtXvQs1rR7RZ0/mVpMpVL0QmiJLUwgfBHCt8zZxh0afZbGolyvYdiFJ3GnVuwk0luYKzZONxyn1zmNjensC53plghxXW5qu8ABJWo9oITnWplrQcOxlnPy0lik7ip4b8XPQp/rGhmBJ/7BE79x+DbMz243IDjXi3N4t+dgorXQba3eME8kJQJodexyOovdgX5qQEWwy4flEUvwleYE5ZfAv5UgUIQKZLF90FXGEpqhWVaLFUHoSIFmONEqjQzOLclJp+b7+Py9kUb1Z0jjlyqhJMv/fJbs3KjU3fsAAAAASUVORK5CYII=" alt="project link" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects