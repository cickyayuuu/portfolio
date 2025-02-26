import React from 'react'
import './Certifications.css'

const Certifications = () => {
  const certifications = [
    {
      title: 'Digital Skills: User Experience',
      image: '/accen.png',
      link: 'https://www.futurelearn.com/certificates/jk0rxoi',
      description: 'User experience, known as UX, makes a huge difference to whether a digital product or project succeeds...'
    },
    {
      title: 'Problem Solving (Intermediate) Certificate',
      image: '/dsa.png',
      link: 'https://www.hackerrank.com/certificates/8f38881809e2',
      description: 'It covers topics of Data Structures (such as HashMaps, Stacks and Queues) and Algorithms...'
    }
  ];

  return (
    <section className='certifications'>
      <div className="certi-landing">
        <div className="certi-container">
          <div className="certi-welcome">
            <h1>My Certifications</h1>
          </div>
          
          {certifications.map((cert, index) => (
            <div key={index} className="certi-card">
              <div className="certi-card-left">
                <img src={cert.image} alt={cert.title} />
              </div>
              <div className="certi-card-right">
                <div className="certi-card-right-content">
                  <h1>{cert.title}</h1>
                  <p>{cert.description}</p>
                </div>
                <div className="social">
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAvCAYAAAClgknJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQjSURBVHgB1Zo9T9tQFIZPUoYu0JQVhoQNlqYbC2o6gDpSYKhYmvyCtANsKCA2lpI/QMLCBGorsTEQmMLUsEAnMBJI3QiwQ9/X8UWJcWxfxw7hkYy/rvH5uvf43JuYhEASYDcdj8ffPTw8pHGc4OWmJnVsBve4X8P+AFvNANIhMQkIZE5A4DwEykqrsDpU8Pwm90GV0VYAgmdisVgBhxkJEfzP8v39/YquIr4VsCxegMW+SXTUocj62dnZit8HfClgWf2nNGK7Gxgw1Ec/3oh7NRgZGSlA+H3pnvAkiXf+geGmvRq+crsJ4UsRh4wbr6HEl8HBQbm+vj5o16itApbwWXl+MolE4qZer1edbjoqwLB5Rss/AZ74BCWOocTfJ/fsFxB3WTxQkt6DSfC9vWO3dGJmVAj/Q3qThJNhWzwA+UtolJUImJyclFwu59qmVCrJ3t6eaxt44TucsK7OHxXgkGWN9ZGwtbUl4+Pjrm2q1arMz8+LBwylFJTg95X0qasQPi8RQuvaGRsbk4GBAdGE+YgDzDJPTA9YmXZf57/wxaOjo65trq6u5PLy0vHe3NycrK2ttVzz6QHy6AXlga+iAWM5n897Wu/29lYmJibk7u6u5bpdeLbT9AS9wCxdNkchWN8zZStmZ2dlaWnJ1wspmB278IuLi3JyciK6QGbT6H0MH9H4zuFoolhYWGgbIuT09LTF+k7Cb29vy8zMjAQgzS9khlBG5yllecbrzs6O7+faCd8BNHqaIfROIiYC4RXpPsRSUiLEj/BqiHUaaj1IMoSSEhF+Lc/s65WBnUCF+IYhFEmh4iU8+1KAJNYCauikZ0UWBC/hh4eH5fDwUHZ3d6W/v186IXQFOMx6hc3Q0JBpfSrCz4lOiCMlGxIiU1NTj8chjjaOoA8YHIXqEiLFYtHMwMwTQTqmDugDF33wwDGUSEtIMDOvrq5Kl6ixD9Tk5WJQgV/yMmF5XIvzb9gduRsg7Cvcq2F0UzThEBiUTp5VoAObMquChkVywc+DR0dHZm2rkpHb57QTavxXBKkFpBE+FR40F/VlVSR4CcAMGoYVOeRy0wUhn4MCZR43K2BOqIqPbyMKz7LSqyZuB4ucjY0N05sBMM7Pz1PqxD4vtGwtXvQs1rR7RZ0/mVpMpVL0QmiJLUwgfBHCt8zZxh0afZbGolyvYdiFJ3GnVuwk0luYKzZONxyn1zmNjensC53plghxXW5qu8ABJWo9oITnWplrQcOxlnPy0lik7ip4b8XPQp/rGhmBJ/7BE79x+DbMz243IDjXi3N4t+dgorXQba3eME8kJQJodexyOovdgX5qQEWwy4flEUvwleYE5ZfAv5UgUIQKZLF90FXGEpqhWVaLFUHoSIFmONEqjQzOLclJp+b7+Py9kUb1Z0jjlyqhJMv/fJbs3KjU3fsAAAAASUVORK5CYII=" alt="Certificate link" />
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

export default Certifications