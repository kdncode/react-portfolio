import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img className="avatar" src="https://stickershop.line-scdn.net/stickershop/v1/product/2281/LINEStorePC/main@2x.png;compress=true" alt="" />
                        <div className="card">
                            <h3>Front-end Dev</h3>
                            <p>HTML, CSS, Javascript, Typescript, Reactjs, Nodejs, MongoDB</p>
                            <div className="social">
                                <a href="https://github.com/kdncode" target="_blank" rel="noopener noreferrer">
                                    <i className=" fa fa-github"></i>
                                </a>
                                <a href="https://Linkedin.com/iamkhoa" target="_blank" rel="noopener noreferrer">
                                    <i className=" fa fa-linkedin"></i>
                                </a>
                                <a href="https://behance.net/kdncode" target="_blank" rel="noopener noreferrer">
                                    <i className=" fa fa-behance"></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
                
            </div>
        );
    }
}

export default Landing;
