import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

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
                        <h2>Education</h2>
                        <Grid>
                            <Cell col={4}>University of North Texas</Cell>
                            <Cell col={8}>2015 - 2017</Cell>
                        </Grid>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;