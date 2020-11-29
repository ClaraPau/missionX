import React from 'react';
import './App.css';
import Logo from './kids.JPG'; 
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import ProjectSubmissions from './ProjectSubmissions.js';
import TeacherDashboard from './TeacherDashboard.js';


function App() {
    return(
/*Parent Div  */
<Router>
  <div>
  <Switch>

< Route path = "/ProjectSubmissions">
    <ProjectSubmissions/>
</Route>

<Route path = "/TeacherDashboard">
<TeacherDashboard />

</Route>

<Route path = "/">
<Pau />
</Route>

</Switch>
</div>
</Router>

    );
}

function Pau()
{
  return(

    <div>
{/* First section */}

<section class="container">
  <div className="left-half">
    <article>
          <img className = "Kidspic" src={Logo} />   
    </article>
  </div>

  <div className="right-half">
    <article>
    <br></br>
    <br></br>
      <h2>What are you waiting for?</h2>
      <br></br>
      <h1>Start teaching Digital Technologies today.</h1>
      <p>If you need more information, we are happy to answer any
      <br></br>questions you may have. </p>
      <br></br>
      <br></br>
      <br></br>
    </article>

    <div className = "buttons">
        <button className="button1" onClick={() => this.handleClick()}> ENQUIRE NOW
        </button>
        <button className="button2" onClick={() => this.handleClick()}> SIGN UP
        </button>
    </div>

  </div>
</section>


{/* Footer */}
<div className = "footer">

    <div className = "one">
        <h2>COMPANY</h2>
        <li> About us</li>
        <li> Career</li>
        <li> Partners</li>
    </div>

    <div className = "two">
        <h2>COURSES</h2>
        <li>Register</li>
        <li>Login</li>
        <li>Projects</li>
        <li>Teachers</li>
        <li>Parents</li>
        <li>Resources</li>
     </div>

  <div className = "three">
        <h2>SUPPORT</h2>
        <li>FAQs</li>
        <li>Helpdesk</li>
        <li>Contact Us</li>
  </div>

    <div className = "four">
        <h2>LEGAL</h2>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
    </div>

  <div className = "five">
    <h2>LevelUp Works</h2>
    <li>LevelUp Works is an Auckland-based enterprise dedicated
    to developing game-based learning software to help
    teachers in response to the New Zealand Digital Technologies &
    Hangarau Matihiko.</li>
    <li>alan@levelupworks.com</li>
    <li>(021) 668 185</li>
</div>
</div>

    </div>
  );
}

export default App;

