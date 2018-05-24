import React, { Component } from 'react';
import { Footer, FooterSection, FooterLinkList } from 'react-mdl';

class Footer1 extends Component {
    render() {
        return (
            <Footer size="mini" style={{ background: '#f2f2f2', color:  '#555'}}>
                <FooterSection type="left" logo="My Portfolio">
                    <FooterLinkList>
                        <a href="/">Help</a>
                        <a href="/">Privacy & Terms</a>
                        <a href="/">2018 © Khoa Nguyen</a>
                    </FooterLinkList>
                </FooterSection>
            </Footer>
        );
    }
}

export default Footer1;