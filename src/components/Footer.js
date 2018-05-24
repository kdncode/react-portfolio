import React, { Component } from 'react';
import { Footer, FooterSection, FooterLinkList } from 'react-mdl';

class Footer1 extends Component {
    render() {
        return (
            <Footer size="mini" style={{ background: 'rgb(90, 255, 177)', color:  '#fff'}}>
                <FooterSection type="left" logo="Title">
                    <FooterLinkList>
                        <a href="/">Help</a>
                        <a href="/">Privacy & Terms</a>
                    </FooterLinkList>
                </FooterSection>
            </Footer>
        );
    }
}

export default Footer1;