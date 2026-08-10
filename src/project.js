// ====================
// Project
// Stanley Nguyen
// Humber College
// CPAN-144-RNA
// Ronak Sheth
// August 17, 2026
// --------------------
// This program demonstrates react, routing, api integration and rendering
// ====================
// Project Requirement: Your web application should utilize JSON data extracted from a Web API - https://marketplace.apilayer.com/big_book-api
import './project.css';

function Project() {
    // Project Requirement: component 3 - information about both group members like name, interest, contribution, ambition
    return (
        <>
        <div className="project-container">
        <div className="project-header"> 
          <h2> Component 3 </h2>
          <h3> Stanley Nguyen </h3>
        </div>

        <div className="student-info"> 
            <h3>Member Information</h3>
            <p>Member name: Stanley Nguyen</p>
            <p>Student id: N01570766</p>
            <p>Group Status: Individual (solo)</p>
            <p>Class: Advance Front-End Programming - CPAN-144-RNA</p>
        </div>

        <div className="student-interest"> 
            <h3>Interest</h3>
            <p>I am interested in learning some front-end development as well as other languages and database to build both my technical skills and problem-solving abilities.</p>
        </div>

        <div className="student-contribution"> 
            <h3>Contribution</h3>
            <p>I contributed to all parts of this project including setting up React Router, building each components, integrating the Big Book API, designing the layout, and test the application to ensure everything works smoothly.</p>
        </div>

        <div className="student-ambition"> 
            <h3>Ambition</h3>
            <p>My ambition is to continue improving my front-end and back-end development skills to eventually build a full-stack application on my own. I aim to continue learning more modern web technologies as I progress in my studies.</p>
        </div>

        <div className="skills-used"> 
            <h3>Skills Used</h3>
            <ul>
                <li>React Components</li>
                <li>React Router</li>
                <li>API Fetching</li>
                <li>javascript ES6</li>
                <li>CSS Styling</li>
            </ul>
        </div>

        <div className="tools-tech"> 
            <h3>Tools & Technologies</h3>
            <p>React, JavaScript, APILayer Big Book API, Visual Studio Code, Github</p>
        </div>

        <div className="project-summary"> 
            <h3>Project Summary</h3>
            <p>This project demonstrates React components, routingm API integration, and rendering. It includes four required components and additional features for enhanced functionality.</p>
        </div>
        </div>
        </>
    );
}

export default Project;