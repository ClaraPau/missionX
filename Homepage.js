import React from 'react';
import './Homepage.css';
function Homepage() {
    return(
<div>
    <div className = "topNav">
        <div className = "logo">
            <p>imagine logo here</p>
            <div className = "logoText">
                <p>Line 1</p>
                <p>Line 2</p>
            </div>
        </div>
        <div className = "navLinks">
            <p>link 1</p>
            <p>link 2</p>
            <p>link 3</p>
        </div>
        <div className = "sign">
            <p>This is where to sign in!</p>
        </div>
    </div>
    <div className = "firstPage">
        <div className = "header">
            <p>Headerspace</p>
        </div>
        <div className = "stuff">
            <p>main stuff</p>
        </div>
        <div className = "greystuff">
            <p>photo?</p>
        </div>
        <div className = "enroll">
            <p>enroll</p>
        </div>
        <div className = "footer">

        </div>
    </div>
</div>
    );
}
export default Homepage;