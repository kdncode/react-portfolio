import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div >
                <Grid className="contact-grid">
                    <Cell col={5}>
                        <img alt="" style={{marginTop: '70px'}} src="https://assets-cdn.github.com/images/modules/logos_page/Octocat.png"/>
                    </Cell>

                    <Cell col={7}>
                        <h3>Stay Connected</h3>
                        <input type="text" placeholder="Name"/><br/>
                        <input type="email" placeholder="Email"/><br/>
                        <input type="text" placeholder="Subject"/><br/>
                        <textarea>Your message</textarea><br/>
                        <input type="submit" value="Send"/><br/>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;