import React, {useState} from 'react';
import { InfoButton } from '../../components';
import './infoButtonsGrid.css';
import { resume, githubIcon, me, linkedinIcon, handshakeIcon, reactIcon, flutterIcon, cppIcon, pythonIcon, rustIcon, unityIcon, davinciIcon, linuxIcon } from '../../assets';
import {default as rustLogo} from "../../assets/images/rustLogoBlack.svg"

const githubLink = 'https://github.com/DillonHHH';
const linkedinLink = 'https://www.linkedin.com/in/dillon-hines-01001000b01100101b01101100b01101100b01101111b00100001/';
const handshakeLink = 'https://app.joinhandshake.com/stu/users/28048837';
const rychigerLink = "https://www.rychiger.com/"

//This array contains all the stuff inside the buttons grid
const infoButtonsContent = {
    AboutMe: <div className='aboutMeDiv text'>
        <div>
            <p>Hi, I'm Dillon Hines and my greatest passion is programming! I made this website to show off to employers what I can do and, as I do with all my projects,
                I put a lot of care into it to ensure it looks great on both desktop and mobile, feels responsive, and has a fairly clean codebase. I also thought it'd be nice to share
                some things about myself, in case you'd like to know a little more:
            </p>
        </div>
        <br />
        <div className='list text'>
            <big> Hobbies: </big>
            <ul className='aboutMeList'>
                <li> Programming</li>
                <li> Guitar </li>
                <li> Gaming </li>
                <li> Cooking </li>
                <li> Making Games</li>
            </ul>
            <br />
            <big> Interesting Stuff: </big>
            <ul className='aboutMeList'>
                <li> I speak English fluently, and German at a B2 level </li>
                <li> I started programming at the age of 12 writing batch scripts </li>
                <li> My skills are entirely self taught </li>
                <li> I daily-drive Fedora Linux </li>
            </ul>
        </div>
        <div className='contactMeDiv'>
        </div>
        <img src={me} className='meImage' alt='' />
    </div>,

    Connections: <div>
        <div className='iconByTextDiv'>
            <a href={githubLink} target='_blank' rel='noopener noreferrer'> <img src={githubIcon} className='icon' alt='' /></a>
            <a href={githubLink} target='_blank' rel='noopener noreferrer' className='iconText'>GitHub </a>
        </div>
        <div className='iconByTextDiv'>
            <a href={linkedinLink} target='_blank' rel='noopener noreferrer'> <img src={linkedinIcon} className='icon linkedinIcon' alt='' /></a>
            <a href={linkedinLink} target='_blank' rel='noopener noreferrer' className='iconText'> LinkedIn </a>
        </div>
        <div className='iconByTextDiv'>
            <a href={handshakeLink} target='_blank' rel='noopener noreferrer'> <img src={handshakeIcon} className='icon handshakeIcon' alt='' /></a>
            <a href={handshakeLink} target='_blank' rel='noopener noreferrer' className='iconText'> Handshake </a>
        </div>
    </div>,
    Skills: <div>
        <InfoButton className='ChildButton' content={
            <div>
                <div className='iconByTextDiv'>
                    <img src={reactIcon} className='icon' alt='' />
                    <p className='iconText'> React </p>
                </div>
                <div className='iconByTextDiv'>
                    <img src={flutterIcon} className='icon' alt='' />
                    <p className='iconText'> Flutter </p>
                </div>
                <div className='iconByTextDiv'>
                    <img src={pythonIcon} className='icon' alt='' />
                    <p className='iconText'> Python </p>
                </div>
                <div className='iconByTextDiv'>
                    <img src={rustLogo} className='icon' alt='' />
                    <p className='iconText'> Rust </p>
                </div>
                <div className='iconByTextDiv'>
                    <img src={cppIcon} className='icon' alt='' />
                    <p className='iconText'> C++ </p>
                </div>
                <div>
                    <br />
                    <p className='note'> Full Stack! </p>
                </div>
            </div>

        }
            buttonText='Programming'
            show='true'
        />
        <InfoButton className='ChildButton' content={
            <div>
                <div className='iconByTextDiv'>
                    <img src={linuxIcon} className='icon' alt='' />
                    <p className='iconText'> Linux </p>
                </div>
                <div className='iconByTextDiv'>
                    <img src={unityIcon} className='icon' alt='' />
                    <p className='iconText'> Unity </p>
                </div>
                <div className='iconByTextDiv'>
                    <img src={davinciIcon} className='icon' alt='' />
                    <p className='iconText'> Video Editing </p>
                </div>
            </div>

        }
            buttonText='Other Skills'
            show='true'
        />
    </div>,

    Education: <div className='list text'>
        <big>College:</big>
        <ul>
            <li> University of Arkansas </li>
            <li> BS Computer Science </li>
            <li> BA German </li>
            <li> Graduating May 2025 </li>
        </ul>
        <br />
        <big> High School:</big>
        <ul>
            <li> Mansfield High School, Mansfield Arkansas </li>
            <li> Honors, 3.6 GPA </li>
            <li> Graduated May 2020 </li>
        </ul>
    </div>,

    ContactMe: <div className='text'>
        <ul>
            <li>
                <a href="mailto: dillonisaiahhines02@gmail.com"> Email </a>
                <br />
                <p> (dillonisaiahhines02@gmail.com)</p>
            </li>
        </ul>
    </div>,

    WorkExperience: <div className='text'>
        <InfoButton className='ChildButton' content={
                <ul>
                    <li>
                        Located in Steffisburg, Switzerland
                    </li>
                    <li>
                        Agile workflow
                    </li>
                    <li>
                        Effectively worked in a start-up environment
                    </li>
                    <ul>
                        <li>
                            Built the foundations for new software which revolved around the planning and management of factory
                            systems, which was deemed a requirement for the company’s future

                        </li>
                        <li>
                            Used Docker and Azure Devops to orchestrate our microservice architecture
                        </li>
                        <li>
                            Trained to write better code, including unit testing and readability
                        </li>
                    </ul>
                    <li>
                        Collaborated with a diverse team specializing in conventional programming, PLC programming, and front-end
                        design using Ignition
                    </li>
                    <ul>
                        <li>
                            Gained knowledge of factory systems, including PLC programming and Ignition, while improving my skills
                            in team communication
                        </li>
                    </ul>
                </ul>
            }
                buttonText={<p className='involvmentListButtonText'> Rychiger <br/> Spring-Summer 2024 </p>}
        />
        <InfoButton className='ChildButton' content={
                <ul>
                    <li>
                        Located in Arkansas, USA
                    </li>
                    <li>
                        Agile workflow
                    </li>
                    <li>
                        Full stack React developer
                    </li>
                    <ul>
                        <li>
                            UI: Modified chart designs, added KPIs, and overhauled sections/components of our web pages
                        </li>
                        <li>
                            UX: Added navigation buttons and links
                        </li>
                        <li>
                            Back-end: Wrote queries for MongoDB, moved processing from front-end to back-end
                        </li>
                        <li>
                            Bug-fixing: Fixed various bugs relating to data retrieval and data being processed incorrectly resulting in
                            bugs in the UI
                        </li>
                    </ul>
                    <li>
                        Worked with a small team of 6
                    </li>
                    <ul>
                        <li>
                            Being in such a small team made it easy to ask more experienced developers for help whenever I needed
                            it, rapidly accelerating my learning and confidence
                        </li>
                        <li>
                        I stayed in contact with our manager, UI designer, and UX tester, often questioning changes and
                        suggesting my own, resulting in a higher quality app that I could be proud of while also teaching me
                        valuable facets of each of these roles
                        </li>
                    </ul>
                </ul>
            }
                buttonText={<p className='involvmentListButtonText'> SupplyPike <br/> Summer 2023 </p>}
        />

<InfoButton className='ChildButton' content={
                <ul>
                    <li>
                        Located in Arkansas, USA
                    </li>
                    <li>
                        Worked as a tech at the University of Arkansas in Fayetteville
                        <ul>
                            <li>
                                Set up the stage for performances and practices
                            </li>
                            <li>
                                Managed the lights during performances
                            </li>
                            <li>
                                Got to play with giant elevators while moving stage equipment
                            </li>
                        </ul>
                    </li>
                </ul>
            }
                buttonText={<p className='involvmentListButtonText'> Performing Arts Center <br/> Spring 2022 </p>}
        />

    </div>,

    InvolvmentAndLeadership: <div className='text'>
        <InfoButton className='ChildButton' content={
            <ul>
                <li>
                    Graduating in 2025 with a Bachelor's in German
                </li>
                <li>
                    Attended the Technische Universität Darmstadt in Germany for my
                    2023 - 2024 year of college
                </li>
                <li>
                    Attended an internship with<a href={rychigerLink} target='_blank' rel='noopener noreferrer' className='iconText'>Rychiger</a>
                </li>
            </ul>
        }
            buttonText={<p className='involvmentListButtonText'> University of Arkansas German Exchange Program </p>}
        />
        <InfoButton className='ChildButton' content={
            <ul>
                <li>
                    My team and I made a trash robot that goes crazy when the trash is full
                    <ul>
                        <li>
                            It was controllable with both a web and Android app, both of which communicated with it using http requests
                        </li>
                        <li>
                            It used a Raspberry Pi and an Arduino Uno communicating over serial, as well as some small parts such as sensors, motors, LEDs, etc.
                        </li>
                        <li>
                            I handled almost all of the hardware including the wiring, serial communication, and programming the Pi with Python and the Arduino with the Arduino programming language
                        </li>
                    </ul>
                </li>
                <li>
                    We placed 4th out of 23 teams
                </li>
            </ul>
        }
            buttonText={<p className='involvmentListButtonText'> Fall 2022 24-hour Hackathon at the University of Arkansas in Fayetteville </p>}

        />
        <InfoButton className='ChildButton' content={
            <ul>
                <li>
                    My team and I learned Flutter and GitHub basics
                </li>
                <li>
                    We developed a simple cross-platform mobile app
                </li>
                <li>
                    We placed 5th out of 17 teams
                </li>
            </ul>
        }
            buttonText={<p className='involvmentListButtonText'> Fall 2021 24-hour Hackathon at the University of Arkansas in Fayetteville </p>}
        />

    </div>,

    Resume: <div className='text'>
        <a href={resume} target="_blank" rel="noopener noreferrer"> Click Here to Open </a>
    </div>


    //add an "extras" section, show off nextjs usage with a simple database app that allow employers to leave their names and a message that will be shown publicly
    //  (will need to include at least basic profanity checking, there's an npm package named profanity filter)


};


