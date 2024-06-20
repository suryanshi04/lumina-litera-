import React from 'react';
import '../Styles/about.css';
import abgirl from './abg.png';
import html from './images/html.png';
import css from './images/css.png';
import js from './images/js.png';
import react from './images/react.png';
import node from './images/node.png';
import cpp from './images/cpp.png';
import java from './images/java.png';
import python from './images/python.png';
import mongodb from './images/mongodb.png';
import next from './images/next.png';
import three from './images/three.png';
import sql from './images/sql.png';

const About = () => {
  return (
    <div className='content'>
      <div className='home-container'>
        <div className='text-container'>
          <h1>Know Who <span>I'm</span></h1>
          <p className='info'>
            Hello everyone! I am <span>Suryanshi Sharma</span> from <span>Greater Noida.</span> I am currently<br/>
            <br/>
            in 3rd of B.Tech Computer Science. My specialisation is Full Stack Development<br/><br/>
            and I am really interested in working on Web Technologies and AI/ML.<br/><br/>
            I am pursuing my degree from Bennett University<br/>
            <br/>
            <br/>
            Here are some of my hobbies- <br/>
            1. Reading books<br/>
            2. Dancing <br/>
            3. Skating <br/>
          </p>
        </div>
        <div className='image-container'>
          <img src={abgirl} alt="Student" className="student-image" />
        </div>
      </div>
      <div className='skills'>
        <h1 className='skill'>Professional <span>Skillset</span></h1>
        <table>
          <tr>
            <td className='icont'>
            <img src={html} alt="html" className="student-image" />
            </td>
            <td className='icont'>
            <img src={css} alt="css" className="student-image" />
              </td>
              <td className='icont'><img src={js} alt="css" className="student-image" /></td>
              <td className='icont'><img src={react} alt="css" className="student-image" /> </td>
              <td className='icont'><img src={node} alt="css" className="student-image" /></td>
          </tr>
          <tr>
          <td className='icont'>
            <img src={cpp} alt="html" className="student-image" />
            </td>
            <td className='icont'>
            <img src={java} alt="css" className="student-image" />
              </td>
              <td className='icont'><img src={python} alt="css" className="student-image" /></td>
              <td className='icont'><img src={mongodb} alt="css" className="student-image" /> </td>
              <td className='icont'><img src={three} alt="css" className="student-image" /></td>
          </tr>
          <tr>
          <td className='icont' ><img src={sql} alt="css" className="student-image" /></td>
          <td className='icont'><img src={next} alt="css" className="student-image" /> </td>
          </tr>
        </table>
        <br/>
        <br />
        </div>
    </div>
  );
};

export default About;