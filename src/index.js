import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function Hi() {
  return <div>
     <div className="container">
        <div className="header">
            <h1>
                AQSA FAISAL
            </h1>
            <p> <b>Mobile</b>: 0302-0224120 </p>
            <p><b>Address</b>: ZEB LAKHANI TOWER,SADDAR,KARACHI  </p>
            <p> <b>Email</b>: aqsafaisal086@gmail.com </p>
        </div>
        <div className="content">
            <h2>OBJECTIVE</h2>
            <p>
                To secure a challenging position in a reputable organization to expand my learnings, knowledge, and
                skills. Secure a responsible career opportunity to fully utilize my training and skills, while
                making a significant contribution to the success of the company.
            </p>
            <h2>EDUCATION</h2>

            <ul>
                <li>Bachelors of Commerce (University Of Karachi) 
                    December,2022</li>
                <li>
                    Intermediate (Govt College of Commerce & Economics) JULY,2018
                </li>
                <li>
                    Matriculation(Rose Petal School) JULY,2016
                </li>
            </ul>
            <h2>INTERESTS/HOBBIES</h2>
            <ul>
                <li>Reading</li>
                <li>Sketching & Painting</li>
                <li>Arts & design</li>
            </ul>
            <h2>SKILLS</h2>

            <ul>
                <li>MS Office(2016)</li>
                <li>Responsive Web Layout (HTML,CSS,JAVASCRIPT)</li>
                <li>Internet Browsing</li>
            </ul>
            <h2>COURSES</h2>
            <p>Mern Stack Developer from Sysborg (2022) In Progress</p>
            <h2> REFERENCE</h2>
            <p>
                will be furnished on request
            </p>

        </div>


    </div>

  </div>;
}

ReactDOM.render(<Hi/>, document.querySelector('#root'));