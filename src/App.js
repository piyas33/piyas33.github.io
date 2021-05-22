
import './App.css';
import './css/A.normalize.css.pagespeed.cf.a68yMcoxyw.css';
import './css/A.resume.css.pagespeed.cf.mGbWWRDyyh.css';
import './font-awesome/css/font-awesome.css';

import profile from './profile/picture.jpg'

function App() {
  return (
    <div>
      

    <section id="main">
        <header id="title">
            <h1>Safaetul ahasan</h1>
            <span className="subtitle">Software Engineer | Team Lead</span>
        </header>
        <section className="main-block">
            <h2>
                <i className="fa fa-suitcase"></i> Work Experiences
            </h2>

          {/*===================================== work_experiences_1 ============================*/}
            <section className="blocks">
                <div className="date">
                    <span>Present</span><span>November, 2019</span>
                </div>
                <div className="decorator">
                </div>
                <div className="details">
                    <header>
                        <h3>Software Engineer</h3>
                        <span className="place">Live Media Limited</span>
                        <span className="location">Dhaka, Bangladesh</span>
                    </header>
                    <div>
                        <ul>
                            <li>Designing APIs and Building Microservices.</li>
                            <li>Developing server-side applications with nodeJS, Laravel and Django.</li>
                            <li>Designing and developing highly available backend system and scale them to server millions of users.</li>
                            <li>Optimize Database for high availability and better query performance.</li>
                            <li>Helping(Lead) fellow developers to implement services and following a good standard.</li>
                        </ul>
                    </div>
                </div>
            </section>
          {/*===================================== end_work_experiences_1 ============================*/}

          {/*===================================== work_experiences_2 ============================*/}
            <section className="blocks">
                <div className="date">
                    <span>October, 2019</span><span>April, 2018</span>
                </div>
                <div className="decorator">
                </div>
                <div className="details">
                    <header>
                        <h3>Software Engineer (Team leader)</h3>
                        <span className="place">AmazingSoft</span>
                        <span className="location">Dhaka, Bangladesh</span>
                    </header>
                    <div>
                        <ul>
                            <li>Developed and enhanced customer-facing web applications using the Laravel framework on web logic.</li>
                            <li>Oversee a team of five software developers and lead weekly discussions to brainstorm ideas in software development and to track changes made in existing programs.</li>
                            <li>Manage and lead four software developers.</li>
                        </ul>
                    </div>
                </div>
            </section>
          {/*===================================== end_work_experiences_2 ============================*/}


          {/*===================================== work_experiences_3 ============================*/}
            <section className="blocks">
                <div className="date">
                    <span>March, 2018</span><span>March, 2016</span>
                </div>
                <div className="decorator">
                </div>
                <div className="details">
                    <header>
                        <h3>Software Engineer</h3>
                        <span className="place">Solution world Limited</span>
                        <span className="location">Dhaka, Bangladesh</span>
                    </header>
                    <div>
                      <ul>
                        <li>Direct software design and development while remaining focused on client needs.</li>
                        <li>Implemented designs, including experimentation and multiple iterations.</li>
                        <li>Collaborate closely with other team members to plan, design and develop robust solution.</li>
                      </ul>
                    </div>
                </div>
            </section>
          {/*===================================== end_work_experiences_2 ============================*/}

        </section>


        {/*===================================== skills ============================*/}
        <section className="main-block">
            <h2>
                <i className="fa fa-folder-open"></i> Skills
            </h2>
            <section className="blocks">
                <div className="date">
                </div>
                <div className="decorator">
                </div>
                <div className="details">
                    <header>
                        <h3>Technical Skill</h3>
                    </header>
                    <div className="no-top-margin">
                        <ul>
                            <li>PHP(Laravel),Node.js(ExpressJs),Python(Django)</li>
                            <li>Reactjs,Vuejs.</li>
                            <li>API Integration like Facebook, Google, SMS and Payment Gateway and Restful API.</li>
                            <li>Microservices, REST Api, PubNub, GoogIeAPls, Git, Slack and Bitbucket.</li>
                            <li>MySQL, Postgresql and Mongodb, Couchdb.</li>
                            <li>AWS (EC2, S3, RDS), WebRTC.</li>
                            <li>DevOps (Apache, Nginx, Docker, Kubernetes, CI/CD, etc).</li>
                        </ul>
                        
                    </div>
                </div>
            </section>



            <section className="blocks">
                <div className="date">
                </div>
                <div className="decorator">
                </div>
                <div className="details">
                    <header>
                        <h3>Specialist In</h3>
                    </header>
                    <div className="no-top-margin">
                        <ul>
                            <li>Javascript, Laravel, Node.JS, MySQL</li>
                            <li>Microservices, REST, Payment Gateway</li>
                            <li>Backend Infrastructure And Automation</li>
                        </ul>
                    </div>
                </div>
            </section>



        </section>
        {/*===================================== end_skills ============================*/}


        {/*===================================== education ============================*/}
        <section className="main-block concise">
            <h2>
                <i className="fa fa-graduation-cap"></i> Education
            </h2>
            <section className="blocks">
                        <div className="date">
                            <span>2018</span>
                            <span>2017</span>
                        </div>
                        <div className="decorator">
                        </div>
                        <div className="details">
                            <div>
                                <header>
                                    <h3>M.Sc in Computer Science and Engineering</h3>
                                    <span className="place">Jahangirnagar University</span>
                                    <span className="location">Dhaka, Bangladesh</span>
                                </header>
                            </div>
                        </div>
                </section> 
            <section className="blocks">
                <div className="date">
                    <span>2016</span><span>2012</span>
                </div>
                <div className="decorator">
                </div>
                <div className="details">
                    <div>
                        <header>
                            <h3>B.Sc in Software Engineering</h3>
                            <span class="place">International Islamic University,Chittagong</span>
                            <span class="location">Chittagong, Bangladesh</span>
                        </header>
                    </div>
            </div></section>

        </section>
        {/*===================================== end_education ============================*/}


        {/*===================================== awards ============================*/}
        {/*
        <section className="main-block concise">
            <h2>
                <i className="fa fa-trophy"></i> Awards
            </h2>
            <section className="blocks">
                <div className="date">
                    <span>2013</span>
                </div>
                <div className="decorator">
                </div>
                <div className="details">
                    <header>
                        1st Runner-up at IIUC Programming Contest
                    </header>
                </div>
            </section>
        </section>*/}
        {/*===================================== end_awards ============================*/}



    </section>

    
    <aside id="sidebar">
        <div className="side-block">
            <img src={profile} alt="profile_image" className="avatar"/>
        </div>
        <div className="side-block" id="personal-info">
            <h1>About Me</h1>
            <ul>
                <li>Polyglot Programmer</li>
                <li>Problem solver</li>
                <li>Team player, Experienced with leading team.</li>
                <li>Technology blogger</li>
                <li>Fast learner and explorer</li>
            </ul>
        </div>
        <div class="side-block" id="personal-info">
            <h1>Language</h1>
            <ul>
                <li>English</li>
                <li>Bangla</li>
            </ul>
        </div>
        <div class="side-block" id="contact">
            <h1>Contact Info</h1>
            <ul>
                <li><i className="fa fa-phone"></i> <a href="tel:+8801762002666">+8801762002666</a></li>
                <li><i class="fa fa-envelope"></i> <a href="mailto:safaetul.ahasan@gmail.com">safaetul.ahasan@gmail.com</a></li>
                <li><i class="fab fa-skype"></i> safaetul ahasan</li>
                <li><i class="fa fa-home"></i> Tejgaon, Dhaka, Bangladesh.</li>
            </ul>
        </div>
        <div class="side-block" id="personal-info">
            <h1>Personal Info</h1>
            <ul>
                <li>Date of Birth: 23/04/1994</li>
                <li>Sex: Male</li>
                <li>Religion: Islam</li>
                <li>Nationality: Bangladeshi (By Birth)</li>
                <li>Marital Status: Unmarried</li>
            </ul>
        </div>


        <div class="side-block" id="contact">
            <h1>Links</h1>
            <ul>
                <li>
                    <i class="fab fa-linkedin-in"></i>
                    <a href="https://www.linkedin.com/in/safaetulahasan/" target='_blank'> safaetulahasan/</a>
                </li>
                <li>
                  <i class="fab fa-medium-m"></i>&nbsp;
                  <a href="https://safaetulahasan.medium.com/" target='_blank'>safaetulahasan.m.com</a>
                </li>
                <li>
                    <i class="fab fa-stack-overflow"></i> &nbsp;
                    <a href="https://stackoverflow.com/users/12910298/safaetul-ahasan-piyas" target='_blank'>safaetul-ahasan</a>
                </li>
                <li>
                  <i class="fab fa-github-square"></i>&nbsp;
                  <a href="https://github.com/piyas33" target='_blank'>github.com/piyas33</a>
                </li>
                <li>
                  <i class="fab fa-gitlab"></i>&nbsp;
                  <a href="https://gitlab.com/peyasgitlab" target='_blank'>gitlab.com/peyasgitlab</a></li>
            </ul>
        </div>


        <div class="side-block" id="disclaimer">
            <a href="safaetulahasan.pdf" download="" class="btn">Download</a>
            <p>This resume is available online at <br/> — <a href="/"></a></p>
        </div>
    </aside>
    







    </div>
  );
}

export default App;
