import React from 'react';
import './ProfileView.css';
import JasminaSalvadorpic from './jasminaSalvador.JPG'; 


function ProfileView () {

    return (
<div>

{/* Code for the header */}
<div className = "Prof">
    Pass through Nav bar (Mele/Callum?)
</div>

{/* Code for the profile */}

<section class="container">
  <div className="left-half">
  <div className="WHITE">
      
    <article className = "teacherOptions">

    <img className = "teacherProfile" src={JasminaSalvadorpic} alnot = "jasminaPic" />   

<div className = "buttonList">

        <button className="button10" onClick={() => this.handleClick()}> EDIT PROFILE
        </button>

        <br></br>

        <button className="button11" onClick={() => this.handleClick()}> CHANGE PHOTO
        </button>

        <br></br>
        <button className="button12" onClick={() => this.handleClick()}> SETTINGS
        </button> 
        </div>
    </article>
    </div>
  </div>


{/* Code for teacher information */}

  <div className="right-half">
  <div className = "GREY">
  <text className = "teacherName"><h1>Jasmina Salvador</h1></text>

    <article className="teacherInformationInput">
        <div className="item1">School</div>
        <div className="item2">Homai School</div>
        <div className="item3">Courses Purchased</div>  
        <div className="item4">Beginner</div>
        <div className="item5">Date of Birth</div>
        <div className="item6">25 June 1986</div>
        <div className="item7">Contact No</div>
        <div className="item8">027 754 28 00</div>
        <div className="item9">Email Address</div>
         <div className="item10">jsalvador@homai.edu</div>
    </article>
    </div>

    <div className = "buttonsHere">
        <button className="button6" onClick={() => this.handleClick()}> BACK TO PROJECTS
        </button>
        <button className="button7" onClick={() => this.handleClick()}> BACK TO DASHBOARD
        </button>
    </div>

  </div>
 
</section>

{/* Code for the footer */}

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

export default ProfileView;
