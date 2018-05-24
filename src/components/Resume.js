import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Skills from './Skill';

class Resume extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img src="https://cdn.dribbble.com/users/50579/screenshots/1631047/scalacat.png" alt="" />
                        </div>
                        <h2>Khoa Nguyen</h2>
                        <h4>Software Engineer</h4>
                        <hr />
                        <h6>Address</h6>
                        <p>123 st, Bay Area, CA 99999</p>
                        <h6>Phone</h6>
                        <p>(999) 999-9999</p>
                        <h6>Email</h6>
                        <p><a href="mailto:khoa.nguyen@engineer.com?Subject=Hello%20again"
                            target="_top">khoa.nguyen@engineer.com</a></p>
                    </Cell>
                    <Cell col={8} className="resume-right-col">
                        {/* EDUCATION */}
                        <h2>Education</h2>
                        <Grid>
                            <Cell col={4}>University of North Texas</Cell>
                            <Cell col={4}>B.S. Computer Information Systems</Cell>
                            <Cell col={4}>2015 - 2017</Cell>
                        </Grid>
                        <hr />

                        {/* EXPERIENCE */}
                        <h2>Experience</h2>
                        <Grid>
                            <Cell col={4}>Fake Company 1</Cell>
                            <Cell col={4}><i>Software Engineer</i></Cell>
                            <Cell col={4}>1/2017 - 5/2018</Cell>
                        </Grid>
                        <Grid>
                            <Cell col={4}>Fake Company 2</Cell>
                            <Cell col={4}><i>Software Engineer</i></Cell>
                            <Cell col={4}>1/2015 - 5/2017</Cell>
                        </Grid>
                        <hr />

                        {/* PROJECTS */}
                        <h2>Projects</h2>
                        <Grid>
                            <Cell col={4}>Uber App</Cell>
                            <Cell col={4}>React, Node, Express, MongoDB</Cell>
                            <Cell col={4}>2015 - 2017</Cell>
                        </Grid>
                        <Grid>
                            <Cell col={4}>AirBNB App</Cell>
                            <Cell col={4}>MongoDB, Express, React, Node</Cell>
                            <Cell col={4}>2015 - 2017</Cell>
                        </Grid>
                        <Grid>
                            <Cell col={4}>Snapchat App</Cell>
                            <Cell col={4}>React, Node, Express, MongoDB</Cell>
                            <Cell col={4}>2015 - 2017</Cell>
                        </Grid>
                        <hr />

                        {/* SKILLS */}
                        <h2>Skills</h2>
                        <Skills 
                            skill="Reactjs"
                            progress="90"
                            skill="Nodejs"
                            progress="95"
                            skill="Express"
                            progress="93"
                        />
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;