function InfoButtonsGrid(props) {
    const [width, setWidth] = useState(window.innerWidth);

    React.useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize)
    })

    return (
        width > 850 ?
        <div className='grid wrapper'>
            <InfoButton className='aboutMe' content={infoButtonsContent.AboutMe} buttonText={'About Me'} show='true' />
            <div className='grid'>
                <InfoButton content={infoButtonsContent.Connections} buttonText={'Connections'} />
                <InfoButton content={infoButtonsContent.InvolvmentAndLeadership} buttonText={'Involvement and Leadership'} />
                <InfoButton content={infoButtonsContent.WorkExperience} buttonText={'Work Experience'} />
                <InfoButton content={infoButtonsContent.ContactMe} buttonText={'Contact Me'} />
            </div>
            <div className='grid'>
                <InfoButton content={infoButtonsContent.Skills} buttonText={'Skills'} />
                <InfoButton content={infoButtonsContent.Education} buttonText={'Education'} />
                <InfoButton content={infoButtonsContent.Resume} buttonText={'Resume'} />
            </div>
        </div>

        :

        // Could have just used css to have a single column on smaller screen, but I wanted the elements to display in a different order as well
        <div className='grid wrapper'>
        <InfoButton className='aboutMe' content={infoButtonsContent.AboutMe} buttonText={'About Me'} show='true' />
        <div className='grid'>
            <InfoButton content={infoButtonsContent.Skills} buttonText={'Skills'} />
            <InfoButton content={infoButtonsContent.Education} buttonText={'Education'} />
            <InfoButton content={infoButtonsContent.InvolvmentAndLeadership} buttonText={'Involvement and Leadership'} />
            <InfoButton content={infoButtonsContent.WorkExperience} buttonText={'Work Experience'} />
            <InfoButton content={infoButtonsContent.Connections} buttonText={'Connections'} />
            <InfoButton content={infoButtonsContent.Resume} buttonText={'Resume'} /> 
            <InfoButton content={infoButtonsContent.ContactMe} buttonText={'Contact Me'} />
        </div>
    </div>
    )
}

export default InfoButtonsGrid;
